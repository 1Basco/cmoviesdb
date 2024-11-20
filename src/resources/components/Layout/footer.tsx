const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="flex border-t-[1px] border-mauvea-6 dark:border-mauvedarka-6 bg-mauve-1 dark:bg-mauvedark-1 justify-center content-between items-center bg-cover p-4 z-20 w-full text-white">
      <span>
        <p className="dark:text-mauvedark-11 font-montserrat text-mauve-11 text-base text-center">
          2024 © Todos os direitos reservados a{" "}
          <span className="font-semibold ">Cubos Movies</span>
        </p>
      </span>
    </footer>
  );
};

export default Footer;
