import React from "react";
import footerLogo from "../assets/images/global/footer-logo.png";

const Footer = () => {
  return (
    <section className="py-16">
      <div className="p-5 flex flex-col items-center relative">
        <img
          src={footerLogo}
          alt="my dubai logo"
          className="absolute -top-[75px]"
          style={{
            width: "150px",
            height: "150px",
          }}
        />
        <div className="flex justify-center p-5 bg-footer bg-repeat-x rounded-md w-full h-full relative before:absolute before:left-0 before:border before:w-[37%] before:rounded-l-md before:border-[#F1BF3F] before:top-0 after:top-0 before:border-r-0 before:h-full after:absolute after:right-0 after:border after:w-[37%] after:rounded-r-md after:border-[#F1BF3F] after:border-l-0 after:h-full">
          <div className="justify-center w-3/4 pt-16 pb-6">
            <div className="flex justify-between py-10">
              <div className="text-white">
                <h1 className="font-montserrat text-xl uppercase font-bold mb-7">
                  Why us
                </h1>
                <ul className="font-montserrat leading-7">
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Meet The Team</li>
                </ul>
              </div>
              <div className="text-white">
                <h1 className="font-montserrat text-xl uppercase font-bold mb-7">
                  off plan properties
                </h1>
                <ul className="font-montserrat leading-7">
                  <li>Emaar Properties</li>
                  <li>Dubai Properties</li>
                  <li>Damac Properties</li>
                  <li>Sobha Group</li>
                  <li>Nakheel</li>
                  <li>Meraas</li>
                </ul>
              </div>
              <div className="text-white">
                <h1 className="font-montserrat text-xl uppercase font-bold mb-7">
                  Featured Projects
                </h1>
                <ul className="font-montserrat leading-7">
                  <li>Burj Crown in Downtown Dubai</li>
                  <li>The Valley EDEN by Emaar</li>
                  <li>Featured Projects</li>
                  <li>Featured Projects</li>
                  <li>Featured Projects</li>
                  <li>Featured Projects</li>
                </ul>
              </div>
              <div className="text-white">
                <h1 className="font-montserrat text-xl uppercase font-bold mb-7">
                  Property Types
                </h1>
                <ul className="font-montserrat leading-7">
                  <li>Dubai Apartments for Sale</li>
                  <li>Dubai Villas for Sale</li>
                  <li>Property Types</li>
                  <li>Property Types</li>
                  <li>Property Types</li>
                  <li>Property Types</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex absolute bottom-[2.5%] ">
          <h1 className="font-montserrat uppercase text-[#D6BB75] text-[10px]">
            privacy policy
          </h1>
          <span className="font-montserrat uppercase text-[#D6BB75] text-[10px] mx-2">
            |
          </span>
          <h1 className="font-montserrat uppercase text-[#D6BB75] text-[10px]">
            terms & conditions
          </h1>
          <span className="font-montserrat uppercase text-[#D6BB75] text-[10px] mx-2">
            |
          </span>
          <h1 className="font-montserrat uppercase text-[#D6BB75] text-[10px]">
            cookie policy
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Footer;
