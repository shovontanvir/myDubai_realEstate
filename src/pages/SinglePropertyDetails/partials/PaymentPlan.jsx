import React from "react";
import SkeletonSingleProperty from "../../../components/Skeleton/SkeletonSingleProperty";
import HeadingText from "./HeadingText";
import PaymentItem from "./PaymentItem";

const PaymentPlan = (props) => {
  const paymentPlan = props.paymentPlan;

  return (
    <section className="mb-5">
      <SkeletonSingleProperty>
        <HeadingText innerText="Payment Plan" className="items-center" />
        <div className="w-full relative overflow-clip">
          <div className="w-full absolute top-9 left-1/2 -z-50">
            <div className="border border-dashed w-[70%] mx-auto relative -left-1/2 -z-50"></div>
          </div>
          <div className="flex justify-between w-full">
            {paymentPlan.map((item, index) => (
              <div className="basis-1/2 text-center" key={`payment-${index}`}>
                <PaymentItem
                  title={
                    item.percentage
                      ? item.percentage
                      : item.installment
                      ? item.installment
                      : item.date
                  }
                  description={item.milestone}
                />
              </div>
            ))}
          </div>
        </div>
      </SkeletonSingleProperty>
    </section>
  );
};

export default PaymentPlan;
