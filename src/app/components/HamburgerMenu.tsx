"use client"
import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import Image from "next/image";

interface HamburgerMenuProps {
  handleBurger: () => void;
  isOpen: boolean;
}

export default function HamburgerMenu({ handleBurger, isOpen }: HamburgerMenuProps) {
  return (
    <div className={`
      fixed inset-0 w-full h-full z-20 bg-black bg-opacity-90 
      flex flex-col items-center justify-center p-5
      transition-all duration-400 ease-in-out font-mono
      ${isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'}
    `}>
      {/* Close button */}
      <button 
  className={`
    absolute top-4 right-6 text-white z-30
    transition-all duration-300 ease-in-out
    ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0'}
  `}
  onClick={handleBurger}
>
  <MdClose className="h-12 w-12" />
</button>
      
      {/* Logo */}
      <div className="absolute top-5 left-5 w-40 h-10">
        <Image 
          src="/photos/logo.png" 
          alt="Logo" 
          width={160} 
          height={40}
          className="object-contain"
        />
      </div>
      
      {/* Menu content */}
      <div className={`
        flex flex-col items-center justify-center space-y-6 text-white text-2xl
        transition-all duration-300 ease-in-out
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}>
        <Link href="/" onClick={handleBurger} className="hover:scale-105 transition-transform duration-200">About</Link>
        <Link href="/gallery" onClick={handleBurger} className="hover:scale-105 transition-transform duration-200">Gallery</Link>
        <Link href="/price-list" onClick={handleBurger} className="hover:scale-105 transition-transform duration-200">Price List</Link>
        <Link href="/events" onClick={handleBurger} className="hover:scale-105 transition-transform duration-200">Events</Link>
        
        <div className="flex space-x-6 mt-8">
          <a href="https://www.instagram.com/spellboundhairdesign" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
            <FaInstagram className="w-8 h-8" />
          </a>          
          <a href="https://www.facebook.com/sphairdowntown" target="_blank" className="hover:scale-110 transition-transform duration-200">
            <FaSquareFacebook className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
}
