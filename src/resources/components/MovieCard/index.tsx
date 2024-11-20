import { POSTER_SIZE } from "@/app/constants/api";
import { Genre, Movie } from "@/app/types";
import { getGenres } from "@/utils/genre";
import { Link } from "react-router-dom";
import UserScoreChart from "../UserScoreChart";
import useIsMobile from "@/app/hooks/isMobile";

interface IMovieCardProps {
  movie: Movie;
  genreList: Array<Genre>;
}

const MovieCard: React.FC<IMovieCardProps> = ({
  movie,
  genreList,
}: IMovieCardProps) => {
  const isMobile = useIsMobile();
  return (
    <div
      style={{
        backgroundImage: `url(${POSTER_SIZE.md + movie.poster_path})`,
      }}
      className="shadow-lg rounded-[4px] w-[183px] h-[241px] lg:w-[235px] lg:h-[355px] bg-cover bg-center group hover:cursor-pointer"
    >
      <Link to={`/movie/${movie.id}`}>
        <div className="relative flex flex-col-reverse h-full p-2 md:p-4">
          <div className="absolute inset-0 bottom-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
          <div className="z-10">
            <h2 className="font-montserrat font-semibold uppercase text-base leading-tight text-mauve-1">
              {movie.title}
            </h2>
            <p className="relative font-montserrat text-xs text-mauve-1 mt-2 transition-all delay-200 ease-in hidden group-hover:block">
              {getGenres(genreList, movie.genre_ids)}
            </p>
          </div>
          <div className="hidden group-hover:flex justify-center flex-auto mt-[25%] transition-all delay-200 ease-in">
            <UserScoreChart
              score={Math.floor(movie.vote_average * 10)}
              strokeWidth={isMobile ? 6 : 10}
              sqSize={isMobile ? 80 : 144}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
