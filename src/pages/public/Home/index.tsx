import { useTMDBApi } from "@/app/hooks/api";
import useListMovies from "@/app/hooks/listMovies";
import SquareButton from "@/resources/components/Buttons/Square";
import SearchInput from "@/resources/components/Forms/SearchInput";
import MovieCard from "@/resources/components/MovieCard";
import Pagination from "@/resources/components/Pagination";
import TagCard from "@/resources/components/TagCard";
import { useState } from "react";

export default function HomePage(): JSX.Element {
  const [showTags, setShowTags] = useState(false);

  const { getGenresQuery } = useTMDBApi();
  const { data: genreData } = getGenresQuery();
  const {
    dataList,
    currentPage,
    maxPages,
    setCurrentPage,
    setFilters,
    filters,
  } = useListMovies();

  const handleButtonClick = () => {
    setShowTags((prev) => !prev);
  };

  const handleTagClick = (genre: string) => {
    if (filters.genres === genre) {
      setFilters({ genres: "" });
    } else {
      setFilters({
        genres: genre,
      });
    }
  };

  return (
    <div className="bg-[url(../src/resources/assets/images/hero.png)] h-fit w-full bg-cover bg-center">
      <section className="bg-mauvea-3 dark:bg-mauvedarka-3 backdrop-brightness-[.2] h-fit content">
        <section className="flex justify-center py-4 gap-4 2xl:container mx-auto">
          <SearchInput placeholder="Procure um filme" onSearch={setFilters} />
          <div className="md:h-14 md:w-14 h-10 w-10 bg-mauve-1 rounded-[4px] dark:bg-transparent">
            <SquareButton
              className="text-mauvedark-2 dark:text-mauve-2 dark:backdrop-blur-sm bg-purple-6 hover:bg-purple-4 dark:bg-purpledarka-2 dark:hover:bg-purpledarka-3 hover:cursor-pointer"
              icon={"lets-icons:filter"}
              onClick={() => handleButtonClick()}
            />
          </div>
        </section>
        <section
          className={`flex flex-wrap justify-center p-4 gap-4 2xl:container mx-auto transition-all duration-500 ease-in-out ${
            showTags
              ? "opacity-100 max-h-screen"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          {(genreData ?? []).map((genre) => (
            <TagCard
              key={genre.id}
              className={`hover:cursor-pointer ${
                filters.genres === String(genre.id) ? "!bg-purple-8" : ""
              }`}
              onClick={() => handleTagClick(String(genre.id))}
            >
              {genre.name}
            </TagCard>
          ))}
        </section>
        <div className="mx-1 md:mx-4 mt-2 md:mt-4 rounded-[4px] bg-whitea-1 backdrop-blur-sm p-3 md:p-5 2xl:container 2xl:mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-auto my-2 justify-center">
            {(dataList ?? []).map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                genreList={genreData ?? []}
              />
            ))}
          </div>
        </div>
        <section className="bg-mauve-1 dark:bg-mauvedark-1 p-6 flex justify-center 2xl:mx-auto">
          <Pagination
            maxPage={maxPages ?? 1}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </section>
      </section>
    </div>
  );
}
