import React from "react";
// import data
import { features } from "../data";
import TradeBrands from "./TradeBrands";

const Feature1 = () => {
  // destructure features
  const { feature1 } = features;
  // destructure features1
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature1;

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[50px]">
          {/* text */}
          <div className="flex-1" data-aos="fade-right">
            <div className="pretitle">{pretitle}</div>
            <h2 className="title">{title}</h2>
            <p className="lead">{subtitle}</p>
            <button className="btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all">
              {btnLink} <img src={btnIcon} alt="" />
            </button>
          </div>
          {/* image */}
          <div className="flex-1" data-aos="fade-left">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
      <TradeBrands />
    </section>
  );
};

export default Feature1;
