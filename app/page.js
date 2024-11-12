"use client";
import React, { useState, useEffect } from 'react';
import useDarkMode from './useDarkMode';

export default function Home() {

  const isDarkMode = useDarkMode()
  const [opacity, setOpacity] = useState(0.5);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setOpacity(1);
    } else {
      setOpacity(0.5);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="w-full h-[100vh]">
      <header className={`fixed flex flex-col top-0 left-0 w-full 2xl:h-[10rem] xl:h-[7rem] bg-black  z-20`} style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}>
        <div className="w-full h-[50%] flex flex-row xl:gap-6 2xl:gap-3">
          <a target='_blank' href='facebook.com' className='xl:ml-[3rem] 2xl:ml-[4rem] my-auto'>
            <img alt="facebook" src="/social-media-icons/facebook.svg" className="xl:h-[2rem] 2xl:h-[3rem]" />
          </a>
          <a target='_blank' href='instagram.com' className=' my-auto'>
            <img alt="instagram" src="/social-media-icons/instagram.svg" className="xl:h-[1.8rem] 2xl:h-[2.6rem]" />
          </a>
          <a target='_blank' href='youtube.com' className=' my-auto'>
            <img alt="youtube" src="/social-media-icons/youtube.svg" className="xl:h-[2rem] 2xl:h-[3rem]" />
          </a>
        </div>
        <div className="absolute top-[48%] bg-[#868383] w-full h-[2px]" />
        <div className="w-full h-[50%] flex flex-row">
          <img src="/logo.svg" className="h-[90%] my-auto ml-[4rem]" />
          <div className="relative 2xl:ml-[32rem] xl:ml-[20rem] flex font-medium text-whiteText 2xl:text-[20px] xl:text-[16px] cursor-pointer my-auto cursor-default group">
            About Us
            <span className="absolute left-0 bottom-[-0.5rem] rounded-full w-full h-[7px] hd:h-[5px] 2k:h-[9px] bg-gradient-to-r from-[#297641] to-[#CB2124] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
          </div>
          <div className="relative ml-[4rem] flex font-medium text-whiteText 2xl:text-[20px] xl:text-[16px] cursor-pointer my-auto cursor-default group">
            Our Values
            <span className="absolute left-0 bottom-[-0.5rem] rounded-full w-full h-[7px] hd:h-[5px] 2k:h-[9px] bg-gradient-to-r from-[#297641] to-[#CB2124] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
          </div>
          <div className="relative ml-[4rem] flex font-medium text-whiteText 2xl:text-[20px] xl:text-[16px] cursor-pointer my-auto cursor-default group">
            How we started
            <span className="absolute left-0 bottom-[-0.5rem] rounded-full w-full h-[7px] hd:h-[5px] 2k:h-[9px] bg-gradient-to-r from-[#297641] to-[#CB2124] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
          </div>
          <div className="relative ml-[4rem] flex font-medium text-whiteText 2xl:text-[20px] xl:text-[16px] cursor-pointer my-auto cursor-default group">
            Team
            <span className="absolute left-0 bottom-[-0.5rem] rounded-full w-full h-[7px] hd:h-[5px] 2k:h-[9px] bg-gradient-to-r from-[#297641] to-[#CB2124] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
          </div>
          <div className="relative ml-[4rem] flex font-medium text-whiteText 2xl:text-[20px] xl:text-[16px] cursor-pointer my-auto cursor-default group">
            Agri-Food
            <span className="absolute left-0 bottom-[-0.5rem] rounded-full w-full h-[7px] hd:h-[5px] 2k:h-[9px] bg-gradient-to-r from-[#297641] to-[#CB2124] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
          </div>
          <div className="relative ml-[4rem] flex font-medium text-whiteText 2xl:text-[20px] xl:text-[16px] cursor-pointer my-auto cursor-default group">
            French
          </div>
        </div>
      </header>
      <section id="curved_hero_1" className="relative flex xl:h-[36rem] 2xl:h-[50rem] w-full flex-col justify-center overflow-hidden">
        <img
          src="/background.png"
          alt="AHIMA Group"
          className="absolute left-0 top-0 h-full w-full object-cover"
          loading="lazy"
        />

        <div className="relative z-0 flex h-full w-full items-center justify-center bg-black bg-opacity-70 px-10 md:px-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold xl:text-4xl 2xl::text-5xl text-white">
              We are creating the largest integrated platform to empower farmers with seamless access to resources, markets, and opportunities.
            </h1>
          </div>
        </div>

        <svg
          width="100%"
          height="100"
          viewBox="0 0 1280 47"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 z-10 -mb-0.5 h-16"
        >
          <path
            d="M1280 36.1212C1123.37 13.9672 894.482 7.6923e-05 639.532 5.46345e-05C385.092 3.23907e-05 156.613 13.9113 0.00195409 35.9884L0.00195312 46.9999L1280 47L1280 36.1212Z"
            fill="var(--background)"
          ></path>
        </svg>
      </section>
      <div className="mt-[6rem] w-full flex flex-col">
        <div className="flex flex-row w-[50%] mx-auto">
          <img alt='agrismart logo' src="/agrismart.png" className='xl:h-[16rem] 2xl:h-[26rem] xl:w-[16rem] 2xl:w-[26rem]' />
          <div className="flex flex-col my-auto ml-[4rem]">
            <h2 className="text-blackText font-poppins font-bold border-b border-blackText 2xl:text-[40px] xl:text-[32px]">
              About Us
            </h2>
            <p className="font-poppins xl:text-[14px] 2xl:text-[18px] text-justify mt-[1rem]">AgriSmart empowers farmers with digital tools, connecting them to experts, resources, services, and markets. We promote sustainable practices, offer crop management and financial tools, and support informed decision-making for long-term success. Our mission: drive innovation and sustainability in agriculture for Morocco and beyond.</p>
          </div>
        </div>
        <div className="relative w-[90%] xl:h-[20rem] 2xl:h-[30rem] mt-[6rem] mx-auto">
          <img alt='field image' src="/field.png" className="absolute z-[-1] xl:h-[20rem] 2xl:h-[30rem] w-full rounded-[54px]" />
          <div className={`${isDarkMode ? "bg-black/70" : "bg-white/70"} rounded-[50px] w-full h-full flex flex-col`}>
            <h2 className="font-poppins font-bold opacity-100 xl:text-[38px] 2xl:text-[48px] text-center text-grayColor xl:mt-[4rem] 2xl:mt-[10rem] mx-auto w-[29rem]">Agri Food The Future of Agrigultor</h2>
            <button className="p-4 bg-primaryColor opacity-100 w-[10rem] rounded-[15px] text-white fontpoppins mx-auto font-medium mt-[2rem] xl:mb-[3.5rem] 2xl:mb-[3.9rem] ">Try it now</button>
          </div>
        </div>
        <div className='w-[86%] mt-[6rem] mx-auto'>
          <h1 className="text-blackText font-poppins font-bold xl:text-[32px] 2xl:text-[40px]">Our Core Values</h1>
          <div className='flex flex-row'>
            <p className="font-poppins border-t border-blackText xl:text-[28px] 2xl:text-[36px] w-[40%] text-justify mt-[1rem]">Trust is the foundation of our work; we believe in honesty, transparency, and supporting each other. Our clients and team know they can rely on us to deliver with integrity.</p>
            <img alt='value 1' className='w-[36%] ml-auto' src='/values/value1.png' />
          </div>
          <div className='flex flex-row xl:mt-[6rem] 2xl:mt-[10rem]'>
            <p className="font-poppins border-t border-blackText xl:text-[28px] 2xl:text-[36px] w-[40%] text-justify mt-[1rem]">Connection brings us closer together and strengthens our work. We prioritize real relationships, fostering a collaborative and inclusive environment where everyone feels valued.</p>
            <img alt='value 2' className='w-[36%] ml-auto' src='/values/value2.png' />
          </div>
          <div className='flex flex-row xl:mt-[6rem] 2xl:mt-[10rem]'>
            <p className="font-poppins border-t border-blackText xl:text-[28px] 2xl:text-[36px] w-[40%] text-justify mt-[1rem]">Ambition drives us to aim higher, learn, and grow continuously. We are passionate about exceeding expectations, empowering clients, and creating positive change.</p>
            <img alt='value 3' className='w-[36%] ml-auto' src='/values/value3.png' />
          </div>
        </div>
        <div className="flex flex-col w-[64%] mx-auto mt-[10rem]">
          <h2 className="text-blackText font-poppins mx-auto border-b border-blackText font-bold 2xl:text-[40px] xl:text-[32px]">
            How We Started

          </h2>
          <p className="font-poppins font-medium xl:text-[20px] 2xl:text-[28px] text-justify mt-[2rem]">Agrismart’s journey began in 2014, when Ilias Azou, inspired by a conversation with his farmer uncle, asked, “Why isn’t there an app connecting farmers with experts and resources?” Though the idea stayed on hold as he worked in the Netherlands, it resurfaced in 2024 after a reminder from his uncle reignited his passion. Eager to bring the concept to life, Ilias joined forces with his cousin Massine Azou. Together, they formed a team including IT student Abdelilah Ayache, data analyst Amine Ghazi, and marketing talent Haitham Alazzouzi. United by their vision, they built Agrismart—a platform designed to connect farmers with essential knowledge and services, transforming agriculture.</p>
        </div>
        <div className="flex flex-col w-[70%] mx-auto mt-[10rem]">
          <h2 className="text-blackText font-poppins mx-auto border-b border-blackText font-bold 2xl:text-[40px] xl:text-[32px]">
            Team

          </h2>
          <div className='flex flex-row ml-auto mr-auto xl:mt-[4rem] 2xl:mt-[6rem] xl:gap-[8rem] 2xl:gap-[12rem]'>
            <div className='flex flex-col  '>
              <img alt='ilias' src='/team/ilias.png' className='xl:h-[14rem] 2xl:h-[18rem] xl:w-[14rem] 2xl:w-[18rem]' />
              <h1 className='font-poppins font-bold text-blackText xl:text-[20px] 2xl:text-[26px] mx-auto mt-[1rem]'>Ilias AZOU</h1>
              <h2 className='font-poppins font-medium xl:text-[20px] 2xl:text-[26px] text-grayText mx-auto'>Founder (CEO)</h2>
            </div>
            <div className='flex flex-col '>
              <img alt='massine' src='/team/massine.png' className='xl:h-[14rem] 2xl:h-[18rem] xl:w-[14rem] 2xl:w-[18rem]' />
              <h1 className='font-poppins font-bold text-blackText xl:text-[20px] 2xl:text-[26px] mx-auto mt-[1rem]'>Massine AZOU</h1>
              <h2 className='font-poppins font-medium xl:text-[20px] 2xl:text-[26px] text-grayText mx-auto'>Project Manager</h2>
            </div>
          </div>
          <div className='flex flex-row ml-auto mr-auto xl:gap-[8rem] 2xl:gap-[14rem]'>
            <div className='flex flex-col mt-[6rem] '>
              <img alt='abdelilah' src='/team/abdelilah.png' className='xl:h-[14rem] 2xl:h-[18rem] xl:w-[14rem] 2xl:w-[18rem]' />
              <h1 className='font-poppins font-bold text-blackText xl:text-[20px] 2xl:text-[26px] mx-auto mt-[1rem]'>Abdelilah AYACHE</h1>
              <h2 className='font-poppins font-medium xl:text-[20px] 2xl:text-[26px] text-grayText mx-auto'>Chief Technical Officer</h2>
            </div>
            <div className='flex flex-col mt-[6rem] '>
              <img alt='haitham' src='/team/haitham.png' className='xl:h-[14rem] 2xl:h-[18rem] xl:w-[14rem] 2xl:w-[18rem]' />
              <h1 className='font-poppins font-bold text-blackText xl:text-[20px] 2xl:text-[26px] mx-auto mt-[1rem]'>Haitham ALAZZOUZI</h1>
              <h2 className='font-poppins font-medium xl:text-[20px] 2xl:text-[26px] text-grayText mx-auto'>Chief Marketing Officer</h2>
            </div>
            <div className='flex flex-col mt-[6rem] '>
              <img alt='amine' src='/team/amine.png' className='xl:h-[14rem] 2xl:h-[18rem] xl:w-[14rem] 2xl:w-[18rem]' />
              <h1 className='font-poppins font-bold text-blackText xl:text-[20px] 2xl:text-[26px] mx-auto mt-[1rem]'>Amine GHAZI</h1>
              <h2 className='font-poppins font-medium xl:text-[20px] 2xl:text-[26px] text-grayText mx-auto'>Chief Data Officer</h2>
            </div>
          </div>
        </div>
        <div className="relative w-[90%] xl:h-[41.5rem] 2xl:h-[59rem] mt-[6rem] mx-auto">
          <img alt='agrifood tech' src="/agrifood.png" className="absolute z-[-1] xl:h-[41.5rem] 2xl:h-[59rem] w-full rounded-[54px]" />
          <div className={`${isDarkMode ? "bg-black/70" : "bg-white/70"} rounded-[50px] w-full h-full flex flex-col`}>
            <div className='xl:w-[50rem] 2xl:w-[60rem] 2xl:h-[16rem] bg-seconadryColor xl:mt-[10rem] 2xl:mt-[20rem] ml-auto mr-[4rem] p-14 rounded-[50px] font-poppins font-medium text-justify xl:text-[18px] 2xl:text-[24px] text-whiteText'>
              This partnership reflects our commitment to innovation in the agricultural sector and strengthens our mission to empower farmers through technology and data-driven solutions. Together, we aim to revolutionize the agricultural landscape and create a sustainable future for all.
            </div>
            <div className='xl:w-[50rem] 2xl:w-[64rem] 2xl:h-[16rem] bg-primaryColor mt-[1rem] ml-[5rem] p-16 rounded-[50px] font-poppins font-medium text-justify xl:text-[18px] 2xl:text-[24px] text-whiteText'>
              We are proud to announce that Agrismart is now part of the prestigious Agri-Food Tech program, powered by Mohammed VI Polytechnic University in collaboration with the IAV school.
            </div>
          </div>
        </div>
        <div className='relative mt-[6rem]'>
          <svg width="1024" height="80" viewBox="0 0 1024 80" fill="none" preserveAspectRatio="none" className="absolute top-0 w-full">
            <path fillRule="evenodd" clipRule="evenodd" d="M1022.92 0.65625C692.036 75.3814 344.215 84.2818 0 8.19348V62V80.66H1024V62V0.65625H1022.92Z" fill="#323E48"></path>
          </svg>
          <div className='w-full xl:h-[30rem] 2xl:h-[40rem] mt-[5rem] bg-[#323E48]'>
            <div className='flex flex-row'>
              <img alt='logo agrismart' src='/logo-footer.svg' className='2xl:h-[20rem] xl:h-[16rem] ml-[6rem]' />
              <div className='flex flex-col text-whiteText font-poppins font-medium xl:text-[20px] 2xl:text-[28px] ml-auto mr-[10rem] mt-[10rem]'>
                <p>Email  : <a className='hover:text-primaryColor' target='_blank' href='mailto:agrismart@gmail.com'>agrismart@gmail.com</a></p>
                <p className='mt-[1rem]'>Phone : <a className='hover:text-primaryColor' href='tel:+212678996433'>+212 678996433</a></p>
              </div>
            </div>
            <div className={`bg-transparent bottom-10 w-[90%]  py-[20px] border-t-[4px] border-b-[4px] border-whiteText mx-auto mt-[6rem] flex flex-row`}>
              <p className={`font-poppins font-semibold text-whiteText xl:text-[28px] 2xl:text-[36px] xl:ml-[18rem] 2xl:ml-[26rem] mt-auto mb-auto`}>Follow Us In :</p>
              <a target='_blank' href='facebook.com' className='xl:ml-[12rem] 2xl:ml-[20rem] my-auto'>
                <img alt='facebook' src="/social-media-icons/facebook.svg" className=" h-[90%]" />
              </a>
              <a target='_blank' href='instagram.com' className='ml-[4rem] my-auto'>
                <img alt='instagram' src="/social-media-icons/instagram.svg" className="h-[80%]" />
              </a>
              <a target='_blank' href='youtube.com' className='ml-[4rem] my-auto'>
                <img alt='youtube' src="/social-media-icons/youtube.svg" className="h-[90%]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
