import React from "react";
import Skeleton from "../../../components/Skeleton/Skeleton";
import HeadingBox from "../../../components/HeadingBox";
import search from "../../../assets/images/global/icon-search.png";

const DevelopersDescription = () => {
  return (
    <section>
      <Skeleton>
        <div className="w-full">
          <div className="flex justify-between items-center w-full">
            <HeadingBox heading="Developers" />
            <div className="w-1/4 bg-white bg-opacity-10 rounded-md flex items-center custom-shadow">
              <input
                type="search"
                name="search developers"
                id="search-developers"
                placeholder="SEARCH"
                className="w-full px-5 py-1 rounded-md font-roboto font-extralight text-[#DBA318] placeholder:text-[#798A9C] placeholder:font-light placeholder:font-roboto placeholder:text-sm bg-transparent focus-visible:outline-0"
              />
              <button className="px-5">
                <img src={search} alt="search" className="w-7" />
              </button>
            </div>
          </div>
          <p className="font-montserrat text-white leading-7 my-8">
            Dubai has a dynamic real estate market with the major developers
            adding to the scintillating skyline of the city. Some of the major
            players in the market are Emaar, Meraas, Damac, Sobha, to name a
            few. The developers in Dubai have done a fantastic job of crafting
            the perfect and popular communities for residents. Offering a
            plethora of options ranging from beachfront, waterfront, golf course
            communities, and more, the developers in Dubai have the best for all
            kinds of people.
          </p>
        </div>
      </Skeleton>
    </section>
  );
};

export default DevelopersDescription;
