import { RouteConstants } from "@/app/constants/route";
import HomePage from "@/pages/public/Home";
import MovieDetailPage from "@/pages/public/MovieDetail";
import Footer from "@/resources/components/Layout/footer";
import Header from "@/resources/components/Layout/header";
import { MainLayout } from "@/resources/components/Layout/mainLayout";
import { Route, Routes } from "react-router-dom";

type PublicRouterProps = {};

const PublicRouter: React.FC<
  PublicRouterProps
> = ({}: PublicRouterProps): JSX.Element => {
  return (
    <>
      <Header />
      <MainLayout>
        <Routes>
          <Route path={RouteConstants.ROOT} element={<HomePage />} />
          <Route
            path={RouteConstants.MOVIE_DETAIL}
            element={<MovieDetailPage />}
          />
        </Routes>
      </MainLayout>
      <Footer />
    </>
  );
};

export default PublicRouter;
