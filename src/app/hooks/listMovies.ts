import { useEffect, useState } from "react";
import { useTMDBApi } from "./api";
import { Filters, Movie } from "../types";

function useListMovies() {
  const { getMoviesQuery } = useTMDBApi();
  const [currentPage, setCurrentPage] = useState(1);
  const [dataList, setDataList] = useState<Movie[]>([]);
  const [maxPages, setMaxPages] = useState(1);
  const [movies, setMovies] = useState<any[]>([]);
  const [filters, setFilters] = useState<Partial<Filters>>({});
  const response = getMoviesQuery({
    page: currentPage % 2 === 0 ? currentPage - 1 : currentPage,
    ...filters,
  });
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);
  useEffect(() => {
    if (response?.data?.results) {
      setMovies(response.data.results);
      setMaxPages(response.data.total_pages ?? 1);
    }
  }, [response]);

  useEffect(() => {
    if (movies.length > 0) {
      if (currentPage % 2 === 0) {
        setDataList(movies.slice(10));
      } else {
        setDataList(movies.slice(0, 10));
      }
    }
  }, [currentPage, movies]);

  return {
    dataList,
    currentPage,
    maxPages,
    setCurrentPage,
    setFilters,
    filters,
  };
}

export default useListMovies;
