import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import axios from "axios";
import { useQuery } from "react-query";

const RegisterForm = (props) => {
  const { register, handleSubmit } = useForm();

  const getAllCountries = () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((response) => {
          resolve(response.data);
        })
        .catch(reject);
    });
  };

  const { isLoading, data, error, isError } = useQuery(
    "all-country",
    getAllCountries
  );

  if (isLoading) {
    return "Loading data, please wait";
  }

  if (isError) {
    return error.message;
  }

  // console.log(data);

  return (
    <div className="bg-gradient-to-r from-[#0A223A] via-[#214265] to-[#0A223A] p-5 border border-[#373F48] rounded-md xl:basis-1/3 text-center">
      <h1 className="font-montserrat text-lg leading-6">
        {props.propertyName} <br /> Register Your Interest
      </h1>
      <form
        action=""
        className="mt-8"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          type="text"
          {...register("name", { required: true })}
          id="name"
          placeholder="Enter Your Name"
          className="w-full border border-[#A8A8A8] px-5 py-3 rounded-md mb-3 placeholder:font-montserrat text-xs"
        />
        <input
          type="email"
          {...register("email", { required: true })}
          id="email"
          placeholder="Enter Your Email"
          className="w-full border border-[#A8A8A8] px-5 py-3 rounded-md mb-3 placeholder:font-montserrat text-xs"
        />
        <div className="flex items-center">
          <select
            name="country"
            id="country"
            className="w-12 aspect-square -mt-3 mr-3 border p-2 border-[#A8A8A8] rounded-md"
          >
            {/* {data.map((country) => (
              <option value="" ></option>
            ))} */}
          </select>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            className="w-full border border-[#A8A8A8] px-5 py-3 rounded-md mb-3 placeholder:font-montserrat text-xs"
          />
        </div>
        {/* <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your Name"
          className="w-full border border-[#A8A8A8] px-5 py-3 rounded-md mb-3 placeholder:font-montserrat text-xs"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
          className="w-full border border-[#A8A8A8] px-5 py-3 rounded-md mb-3 placeholder:font-montserrat text-xs"
        />
        <textarea
          placeholder="Description"
          name="description"
          id="description"
          cols="30"
          rows="3"
          className="w-full border border-[#A8A8A8] px-5 py-3 rounded-md mb-3 placeholder:font-montserrat text-xs"
        /> */}
        <Button btnText="Submit your Interest" type="submit" />
      </form>
    </div>
  );
};

export default RegisterForm;
