import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { getApiData } from "../../../Services/ApiFunctions";
import { useStateValue } from "../../../states/StateProvider";

const RegisterForm = (props) => {
  const [{ lang }] = useStateValue();
  const { register, handleSubmit } = useForm();

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

  const langList = data.data.langList;

  return (
    <div className="bg-gradient-to-r from-[#0A223A] via-[#214265] to-[#0A223A] p-5 border border-[#373F48] rounded-md xl:basis-1/3 text-center flex items-center">
      <div className="w-full">
        <h1 className="font-montserrat text-lg leading-6 text-white">
          {props.propertyName} <br /> Register Your Interest
        </h1>
        <form
          action=""
          className="mt-8"
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div className="flex items-center">
            <input
              type="text"
              {...register("name", { required: true })}
              id="name"
              placeholder="Enter Your Name"
              className="w-full px-5 py-3 rounded-md mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-white"
            />
          </div>
          <div className="flex items-center">
            <input
              type="email"
              {...register("email", { required: true })}
              id="email"
              placeholder="Enter Your Email"
              className="w-full px-5 py-3 rounded-md mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-white"
            />
          </div>
          <div className="flex items-center">
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              className="w-full px-5 py-3 rounded-md mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-white"
            />
          </div>
          <div className="flex items-center">
            <select
              name="language"
              id="language"
              onChange={(e) => switchLang(e.target.value)}
              className="w-full px-5 py-3 rounded-md mb-3 font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-white text-white"
            >
              <option className="rounded-2xl font-montserrat text-xs">
                Select a Language
              </option>
              {langList.map((lang) => (
                <option
                  value={lang.value}
                  key={lang.value}
                  className="rounded-2xl font-montserrat text-xs"
                >
                  {lang.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center">
            <textarea
              placeholder="Description"
              name="description"
              id="description"
              cols="30"
              rows="3"
              className="w-full px-5 py-3 rounded-md mb-3 placeholder:font-montserrat text-xs custom-shadow bg-white bg-opacity-10 placeholder:text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full text-white rounded-md py-2 font-montserrat uppercase bg-gradient-to-r from-[#A7893A] via-[#BFA04B] to-[#A7893A]"
          >
            Submit Your Interest
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
