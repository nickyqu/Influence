import React from "react";
// import data
import twitter from "../assets/img/brands/social/twitter.png";
import facebook from "../assets/img/brands/social/facebook.png";
import linkedin from "../assets/img/brands/social/linkedin.png";
import lens from "../assets/img/brands/social/lens.jfif";
import snapchat from "../assets/img/brands/social/snapchat.png";
import tiktok from "../assets/img/brands/social/tiktok.png";
import youtube from "../assets/img/brands/social/youtube.png";
import onlyfans from "../assets/img/brands/social/onlyfans.png";

const brands= [
    {
      image: twitter,
      delay: 100,
    },
    {
      image: facebook,
      delay: 200,
    },
    {
      image: linkedin,
      delay: 300,
    },
    {
      image: lens,
      delay: 350,
    },
    {
      image: snapchat,
      delay: 400,
    },
    {
      image: tiktok,
      delay: 450,
    },
    {
      image: youtube,
      delay: 450,
    },
    {
      image: onlyfans,
      delay: 450,
    },
  ];

const SocialBrands = () => {
  // destructure overview
  return (
    <section className="mt-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* brands */}
        {brands.map((item, index) => {
          // destructure item
          const { image, delay } = item;
          return (
            <div key={index} data-aos="fade-up" data-aos-delay={delay}>
              {/* brand image */}
              <img src={image} alt="" className="h-[50px] object-cover rounded-lg"/>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SocialBrands;


