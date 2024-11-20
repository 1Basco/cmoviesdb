import { Genre } from "@/app/types";

export const getGenres = (genres: Genre[], ids: number[]) => {
  const genreList: String[] = [];
  ids.forEach((id) =>
    genreList.push(genres.find((g) => g.id === id)?.name ?? "")
  );

  return genreList.join("/");
};
