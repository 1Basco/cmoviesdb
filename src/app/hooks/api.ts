import { useQuery } from "@tanstack/react-query";
import {
  Filters,
  Genre,
  MovieDetails,
  MovieListResponse,
  VideoListResponse,
} from "../types";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const fetchMovies = async (filters: Filters): Promise<MovieListResponse> => {
  const params = new URLSearchParams({
    api_key: API_KEY,
    language: "pt-BR",
    with_genres: filters.genres || "",
    page: filters.page?.toString() || "1",
  });

  if (filters.searchQuery) {
    params.set("query", filters.searchQuery);
    const response = await fetch(
      `${BASE_URL}/search/movie?${params.toString()}`
    );
    if (!response.ok)
      throw new Error(`Error fetching movies: ${response.statusText}`);
    return response.json();
  }

  const response = await fetch(
    `${BASE_URL}/discover/movie?${params.toString()}`
  );
  if (!response.ok)
    throw new Error(`Error fetching movies: ${response.statusText}`);
  return response.json();
};

const fetchMovie = async (movieId: number): Promise<MovieDetails> => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`
  );
  if (!response.ok)
    throw new Error(`Error fetching movie: ${response.statusText}`);
  return response.json();
};

const fetchGenres = async (): Promise<Genre[]> => {
  const response = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=pt-BR`
  );
  if (!response.ok)
    throw new Error(`Error fetching genres: ${response.statusText}`);
  const data = await response.json();
  return data.genres;
};

const fetchMovieTrailer = async (
  movieId: number
): Promise<VideoListResponse> => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=pt-BR`
  );
  if (!response.ok)
    throw new Error(`Error fetching trailer: ${response.statusText}`);

  const data = await response.json();

  return data;
};

export const useTMDBApi = () => {
  return {
    getMoviesQuery: (filters: Filters) =>
      useQuery({
        queryKey: ["movies", filters],
        queryFn: () => fetchMovies(filters),
        staleTime: 1000 * 60 * 10,
      }),

    getMovieQuery: (movieId: number) =>
      useQuery({
        queryKey: ["movie", movieId],
        queryFn: () => fetchMovie(movieId),
        staleTime: 1000 * 60 * 10,
      }),

    getGenresQuery: () =>
      useQuery({
        queryKey: ["genres"],
        queryFn: fetchGenres,
        staleTime: 1000 * 60 * 60,
      }),

    getMovieTrailerQuery: (movieId: number) =>
      useQuery({
        queryKey: ["trailer", movieId],
        queryFn: () => fetchMovieTrailer(movieId),
        staleTime: 1000 * 60 * 10,
      }),
  };
};
