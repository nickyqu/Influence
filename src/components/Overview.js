import React from "react";
import nftImg from "../assets/img/overview/nft.png";
import mintImg from "../assets/img/overview/mint.png";
import scoreImg from "../assets/img/overview/score1.webp";
const Overview = () => {
  // destructure overview data
  return (
    <section id={"About"} className="lg:min-h-[812px] bg-overview bg-cover bg-left-top pt-[30px] lg:pt-[140px]">
      <div className="container mx-auto ">
        <p className="text-4xl text-white font-normal mb-20">
          How to prove your influence in a decentralized world?
        </p>
        <div className=" mt-14 grid grid-cols-3 grid-rows-3 gap-10">
          <p data-aos="fade-up" className="text-2xl text-white font-normal col-span-2">
            1. Get a soul-bound NFT from Influence3.org
          </p>
          <img
            className="h-[130px] w-[130px] object-cover rounded-lg"
            src={mintImg} data-aos="fade-up"
            alt=""
          />
          <p data-aos="fade-up" className="text-2xl text-white font-normal col-span-2 ">
            2. Update your SBT with your influence rating, calculated from multiple influence source such as twitter, gitcoin, opensea coinbase
            etc.
          </p>
          <img
            className="h-[130px] w-[130px] object-cover rounded-lg"
            src={nftImg} data-aos="fade-up"
            alt=""
          />
          <p data-aos="fade-up" className="text-2xl text-white font-normal col-span-2">
            3. Prove your influence everywhere without revealing your real
            identity!
          </p>
          <img
            className="h-[130px] w-[130px] object-cover rounded-lg"
            src={scoreImg} data-aos="fade-up"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Overview;
