import React from 'react';
// import data
import { footer } from '../data';
// import components
import Copyright from '../components/Copyright';
import twitter from "../assets/img/footer/twitter.png";
import discord from "../assets/img/footer/discord.png";
import telegram from "../assets/img/footer/telegram.png";


const Footer = () => {
  // destructure footer data
  const { logo, links, newsletter } = footer;
  return (
    <footer className='pt-[142px] pb-[60px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-y-8'>
          {/* logo */}
          <div data-aos='fade-up'>
            <img className=' h-[120px]   object-cover' src={logo} alt='' />
          </div>
          {/* list 1 */}
          <div data-aos='fade-up' data-aos-delay='100'>
            <div className='text-2xl uppercase font-medium mb-6'>Links</div>
            <ul className='flex flex-col gap-y-3'>
              {links.map((item, index) => {
                // destructure item
                const { href, name } = item;
                return (
                  <li key={index}>
                    <a
                      className='font-medium hover:text-accent transition'
                      href={href}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* newsletter */}
          <div data-aos='fade-up' data-aos-delay='200'>
            <div className='text-2xl uppercase font-medium mb-6'>
              {newsletter.title}
            </div>
            <div className='flex flex-row justify-between pr-10 pb-6'>
              <a href='https://influence3.org'>
                <img src={twitter} alt="" className="h-[50px] object-cover rounded-lg" />
              </a>
              <a href='https://influence3.org'>
                <img src={discord} alt="" className="h-[50px] object-cover rounded-lg" />
              </a>
              <a href='https://influence3.org'>
                <img src={telegram} alt="" className="h-[50px] object-cover rounded-lg" />
              </a>
            </div>
            <div className='text-xl text-light mb-[18px]'>
              {newsletter.subtitle}
            </div>
          </div>
        </div>
        <hr
          className='mt-10 mb-5'
          data-aos='fade-up'
        />
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;