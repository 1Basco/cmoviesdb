import { POSTER_SIZE } from "@/app/constants/api";
import { useTMDBApi } from "@/app/hooks/api";
import useIsMobile from "@/app/hooks/isMobile";
import { Genre } from "@/app/types";
import InfoCard from "@/resources/components/InfoCard";
import TagCard from "@/resources/components/TagCard";
import UserScoreChart from "@/resources/components/UserScoreChart";
import {
  formatLocaleDate,
  formatTimeToHM,
  getLanguageName,
  movieStatusMap,
  USDollar,
} from "@/utils/fomat";
import { useParams } from "react-router-dom";

export default function MovieDetailPage(): JSX.Element {
  const { id } = useParams();
  const isMobile = useIsMobile();
  const { getMovieQuery, getMovieTrailerQuery } = useTMDBApi();
  const { data: movieData } = getMovieQuery(Number(id));
  const { data: movieTrailerList } = getMovieTrailerQuery(Number(id));

  const movieTrailer = movieTrailerList?.results.find(
    (item) => item.type === "Trailer" && item.site === "YouTube"
  );

  console.log(movieTrailer);
  function renderTags(genreList: Genre[]) {
    return (
      <>
        {genreList.map((genre) => (
          <TagCard key={genre.id}>{genre.name}</TagCard>
        ))}
      </>
    );
  }
  return (
    <div>
      <section className="bg-[url(../src/resources/assets/images/hero.png)] h-full w-full bg-cover bg-center">
        <div className="flex bg-cover bg-mauvedarka-3 backdrop-brightness-[.1] w-full h-full">
          <section
            className="md:h-[562px] m-4bg-cover bg-center bg-no-repeat w-full"
            style={{
              backgroundImage: isMobile
                ? "none"
                : `url(${POSTER_SIZE.original + movieData?.backdrop_path})`,
            }}
          >
            <div
              className="flex"
              style={{
                height: "100%",
                background:
                  "linear-gradient(90deg, #121113 0%, rgba(18, 17, 19, 0.8) 50%, rgba(18, 17, 19, 0) 100%)",
              }}
            >
              <section className="p-4 flex flex-col md:flex-row gap-4 2xl:container 2xl:mx-auto">
                <div className="flex-grow flex-shrink-0 basis-auto p-2 md:max-h-xl md:max-w-md 2xl:max-h-2xl 2xl:max-w-2xl">
                  <img
                    className="h-full w-full object-cover"
                    src={`${POSTER_SIZE.md + movieData?.poster_path}`}
                    alt={`${movieData?.title} poster`}
                  />
                </div>
                <div className="flex-auto p-2 w-full md:w-1/3">
                  <h1 className="font-montserrat font-semibold text-base md:text-2xl leading-tight text-mauve-1">
                    {movieData?.title}
                  </h1>
                  <h3 className="font-montserrat text-base text-mauve-1 md:mt-2">
                    Título original: {movieData?.original_title}
                  </h3>
                  {movieData?.tagline && (
                    <p className="font-montserrat italic text-xs text-mauve-1 md:mt-2">
                      {movieData?.tagline}
                    </p>
                  )}
                  <div className="flex gap-2 mt-4 justify-between md:hidden">
                    <InfoCard className="font-montserrat font-bold text-xs w-full">
                      <h4 className="uppercase text-mauvedark-11 font-bold text-xs">
                        Popularidade
                      </h4>
                      <p className="text-mauvedark-12 font-semibold text-sm">
                        {movieData?.popularity}
                      </p>
                    </InfoCard>
                    <InfoCard className="font-montserrat w-full">
                      <h4 className="uppercase text-mauvedark-11 font-bold text-xs">
                        Votos
                      </h4>
                      <p className="text-mauvedark-12 font-semibold text-sm">
                        {movieData?.vote_count}
                      </p>
                    </InfoCard>
                    <div className="w-full">
                      <UserScoreChart
                        score={
                          movieData?.vote_average
                            ? Math.floor(movieData?.vote_average * 10)
                            : 0
                        }
                        strokeWidth={6}
                        sqSize={98}
                      />
                    </div>
                  </div>
                  <InfoCard className="font-montserrat">
                    <h4 className="uppercase text-mauvedark-12">Sinopse</h4>
                    <p className="text-mauvedark-11">{movieData?.overview}</p>
                  </InfoCard>
                  <InfoCard className="font-montserrat w-full md:w-fit">
                    <h4 className="text-mauvedark-11 font-bold text-sm mb-2">
                      Generos
                    </h4>
                    <div className="flex gap-2 text-xs uppercase">
                      {renderTags(movieData?.genres ?? [])}
                    </div>
                  </InfoCard>
                </div>
                <div className="flex-auto p-2 md:w-1/3">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <div className="hidden md:flex w-full justify-end md:gap-4 gap-2">
                      <InfoCard className="font-montserrat hidden md:flex font-bold text-xs w-fit md:w-1/3">
                        <h4 className="uppercase text-mauvedark-11 font-bold text-xs">
                          Popularidade
                        </h4>
                        <p className="text-mauvedark-12 font-semibold text-sm">
                          {movieData?.popularity}
                        </p>
                      </InfoCard>
                      <InfoCard className="font-montserrat hidden md:flex">
                        <h4 className="uppercase text-mauvedark-11 font-bold text-xs">
                          Votos
                        </h4>
                        <p className="text-mauvedark-12 font-semibold text-sm">
                          {movieData?.vote_count}
                        </p>
                      </InfoCard>
                      <div className="hidden md:flex">
                        <UserScoreChart
                          score={
                            movieData?.vote_average
                              ? Math.floor(movieData?.vote_average * 10)
                              : 0
                          }
                          strokeWidth={6}
                          sqSize={98}
                        />
                      </div>
                    </div>
                    <div className="flex md:gap-4 gap-2 justify-center w-full">
                      <InfoCard className="font-montserrat flex-auto">
                        <h4 className="uppercase text-mauvedark-11 font-bold text-xs">
                          Lançamento
                        </h4>
                        <p className="text-mauvedark-12 text-sm font-bold">
                          {formatLocaleDate(movieData?.release_date ?? "pt-BR")}
                        </p>
                      </InfoCard>
                      <InfoCard className="font-montserrat w-1/2">
                        <h4 className="uppercase text-mauvedark-11 font-bold text-xs">
                          Duração
                        </h4>
                        <p className="text-mauvedark-12 text-sm font-bold">
                          {formatTimeToHM(movieData?.runtime ?? 0)}
                        </p>
                      </InfoCard>
                    </div>
                    <div className="flex md:gap-4 gap-2 justify-between w-full">
                      <InfoCard className="font-montserrat flex-auto">
                        <h4 className="uppercase text-mauvedark-11 font-bold text-xs">
                          Situação
                        </h4>
                        <p className="text-mauvedark-12 text-sm font-bold">
                          {movieStatusMap[movieData?.status ?? ""] ??
                            "Desconhecido"}
                        </p>
                      </InfoCard>
                      <InfoCard className="font-montserrat w-1/2">
                        <h4 className="uppercase text-mauvedark-11 font-bold text-xs">
                          Idioma
                        </h4>
                        <p className="text-mauvedark-12 text-sm font-bold capitalize">
                          {getLanguageName.of(
                            movieData?.original_language ?? "en"
                          )}
                        </p>
                      </InfoCard>
                    </div>
                    <div className="flex md:gap-4 gap-2 justify-between w-full">
                      <InfoCard className="font-montserrat flex-auto">
                        <h4 className="uppercase text-mauvedark-11 font-bold text-xs">
                          Orçamento
                        </h4>
                        <p className="text-mauvedark-12 text-sm font-bold uppercase">
                          {USDollar.format(movieData?.budget ?? 0)}
                        </p>
                      </InfoCard>
                      <InfoCard className="font-montserrat flex-auto">
                        <h4 className="uppercase text-mauvedark-11 font-bold text-xs">
                          Receita
                        </h4>
                        <p className="text-mauvedark-12 text-sm font-bold uppercase">
                          {USDollar.format(movieData?.revenue ?? 0)}
                        </p>
                      </InfoCard>
                      <InfoCard className="font-montserrat flex-auto">
                        <h4 className="uppercase text-mauvedark-11 font-bold text-xs uppercase">
                          Lucro
                        </h4>
                        <p className="text-mauvedark-12 text-sm font-bold uppercase">
                          {USDollar.format(
                            (movieData?.revenue ?? 0) - (movieData?.budget ?? 0)
                          )}
                        </p>
                      </InfoCard>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>
      <section className="h-full w-full 2xl:container mx-auto p-4">
        {movieTrailer && (
          <>
            <h2 className="font-montserrat dark:text-mauvedark-12 text-mauve-12 font-bold text-2xl p-4">
              Trailer
            </h2>
            <iframe
              className="mx-auto w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] 2xl:h-[700px] p-4"
              src={`https://www.youtube.com/embed/${movieTrailer.key}`}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={movieTrailer.name}
            ></iframe>
          </>
        )}
      </section>
    </div>
  );
}
