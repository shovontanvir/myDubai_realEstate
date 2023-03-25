import SinglePropertyDetails from "../src/pages/SinglePropertyDetails/SinglePropertyDetails";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Navbar from "./components/Navbar";
import GridView from "./pages/GridView/GridView";
import { StateProvider } from "./states/StateProvider";
import reducer, { initialState } from "./states/reducer";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Navbar />
        <SinglePropertyDetails url="properties/1" />
        {/* <GridView /> */}
      </StateProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
