import React from "react";
// import data
import OpenSeaImg from "../assets/img/overview/brands/OpenSea-Full-Logo.png";
import magicEdenImg from "../assets/img/overview/brands/magic_eden.png";
import coinbaseImg from "../assets/img/overview/brands/logo-coinbase.png";
import binanceImg from "../assets/img/overview/brands/Binance_logo.png";
const brands= [
    {
      image: OpenSeaImg,
      delay: 300,
    },
    {
      image: magicEdenImg,
      delay: 400,
    },
    {
      image: coinbaseImg,
      delay: 500,
    },
    {
      image: binanceImg,
      delay: 600,
    },
  ];

const TradeBrands = () => {
  // destructure overview
  return (
    <section className="py-0">
      <div className="container mx-auto flex-col items-center lg:flex-row items-center justify-between">
        {/* brands */}
        {brands.map((item, index) => {
          // destructure item
          const { image, delay } = item;
          return (
            <div key={index} data-aos="fade-up" data-aos-delay={delay}>
              {/* brand image */}
              <img src={image} alt="" className="w-[200px] object-cover"/>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TradeBrands;


