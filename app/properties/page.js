
import Image from "next/image";

import { IoIosArrowDown } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { MdOutlinePriceChange } from "react-icons/md";
import { FaBuildingColumns } from "react-icons/fa6";
import { GiResize } from "react-icons/gi";
import { PiLineVerticalThin } from "react-icons/pi";
import Footer from '../_components/Footer';
import Img14 from "@/public/image/img19.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
import Img10 from '@/public/image/img18.jpg'
import Img3 from '@/public/image/img18.jpg'
import Img5 from '@/public/image/img18.jpg'
import Img07 from '@/public/image/img18.jpg'
import Img9 from '@/public/image/img18.jpg'
import Img8 from '@/public/image/img18.jpg'
import Imgg1 from '@/public/image/imgx1.png'
import Imgg2 from '@/public/image/imgx2.png'
import Imgg3 from '@/public/image/imgx3.png'
import Imgg4 from '@/public/image/imgx4.png'
import Imgg5 from '@/public/image/imgx6.png'


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
      <section className='m-auto mx-10 items-center justify-center '>

       <div className="bg-white text-black mx-10 mt-4 items-center justify-center">
            <ul className="border border-green-800 grid grid-cols-4 gap-10 p-12 rounded-md ">
              <li className="flex flex-col items-center ">
                <div className="flex items-center space-x-2">
                  <IoLocation className="text-3xl" />
                  <span className="text-2xl">Location</span>
                </div>
                <span className="mt-2 flex items-center">Choose location... <PiLineVerticalThin className="ml-10 text-lg" /></span>
              </li> 
              
              <li className="flex flex-col items-center ">
                <div className="flex items-center space-x-2">
                  <MdOutlinePriceChange className="text-3xl"/>
                  <span className="text-2xl">Price Range</span>
                </div>
                <span className="mt-2 flex items-center">Price Range <IoIosArrowDown className="ml-2" /> <PiLineVerticalThin className="ml-2" /></span>
              </li>

              <li className="flex flex-col items-center">
                <div className="flex items-center space-x-2">
                <GiResize className="text-3xl" />
                  <span className="text-2xl">Property Size</span>
                </div>
                <span className="mt-2 flex items-center">Property Size <IoIosArrowDown className="ml-2" /> <PiLineVerticalThin className="ml-10" /></span>
              </li>

              <li className="flex flex-col items-center">
                <div className="flex items-center space-x-2">
                  <FaBuildingColumns className="text-3xl"/>
                  <span className="text-2xl">Property Type</span>
                </div>
                <span className="mt-2 flex items-center">Property Type <IoIosArrowDown className="ml-2" /></span>
              </li>
              
            </ul>
          </div>
          
          <div className="flex flex-row justify-between py-10 mx-10 items-center">
            <h1 className="border bg-green-900 text-white p-2 rounded-md">Tag <span>X</span></h1>
            <ul className=" flex gap-5">
              <li>Showing 0 out of 0 properties</li>
              <li className="text-red-400">Reset All</li>
              <li>Sort by</li>
              <li><IoMdArrowDropdown  className="text-3xl"/>
              </li>
            </ul>
          </div>

          <section className=" grid grid-cols-3 md:grid-cols-3 gap-5  py-10 mx-10  text-center ">
          <div className="hover:scale-2 border-2 border-solid bg-white  relative  rounded-lg drop-shadow-2xl">
            <Image
              src={Img10}
              alt="properties"
              width={700}
              height={100}
              className="object-cover rounded-lg"
              />
            <div className=" text-center m-auto mb-10 ">
            <span className="bg-white border-2 border-b-slate text-green-800 hover:bg-green-800 hover:text-white text-center absolute top-2 right-2 py-1 px-2 rounded-full">For Co-Living</span>
            <h2 className="mx-10 text-center text-lg font-bold text-green-700 hover:text-red-500 py-5">Elite Garden Resedence.</h2>
            <p className="py-3 text-xs font-semiboldtext-center">253 Montril Street, New York</p>
            <p className="py-3 text-xs font-semibold">Added: March 8, 2022</p>
            <p className="text-lg text-green-900 font-bold text-center  my-3"> _________ Price:$255300 _________</p>
            <span className="text-xs font-semibold">1450Sq.fit-3 Bed-2 Bath-1 Garage</span>
            </div>
          </div>

          <div className="hover:scale-2 border-2 border-solid bg-white relative rounded-lg drop-shadow-2xl ">
            <Image
              src={Img3}
              alt="properties"
              width={700}
              height={100}
              className="object-cover rounded-lg" />
             <div className="text-center m-auto  mb-10">
            <span className="bg-white border-2 border-b-slate text-green-800 hover:bg-green-800 hover:text-white text-center absolute top-2 right-2 py-1 px-2 rounded-full">For Sale</span>
            <h2 className="mx-10 text-center  text-xl font-bold text-green-700 hover:text-red-500 py-5">Duplex de Villa.</h2>
            <p className="py-3 text-xs font-semibold ">253 Montril Street, New York</p>
            <p className="py-3 text-xs font-semibold">Added: March 8, 2022</p>
            <p className="text-lg text-green-900 font-bold text-center  my-3"> _________ Price:$255300 _________ </p>
            <span className="text-xs font-semibold">1250Sq.fit-5Bed-2 Bath-1 Garage</span>
             </div>
          </div>

          <div className="hover:scale-2 border-2 border-solid bg-white relative rounded-lg drop-shadow-2xl">
            <Image
              src={Img5}
              alt="properties"
              width={700}
              height={100}
              className="object-cover rounded-lg"
              />
            <div className="text-center m-auto mb-10">
            <span className="bg-white border-2 border-b-slate text-green-800 hover:bg-green-800 hover:text-white text-center absolute top-2 right-2 py-1 px-2 rounded-full">For Rent</span>
            <h2 className="mx-10 text-center  text-xl font-bold text-green-700 hover:text-red-500 py-5">Orchid Casel de Paradise.</h2>
            <p className="py-3 text-xs font-semibold">18B Central Street, Sun Francisco</p>
            <p className="py-3 text-xs font-semibold">Added:September 22, 2022</p>
            <p className="text-lg text-green-900 font-bold text-center  my-3"> _________ Price:$255300 _________</p>
            <span className=" text-xs font-semibold ">1450Sq.fit-4 Bed-3 Bath-2 Garage</span>
            </div>
          </div>
          <div className="hover:scale-2 border-2 border-solid bg-white rounded-lg relative drop-shadow-2xl ">
            <Image
              src={Img07}
              alt="properties"
              width={700}
              height={100}
              className="object-cover rounded-lg"
              />
            <div className="text-center m-auto">
            <span className="bg-white border-2 border-b-slate text-green-800 hover:bg-green-800 hover:text-white text-center absolute top-2 right-2 py-1 px-2 rounded-full">For Sale</span>
            <h2 className="mx-10 text-center text-xl font-bold text-green-700 hover:text-red-500 py-5">Ruposibangla de parlosia.</h2>
            <p className="py-3 text-xs font-semibold">18B Central Street, Sun Francisco</p>
            <p className="py-3 text-xs font-semibold">Added:September 22, 2022</p>
            <p className="text-lg text-green-900 font-bold text-center  my-3"> _________ Price:$255300 _________</p>
            <span className=" text-xs font-semibold ">1450Sq.fit-4 Bed-3 Bath-2 Garage</span>
            </div>
          </div>

          <div className="hover:scale-2 border-2 border-solid bg-white rounded-lg relative drop-shadow-2xl ">
            <Image
              src={Img8}
              alt="properties"
              width={700}
              height={100}
              className="object-cover rounded-lg"
              />
            <div className="text-center m-auto">
            <span className="bg-white border-2 border-b-slate text-green-800 hover:bg-green-800 hover:text-white text-center absolute top-2 right-2 py-1 px-2 rounded-full">For Buy</span>
            <h2 className="mx-10 text-center text-xl font-bold text-green-700 hover:text-red-500 py-5">Elite Garden Residence.</h2>
            <p className="py-3 text-xs font-semibold">18B Central Street, Sun Francisco</p>
            <p className="py-3 text-xs font-semibold">Added:September 22, 2022</p>
            <p className="text-lg text-green-900 font-bold text-center  my-3">  _________ Price:$255300 _________</p>
            <span className=" text-xs font-semibold">1450Sq.fit-4 Bed-3 Bath-2 Garage</span>
            </div>
          </div>

          <div className="hover:scale-2 border-2 border-solid bg-white rounded-lg relative drop-shadow-2xl ">
            <Image
              src={Img9}
              alt="properties"
              width={700}
              height={100}
              className="object-cover rounded-lg"
              />
            <div className="text-center m-auto mb-10">
            <span className="bg-white border-2 border-b-slate text-green-800 hover:bg-green-800 hover:text-white text-center absolute top-2 right-2 py-1 px-2 rounded-full">For Rent</span>
            <h2 className="mx-10 text-center text-xl font-bold text-green-700 hover:text-red-500 py-5">Duplex de Villa.</h2>
            <p className="py-3 text-xs font-semibold">18B Central Street, Sun Francisco</p>
            <p className="py-3 text-xs font-semibold">Added:September 22, 2022</p>
            <p className="text-lg text-green-900 font-bold text-center  my-3"> _________ Price:$255300 _________</p>
            <span className="text-xs font-semibold">1450 Sq.fit-4 Bed-3 Bath-2 Garage</span>
            </div>
          </div> 
        </section>

        
        
        <div className=" items-center  py-10 m-auto  mx-10 ">
        <div className='w-full '>
      <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195600.62651466404!2d-75.28283898774522!3d40.00264429516856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1722226974794!5m2!1sen!2sus' width='100%' height='300' style={{ border: 0 }} allowFullScreen loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
    </div>
        </div>
      
        <div  className=" items-center justify-center py-10 m-auto  mx-10 flex ">
          
            <ul className="flex flex-row gap-40 items-center ">

            <li>
              <Image
              src={Imgg2} width={150}height={100} /> </li>

            <li>
              <Image
              src={Imgg1} width={150}height={100} /> </li>

            <li>
              <Image
              src={Imgg4} width={150}height={100} /> </li>

            <li>
              <Image
              src={Imgg3} width={150}height={100} /> </li>

            <li>
              <Image
              src={Imgg5} width={150}height={100} /> </li>
            
            </ul>
    
        </div>
        
    </section>
    <div className='w-full'>
            <Footer/>
        </div>

    </main>
  );
}
