import React from "react";

const SinglePropertyHeader = (props) => {
  const header = props.header;

  return (
    <section
      className="h-[75vh] w-screen"
      style={{
        backgroundImage: `url(${header})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <img
        src={header}
        alt="Single Property Banner"
        className="h-full w-screen"
      /> */}
    </section>
  );
};

export default SinglePropertyHeader;
