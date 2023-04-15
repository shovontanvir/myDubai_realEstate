import React from "react";
import DevelopersDescription from "./partials/DevelopersDescription";
import DeveloperList from "./partials/DeveloperList";
import { useQuery } from "react-query";
import { getApiData } from "../../Services/apiFunctions";
import { useStateValue } from "../../states/StateProvider";

const DeveloperListPage = () => {
  const [{ lang }] = useStateValue();

  const getDeveloperList = () => {
    return getApiData(lang, "developers");
  };

  const { isLoading, data, isError, error } = useQuery(
    ["developer-list", lang],
    getDeveloperList
  );

  if (isLoading) {
    return "Loading data, please wait";
  }

  if (isError) {
    return error.message;
  }

  const developers = data.data.developers.data;
  console.log(developers);

  return (
    <>
      <DevelopersDescription />
      <DeveloperList developers={developers} />
    </>
  );
};

export default DeveloperListPage;
