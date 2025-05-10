"use client";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import { MdClose } from "react-icons/md";

export default function HomeNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleBurgerClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="top-0 left-0 w-full z-30 p-5 bg-transparent">
      <div className="hidden md:flex lg:flex xl:flex justify-between items-center text-white">
        <Image
          src="/photos/logo.png"
          alt="Salon Banner"
          width={210}
          height={50}
        />
        <div className="flex items-center justify-between space-x-6 text-xl font-mono">
          
          <div className="nav-item-group">
            <Link className="nav-link" href="/">
              About
            </Link>
            <hr className="nav-underline" />
          </div>

          <div className="nav-item-group">
            <Link className="nav-link" href="/gallery">
              Gallery
            </Link>
            <hr className="nav-underline" />
          </div>

          <div className="nav-item-group">
            <Link className="nav-link" href="/price-list">
              Price List
            </Link>
            <hr className="nav-underline" />
          </div>

          <div className="nav-item-group">
            <Link className="nav-link" href="/events">
              Events
            </Link>
            <hr className="nav-underline" />
          </div>

          <a
            href="https://www.instagram.com/spellboundhairdesign"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="cursor-pointer hover:opacity-65 duration-300 w-7 h-7" />
          </a>
          <a target="_blank" href="https://www.facebook.com/sphairdowntown">
            <FaSquareFacebook className="cursor-pointer hover:opacity-65 duration-300 w-7 h-7" />
          </a>
        </div>
      </div>
      <div className="absolute right-7 md:hidden lg:hidden xl:hidden">
        <CiMenuBurger onClick={handleBurgerClick} className="w-11 h-11" />
      </div>
      <HamburgerMenu isOpen={isOpen} handleBurger={handleBurgerClick} />
    </nav>
  );
}
