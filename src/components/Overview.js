import React from "react";
// import data
import { overview } from "../data";

const Overview = () => {
  // destructure overview data
  const { productImg } = overview;
  return (
    <section className="lg:min-h-[712px] bg-overview bg-cover bg-left-top pt-[30px] lg:pt-[87px]">
      <div className="container mx-auto flex justify-end overflow-hidden">
        <img src={productImg} alt="" className="rounded-lg" />
      </div>
      <div className="container mx-auto ">
        <p
          className="text-3xl text-white font-normal mb-5 lg:mt-10 "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Aggregate and evaluate All of your Influence with powerful, transparent and evolving engines
        </p></div>

    </section>
  );
};

export default Overview;
