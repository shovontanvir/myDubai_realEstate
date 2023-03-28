import { useQuery } from "react-query";
import SinglePropertyDetails from "../src/pages/SinglePropertyDetails/SinglePropertyDetails";
import Navbar from "./components/Navbar";
import ViewProperty from "./pages/ViewProperty/ViewProperty";
import { getApiData } from "./Services/apiFunctions";
import { useStateValue } from "./states/StateProvider";

function App() {
  const [{ lang }] = useStateValue();
  const getAllProperties = () => {
    return getApiData(lang, "properties");
  };
  const { isLoading, data, isError, error } = useQuery(
    ["property-list", lang],
    getAllProperties
  );

  if (isLoading) {
    return "Loading...Please wait... ";
  }

  if (isError) {
    return error.message;
  }

  const allProperties = data.data.properties.data;

  return (
    <section className="bg-gradient-to-r from-[#000F1D] via-[#00182E] to-[#000F1D]">
      <Navbar />
      {/* <SinglePropertyDetails url="properties/1" /> */}
      <ViewProperty properties={allProperties} />
    </section>
  );
}

export default App;
