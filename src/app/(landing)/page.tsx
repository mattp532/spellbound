"use client";

import { useEffect, useState } from 'react';
import HomeNavbar from '../components/HomeNavbar';
import Image from "next/image";

export default function Home() {
  const images = [
    '/photos/temp2.jpg',
    '/photos/photo1.jpg',
    '/photos/temp4.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden grayscale">
      {/* Background Video */}
      <video 
        src="/photos/bg.mp4" 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute top-0 w-full h-80/100 object-cover z-0"
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4">
        <h1 className="text-5xl md:text-7xl text-white font-normal text-center">
          SPELLBOUND HAIR DESIGN
        </h1>
        <hr className="border-white w-2/3 my-4 md:my-8 mt-3" />
        <div className="w-full md:w-3/5 text-center px-4">
          <p className="font-mono text-white text-base md:text-xl">
            We are craftsmen, dedicated to our trade, to our industry and, most importantly, to our clients. Our clients' satisfaction is our pride and passion.
          </p>
        </div>
        <div className="mt-8 flex flex-col md:flex-row lg:flex-row xl:flex-row gap-6 items-center text-sm ">
          <div className="p-1 border border-white w-auto">
            <button className=" cursor-pointer py-3 px-10 font-mono bg-white text-black font-semibold hover:bg-gray-200 transition duration-300 shadow-md">
              647-272-9773
            </button>
          </div>
          <div className="p-1 border border-white">
            <button className="cursor-pointer font-mono px-3 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition duration-300 shadow-md">
              sb.hair@hotmail.com
            </button>
          </div>
        </div>
      </div>

      {/* Section 2 with Carousel */}
      <section className="relative w-full min-h-auto bg-black flex items-center justify-center px-4 pt-10">
        <div className="border-white w-full max-w-6xl mx-4">
          <div className="flex flex-col md:flex-row items-center py-10 text-black w-full bg-black">
            <div className="w-full md:w-1/2 px-4 md:px-10 flex justify-center overflow-hidden mb-8 md:mb-0">
              <div className="relative h-64 md:h-[400px] w-full md:w-[600px]">
                {images.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt="Salon Photo"
                    className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4 md:px-10 flex flex-col justify-center items-center">
              <div className="w-full max-w-md text-white">
                <h2 className="text-4xl md:text-5xl mb-2 font-mono">PUSHING OUR CRAFT FURTHER</h2>
                <hr className="border-white w-full my-3"/>
                <p className="text-base md:text-lg font-light font-mono">
                  We are devoted to expanding our craft so that each time you visit we are better than ever before.
                </p>
                <p className="font-mono mt-3 text-white">
                Carlos DIRECTOR SPELLBOUND HAIR DESIGN
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}