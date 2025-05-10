import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <nav className="bottom-0 left-0 w-full z-20 px-5 pb-10 bg-black pt-10 ">
      <div className="flex flex-col-reverse space-y-7 md:space-y-0 lg:space-y-0 xl:space-y-0 md:flex-row lg:flex-row xl:flex-row items-center justify-center text-white space-x-0 md:space-x-10 lg:space-x-10 xl:space-x-10">
        <Image
          src="/photos/logo.png"
          alt="Salon Banner"
          width={400}
          height={50}
        />
        <div className="space-y-3 text-md font-bold font-mono text-center">
          <p>First Markham Place</p>
          <p>3255 Hwy 7 Unit 138,</p>
          <p>Markham, ON L3R 3P9</p>
          <p>647-272-9773</p>
        </div>
        <div className="flex space-x-11 font-mono">
          <div className="w-1/2 flex space-x-3">
            <div className="w-30/100 font-bold space-y-3">
              <p> Mon </p>
              <p>Tue</p>
              <p>Wed</p>
              <p>Thu</p>
            </div>
            <div className="w-1/2 whitespace-nowrap space-y-3">
            <p>10:30AM-6PM</p>
              <p>CLOSED</p>
              <p>10AM-5PM</p>
              <p>CLOSED</p>

            </div>
          </div>
          <div className="w-1/2 flex whitespace-nowrap ">
            <div className="w-40/100 font-bold space-y-3">
              <p>Fri</p>

              <p>Sat</p>
              <p>Sun</p>
            </div>
            <div className="w-1/2 space-y-3">
              <p>10AM-5PM</p>
              <p>10AM-5PM</p>
              <p>10AM-5PM</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-5 h-full mb-7 ">
          <FaInstagram className="cursor-pointer w-8 h-8" />
          <FaSquareFacebook className="cursor-pointer w-8 h-8" />
        </div>
      </div>
    </nav>
  );
}
