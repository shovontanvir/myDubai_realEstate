import React from "react";
import Skeleton from "./Skeleton/Skeleton";
import logo from "../assets/images/global/logo.png";
import calender from "../assets/images/global/icon-calendar-outline.png";
import { useQuery } from "react-query";
import { getApiData } from "../Services/apiFunctions";
import { useStateValue } from "../states/StateProvider";

const Navbar = () => {
  const [{ lang }, dispatch] = useStateValue();

  const getAllProperty = () => {
    return getApiData(lang, "properties/1");
  };

  const { isLoading, data, isError, error } = useQuery(
    ["all-property"],
    getAllProperty
  );

  if (isLoading) {
    return "Loading data, please wait";
  }

  if (isError) {
    return error.message;
  }

  const switchLang = (language) => {
    dispatch({ type: "setLang", item: language });
    console.log("language:", language, "language state: ", lang);
  };

  const langList = data.data.langList;

  return (
    <section>
      <Skeleton className="justify-between items-center">
        <div className="flex items-center">
          <div className="flex flex-wrap mr-10 w-7 h-7 group cursor-pointer hover:scale-150 transition duration-500">
            <div className="w-1/2 h-1/2 p-[1px] group-hover:scale-125 group-hover:p-[2px] transition duration-500 group-hover:rotate-180">
              <div className="w-full h-full border-2 rounded-sm border-brand"></div>
            </div>
            <div className="w-1/2 h-1/2 p-[1px] group-hover:scale-125 group-hover:p-[2px] transition duration-500 group-hover:-rotate-180">
              <div className="w-full h-full border-2 rounded-sm border-brand"></div>
            </div>
            <div className="w-1/2 h-1/2 p-[1px] group-hover:scale-125 group-hover:p-[2px] transition duration-500 group-hover:-rotate-180">
              <div className="w-full h-full border-2 rounded-sm border-brand"></div>
            </div>
            <div className="w-1/2 h-1/2 p-[1px] group-hover:scale-125 group-hover:p-[2px] transition duration-500 group-hover:rotate-180">
              <div className="w-full h-full border-2 rounded-sm border-brand"></div>
            </div>
          </div>
          <div>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <img src={calender} alt="arrange a meeting" className="mr-4" />
            <h1 className="font-roboto text-lg uppercase">Arrange a Meeting</h1>
          </div>
          <div className="ml-10">
            <select
              name="language"
              id="language"
              onChange={(e) => switchLang(e.target.value)}
            >
              {langList.map((lang) => (
                <option value={lang.value} key={lang.value}>
                  {lang.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Skeleton>
      <div className="w-full flex justify-center items-center bg-[#F1F5F8] py-3">
        <div className="w-1/3 flex justify-between">
          <h1 className="font-roboto text-lg uppercase">All project</h1>
          <h1 className="font-roboto text-lg uppercase">Off plan</h1>
          <h1 className="font-roboto text-lg uppercase">ready</h1>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
