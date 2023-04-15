import React from "react";
import Skeleton from "./Skeleton/Skeleton";
import logo from "../assets/images/global/logo.png";
import calender from "../assets/images/global/calendar-outline.svg";
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
  };

  const langList = data.data.langList;

  return (
    <section>
      <Skeleton className="justify-between items-center">
        <div className="flex items-center">
          <div className="flex flex-wrap mr-5 w-12 h-12 group cursor-pointer transition duration-500 relative group">
            <div className="absolute -right-1 -top-1 group-hover:top-7 group-hover:right-8 scale-110 w-1/2 h-1/2 p-1 transition-all ease-in-out duration-500 ">
              <div className="w-full h-full rounded-full bg-white bg-opacity-50"></div>
            </div>
            <div className="absolute -right-1 -bottom-2 group-hover:bottom-5 w-1/2 h-1/2 p-1 transition-all ease-in-out duration-500 ">
              <div className="w-1/2 h-1/6 rounded-2xl bg-white bg-opacity-50"></div>
            </div>
            <div className="w-1/2 h-1/2 scale-125 p-1 transition duration-500 ">
              <div className="w-full h-full border-2 rounded-full border-[#F1BF3F]"></div>
            </div>
            <div className="w-1/2 h-1/2 p-1 transition duration-500 relative">
              <div className="w-full h-full border-2 rounded rounded-bl-none border-[#F1BF3F]"></div>
            </div>
            <div className="w-1/2 h-1/2 p-1 transition duration-500 ">
              <div className="w-full h-full border-2 rounded rounded-tr-none border-[#F1BF3F]"></div>
            </div>
            <div className="w-1/2 h-1/2 p-1 transition duration-500 ">
              <div className="w-full h-full scale-125 border-2 rounded rounded-tl-none border-[#F1BF3F]"></div>
            </div>
          </div>
          <div>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="flex items-center">
          <button className="hex-btn-outline text-white relative p-2 mx-6">
            <h1 className="uppercase font-asul text-white text-lg flex items-center">
              <img src={calender} alt="calender" className="mr-3" />
              Arrange a Meeting
            </h1>
          </button>
          <h1 className="uppercase font-openSans text-white mx-4">Off Plan</h1>
          <h1 className="uppercase font-openSans text-white mx-4">Ready</h1>
          <h1 className="uppercase font-openSans text-white mx-4">
            All Projects
          </h1>
          <div>
            <select
              name="language"
              id="language"
              onChange={(e) => switchLang(e.target.value)}
              className="rounded-2xl px-2 uppercase bg-[#F1BF3F]"
            >
              <option value={lang} className="rounded-2xl bg-[#F1BF3F] hidden">
                {lang}
              </option>
              {langList.map((lang) => (
                <option
                  value={lang.value}
                  key={lang.value}
                  className="rounded-2xl bg-[#F1BF3F]"
                >
                  {lang.value}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Skeleton>
    </section>
  );
};

export default Navbar;
