import React from "react";
import paymentCircle from "../../../assets/images/property details page/payment-circle.png";

const PaymentItem = (props) => {
  return (
    <div className="flex flex-col items-center">
      <img src={paymentCircle} alt="payment plan" />
      <h1 className="font-oswald text-xl md:text-2xl lg:text-3xl xl:text-4xl my-4 uppercase">
        {props.title}
      </h1>
      <p className="font-robotoCondensed text-[.6rem] md:text-sm lg:text-base xl:text-lg ">
        {props.description}
      </p>
    </div>
  );
};

export default PaymentItem;
