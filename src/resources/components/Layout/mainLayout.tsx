export interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
}
export function MainLayout({ children }: MainLayoutProps): JSX.Element {
  return (
    <>
      <main className="w-full h-fit">
        <div className="m-auto flex flex-col justify-center items-center">
          {children}
        </div>
      </main>
    </>
  );
}
