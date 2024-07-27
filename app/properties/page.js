import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { MdOutlinePriceChange } from "react-icons/md";
import { FaBuildingColumns } from "react-icons/fa6";
import { PiLineVerticalThin } from "react-icons/pi";
import Img14 from "@/public/image/img19.jpg";

export default function Properties() {
  return (
    <main>
      <section className="relative w-full h-[400px] m-auto">
        <Image src={Img14} className="absolute w-full h-[400px] inset-0 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center flex flex-col justify-center items-center h-full p-10 text-white">
          <h1 className="text-sm ">Our Properties</h1>
          <p className="text-3xl font-semibold py-3">All Our Properties</p>
          <span className="text-xs font-semibold ">
            Huge number of properties available here for buy and sell, also you can find here co-living property
          </span>
           <div className="flex flex-col  items-center gap-10 mx-10 text-center">
             <div className="bg-transparent-  p-6 rounded-lg shadow-white my-10 text-white hover:text-white hover:bg-green-800 hover:transform hover:scale-110 transition-transform duration-300">
                 <ul className="flex gap-5">
                    <li className="hover:text-red-500 hover:font-semibold">For Buy</li>
                     <li className="hover:text-red-500 hover:font-semibold">For Rent</li>
                     <li className="hover:text-red-500 hover:font-semibold">For Sale</li>
                     <li className="hover:text-red-500 hover:font-semibold">For Co-Living</li>
                  </ul>
             </div>
           </div>
        </div>
      </section>
      <div className="bg-white text-black w-full mt-4">
            <ul className="border-2 border-green-800 grid grid-cols-4 gap-10 py-5">
              <li className="flex flex-col items-center">
                <div className="flex items-center space-x-2">
                  <IoLocation />
                  <span>Location</span>
                </div>
                <span className="mt-2 flex items-center">Choose location... <PiLineVerticalThin className="ml-2" /></span>
              </li>
              
              <li className="flex flex-col items-center font-lg font-bold">
                <div className="flex items-center space-x-2">
                  <MdOutlinePriceChange />
                  <span>Price Range</span>
                </div>
                <span className="mt-2 flex items-center">Price Range <IoIosArrowDown className="ml-2" /> <PiLineVerticalThin className="ml-2" /></span>
              </li>

              <li className="flex flex-col items-center">
                <div className="flex items-center space-x-2">
                  <FaBuildingColumns />
                  <span>Property Size</span>
                </div>
                <span className="mt-2 flex items-center">Property Size <IoIosArrowDown className="ml-2" /> <PiLineVerticalThin className="ml-10" /></span>
              </li>

              <li className="flex flex-col items-center">
                <div className="flex items-center space-x-2">
                  <FaBuildingColumns />
                  <span>Property Type</span>
                </div>
                <span className="mt-2 flex items-center">Property Type <IoIosArrowDown className="ml-2" /></span>
              </li>
              
            </ul>
          </div>
        
      
        
    </main>
  );
}
