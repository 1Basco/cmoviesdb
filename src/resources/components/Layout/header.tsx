import { RouteConstants } from "@/app/constants/route";
import { useDarkMode } from "@/app/hooks/darkMode";
import Logo from "@/resources/assets/icons/logo-cubos";
import { Link } from "react-router-dom";
import SquareButton from "@/resources/components/Buttons/Square";
const Header = (): JSX.Element => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="flex items-center py-5 px-2 h-16 md:px-5 bg-mauve-1 dark:bg-mauvedark-1 text-white">
      <Link
        className="flex align-center justify-center font-semibold"
        to={RouteConstants.ROOT}
      >
        <div className="block w-full h-full">
          <Logo width="145" height="36" />
        </div>
        <div className="flex items-center ml-4">
          <span>
            <h1 className="font-bold text-xl dark:text-mauve-1 text-mauvedark-1">
              Movies
            </h1>
          </span>
        </div>
      </Link>
      <div className="ml-auto w-10 h-10">
        <SquareButton
          icon={
            isDarkMode ? "lets-icons:sun-duotone" : "lets-icons:moon-alt-fill"
          }
          onClick={toggleDarkMode}
        />
      </div>
    </div>
  );
};

export default Header;
