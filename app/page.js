 
import Image from "next/image";
import styles from "./_components/Pages.module.css";
import Img2 from "@/public/image/Img13.jpg";
import Img3 from "@/public/image/img12.jpeg";
import Img4 from "@/public/image/img04.jpeg";
import Img5 from "@/public/image/img07.webp";
import Img6 from "@/public/image/House.jpg";
import Img07 from "@/public/image/img15.jpeg";
import Img8 from "@/public/image/img09.jpeg";
import Img9 from "@/public/image/image10.jpg";
import Img10 from "@/public/image/Img16.jpg";
import Img11 from "@/public/image/img16.jpg";
import Img12 from "@/public/image/img17.jpg";
import Img13 from "@/public/image/img18.jpg";
import Img14 from "@/public/image/img19.jpg";
import Img15 from "@/public/image/img20.jpg";
import Img16 from "@/public/image/img21.jpg";
import Img17 from "@/public/image/img22.jpg";
import Link from "next/link";
import { GrMoney } from "react-icons/gr";
import { ImLocation, } from "react-icons/im";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoIosArrowRoundForward } from "react-icons/io";
import Testimony from '@/app/_components/Testimony'

export default function Home() {
  return (
    <main className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.subheading}>A new way to find Properties</span>
          <h1>Find your Most Suitable Property</h1>
          <p>
            Huge number of properties available here for buy and sell, also you
            can find here co-living property. So you have lots of opportunity.
          </p>
          <button>
            <Link href="/contact">Contact</Link>
          </button>
          <div className={styles.span}>
            <span>
              Have a question? <Link href="tel:+0123456789">+0123 456 789 </Link>
            </span>
          </div>
        </div>
        <div className={styles.images}>
          <Image src={Img2} alt="Property" className="image" />
        </div>
      </div>
      <section className="w-[100%] my-10 gap-10 m-auto "  >
        <div className="py-10 bg-white">
          
            <h2 className=" text-lg text-red-400 text-center " > Best Choice</h2>
            <p className="flex space-x-4  text-2xl font-bold justify-between mx-10  text-green-800 text-">
              Popular Properties.
              <span className="space-x-100 text-black text-sm font-normal  flex md:ml-4   flex-row justify-between items-center">
                Explore all <IoIosArrowRoundForward className="align-center bottom-5 text-lg" /> </span>
            </p>
        </div>

        <div className="grid grid-cols-3 space-x-10 mb-10 ">
          <div className=" text-center  hover:scale-2 border-2 border-solid bg-white relative  hover:transform hover:scale-110 transition-transform duration-300 rounded-2xl drop-shadow-2xl">
            <Image
              src={Img4}
              alt="properties"
              width={500}
              height={100}
              className="object-cover rounded-2xl"
            />
            <div className=" text-center mb-10 ">
            <span className="bg-white border-2 border-b-slate text-green-800 hover:bg-green-800 hover:text-white text-center absolute top-2 right-2 py-1 px-2 rounded-full">For Co-Living</span>
            <h2 className="mx-10 text-center  text-xl font-bold text-green-700 hover:text-red-500 py-5">Sinomen plant Palace.</h2>
            <p className="py-3 text-xs font-semibold">253 Montril Street, New York</p>
            <p className="py-3 text-xs font-semibold">Added: March 8, 2022</p>
            <p className="text-lg text-green-900 font-bold text-center py-5">_________ Price:$255300 _________</p>
            <span className="text-xs font-semibold">1450Sq.fit-3 Bed-2 Bath-1 Garage</span>
            </div >
          </div>

          <div className=" text-center  hover:scale-2 border-2 border-solid bg-white relative  hover:transform hover:scale-110 transition-transform duration-300 rounded-2xl drop-shadow-2xl">
            <Image
              src={Img3}
              alt="properties"
              width={500}
              height={100}
              className="object-cover rounded-2xl"/>

             <div className="text-center m-auto">
                 <span className="bg-white border-2 border-b-slate text-green-800 hover:bg-green-800 hover:text-white text-center absolute top-2 right-2 py-1 px-2 rounded-full">For Sale</span>
                  <h2 className="mx-10 text-center text-xl font-bold text-green-700 hover:text-red-500 py-5">Duplex de Villa.</h2>
                 <p className="py-3 text-xs font-semibold">253 Montril Street, New York</p>
                 <p className=" py-3 text-xs font-semibold">Added: March 8, 2022</p>
                 <p className="text-lg text-green-900 font-bold text-center py-5">_________ Price:$255300_________</p>
                  <span className="text-xs font-semibold">1250Sq.fit-5Bed-2 Bath-1 Garage</span>
             </div>
          </div>

          <div className=" text-center hover:scale-2 border-2 border-solid bg-white   relative hover:scale-110 transition-transform duration-300 rounded-2xl drop-shadow-2xl">
            <Image
              src={Img5}
              alt="properties"
              width={500}
              height={100}
              className="object-cover rounded-2xl"/>
             <div className="text-center m-auto ">
                 <span className="bg-white border-2 border-b-slate text-green-800 hover:bg-green-800 hover:text-white text-center absolute top-2 right-2 py-1 px-2 rounded-full">For Rent</span>
                 <h2 className="mx-10 text-center text-xl font-bold text-green-700 hover:text-red-500 py-5">Orchid Casel de Paradise.</h2>
                 <p className="py-3 text-black text-xs font-semibold">18B Central Street, Sun Francisco</p>
                 <p className=" py-3 text-xs font-semibold">Added:September 22, 2022</p>
                 <p className="text-lg text-green-900 font-bold py-3"> _________ Price:$255300 _________</p>
                 <span className="text-xs font-semibold">1450Sq.fit-4 Bed-3 Bath-2 Garage</span>
             </div>
          </div>
        </div>
      </section>

      <section className="relative mx-10">
            <Image src={Img6} alt="House Image" className="w-full h-[50%] rounded-2xl"  />
           <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-opacity-75 p-6 rounded-lg shadow-lg">
            
            <div className="bg-white p-6 rounded-lg shadow-lg my-10  text-black hover:text-white  hover:bg-green-800 hover:transform hover:scale-110 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 text-center text-red-500 ">Why Choose Us</h3>
              <p className="mb-4  text-center">
                We Provide Right Choice of Properties that You need. Huge number of
                properties available here for buy, sell and Rent. Also you find here
                co-living property so lots opportunity you have to choose here and enjoy
                huge discount.
              </p>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            
            <div className="bg-white p-6 rounded-lg shadow-lg text-black hover:text-white hover:bg-green-800 hover:transform hover:scale-110 transition-transform duration-300">
               <GrMoney className=" m-auto  font-xl font-extrabold  text-5xl text-red-500  " />
              <h3 className="text-2xl font-bold mb-4 text-center py-4">Budget Friendly</h3>
              <p className="mb-4 "> 
                Properties are most budget friendly so you have opportunity to find the
                best one
              </p>
            </div>

          
            <div className="bg-white p-6 rounded-lg shadow-lg hover:text-white hover:bg-green-800 hover:transform hover:scale-110 transition-transform duration-300">
              <ImLocation className=" m-auto  font-xl font-extrabold  text-5xl text-red-500  " />
              <h3 className="text-2xl font-bold mb-4 text-center py-4">Prime Location</h3>
              <p className="mb-4  text-center">
                Properties are located in prime locations, offering you the best choices
              </p>
            </div>

           
            <div className="bg-white p-6 rounded-lg shadow-lg col-span-3 md:col-span-1  hover:text-white hover:bg-green-800 hover:transform hover:scale-110 transition-transform duration-300">
              <VscWorkspaceTrusted className=" m-auto  font-xl font-extrabold  text-5xl text-red-500  "  />
              <h3 className="text-2xl font-bold mb-4 text-center py-4">Trusted By Thousand</h3>
              <p className="mb-4 text-center ">
                Properties are trusted by thousands, ensuring reliability and quality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="mx-10">

         <h1 className="py-2 text-xl text-green-800 hover:text-red-400">Best Choice</h1>
        <div className="mt-2 md:mt-10 flex flex-row justify-between items-center text-center">
          <h2 className="text-2xl font-bold text-red-400 hover:text-green-800 md:mr-4">Featured Properties.</h2>
           <ul className="flex flex-wrap gap-4 md:gap-10">
              <li className="text-green-700 hover:text-red-500 text-1xl">
            <Link href='/'> All Properties</Link>
             </li>
              <li className="text-green-700 hover:text-red-500 text-1xl">
            <Link href='/'>For Buy</Link>
            </li>
              <li className="text-green-700 hover:text-red-500 text-1xl">
            <Link href='/'>For Sale</Link>
             </li>
             <li className="text-green-700 hover:text-red-500 text-1xl">
            <Link href='/'>For Rent</Link>
            </li>
             <li className="text-green-700 hover:text-red-500 text-1xl">
            <Link href='/'>Co-Living</Link>
            </li>
           </ul>
       </div>
      
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
            <h2 className="mx-10 text-center text-xl font-bold text-green-700 hover:text-red-500 py-5">Elite Garden Resedence.</h2>
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
     </section>
     <section className="flex w-full  h-[400px] gap-20 px-10 drop-shadow-2xl text-center">
      <div className=" w-[50%]  py-10  text-center ">
        <h1 className="text-red-400  font-medium text-sm py-2">Take a video tour</h1>
        <div className="bg-white  drop-shadow-2xl rounded-lg ">
        <p className="text-green-800 text-2xl font-medium  py-5"> Watch the video for taking <br/>your decision easily.</p>
        <span className="text-sm my-5  ">Huge number of propreties availabe here for buy, sell and <br/> Rent. Also you find here co-living property so lots opportunity <br/> you have to choose here and enjoy huge discount.</span>
        <p className="py-10 flex  gap-2 text-center justify-center">View all <IoIosArrowRoundForward className="align-center    text-lg" />  </p> 

        </div>
      </div>
      <div className="bg-green-800 w-[50%] items-center justify-center h-[400px] rounded-2xl text-center py-10 px-10 overflow-hidden top-5 bg-cover">
      <iframe width="300" height="250" src="https://www.youtube.com/embed/458bD2kK0v0?si=pOa-Vm4NfwvtZruR&amp;start=119" 
      title="YouTube videos player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"  allowfullscreen></iframe>
       </div>
     </section>

     <section className="mx-10 ">
      <div className="py-10  bg-white drop-shadow-2xl border-10 border-blue-700 rounded-2xl mt-10">
          <h2 className=" text-lg text-red-400 mx-10 py-5 " > Explore Cities</h2>
          
          <p className="flex space-x-4  text-2xl font-bold justify-between mx-10  text-green-800 text-">Find Your Neighborhood.
            <span className="space-x-100 text-black text-sm font-normal  flex md:ml-4   flex-row justify-between items-center">
              Explore all <IoIosArrowRoundForward className="align-center bottom-5 text-lg" /> </span>
          </p>
      </div>
      <div className=" grid grid-cols-4 md:grid-cols-4 gap-5  py-10 mx-10  text-center mb-30">
      <div className="bg-white text-center drop-shadow-2xl rounded-2xl">
             <Image
              src={Img14}
              alt="properties"
              width={700}
              height={100}
              className="object-cover rounded-lg" />
              <h2 className="text-2xl text-red-500 hover:text-green-800 font-semibold my-5">New York
              <p className="text-sm text-green-700 hover:text-red-500 ">2 Properties</p>
              </h2>
      </div>

      <div className="bg-white text-center drop-shadow-2xl rounded-2xl">
             <Image
              src={Img17}
              alt="properties"
              width={700}
              height={100}
              className="object-cover rounded-lg" />
              <h2 className="text-2xl text-red-500 hover:text-green-800 font-semibold my-5">Chelsea U K.
              <p  className="text-sm text-green-700 hover:text-red-500 ">4 Properties</p>
              </h2>
      </div>

      <div className="bg-white text-center drop-shadow-2xl rounded-2xl ">
             <Image
              src={Img12}
              alt="properties"
              width={700}
              height={100}
              className="object-cover rounded-lg" />
              <h2 className="text-2xl text-red-500 hover:text-green-800 font-semibold my-5">Toronto C A.
              <p className="text-sm text-green-700 hover:text-red-500 "> 2 Properties</p>
              </h2>
      </div>
         
      <div className="bg-white text-center drop-shadow-2xl rounded-2xl ">
             <Image
              src={Img15}
              alt="properties"
              width={700}
              height={100}
              className="object-cover rounded-lg" />
              <h2 className="text-2xl text-red-500 hover:text-green-800 font-semibold my-5">Washington D.C.
              <p className="text-sm text-green-700 hover:text-red-500 ">2 Properties</p>
              </h2>
      </div>
      </div>
     </section>

     <section className=" mx-10 flex w-full  gap-10 bg-red-100">
      <div className="py-15 items-center w-[60%] justify-center h-[400px]">
       <Testimony/>
      </div>
      <div className="w-[40%] h-[200px] text-right  py-10 px-10 my-20 bottom mx-10 bg-white drop-shadow-2xl bg-opacity-50">
        <h1 className="text-sm text-red-500 ml-0">Testimonial  </h1>
        <p>Reviews from our <br/> happy Clients.</p>
        <span>Huge number of propreties availabe here for buy, sell and Rent. Also you find here co-living property so lots opportunity you have to choose here and enjoy.</span>
      </div>
     </section>

    </main>
  );
}
