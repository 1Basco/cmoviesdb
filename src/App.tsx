import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PublicRouter from "./routes/public";

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App font-sans min-h-screen dark:bg-mauvedark-1 bg-mauve-1">
      <QueryClientProvider client={queryClient}>
        <PublicRouter />
      </QueryClientProvider>
    </div>
  );
}

export default App;
