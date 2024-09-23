import Img14 from '@/public/image/img24.jpg'
import Img11 from '@/public/image/img20.jpg'
import Image from 'next/image'
import Link from 'next/link';
import { IoLocation } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import Footer from '../_components/Footer';


export default function page(){
    return(
     <main>

        <section className="relative w-full h-[400px] hover:bg-green-800 ">
          <div className='flex  absolute w-full h-[400px] inset-0 bg-repeat'>

        <Image src={Img14} className="w-[50%]" />
        <Image src={Img11} className="w-[50%]" />
          </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center flex flex-col justify-center items-center h-full p-10 text-white">
          <h1 className="text-sm ">Contact Us</h1>
          <p className="text-3xl font-extrabold py-3">Contact Information</p>
          <span className="text-xs font-semibold ">
          Huge number of propreties availabe here for buy and sell, also you can find here co-living property
          </span>
        </div>
       </section>

       <section className='m-auto items-center justify-center '>
        <div className='flex flex-col  items-center'>
          <div className=' flex flex-col items-center my-10 gap-y-5'>
            <h1 className='text-xs text-red-400 font-medium'>Our contact Information</h1>
            <p className='text-3xl text-green-700 font-bold'>Get In Touch.</p>
            <p className='w-[330px] text-xs font-semibold '>Huge number of propreties availabe here for buy, sell and Rent. Also you find here co-living property, lots opportunity.</p>
          </div>
          <div className='flex  justify-between p-5'> 

            <div className='flex flex-col p-10  items-center  hover:bg-green-200 drop-shadow-xl '>
              <h2 className='justify-center font-medium '>Address.</h2>
              <div className='flex g-x-3 items-center'>
              <p><IoLocation  className='text-5xl '/> </p>
              <span className='w-[150px] text-xs'>2104 Charmaine Lane Amarillo,New York</span>
              </div>
              
            </div>

            <div className='flex flex-col p-10  items-center  hover:bg-green-200 drop-shadow-xl'>
              <h3 className='justify-center font-medium '>Call Us.</h3>
              <div className='flex items-center gap-x-3'>
              <p><FiPhoneCall className='text-5xl' /> </p>
              <div className='flex flex-col text-xs'>
              <Link href="tel:+12533-1991-123">
              <span className=' hover:text-red-400 hover:font-medium'>Admin [+1 2533-1991-123 ]</span>
              </Link>
              <Link href="tel:+16764-7890-237">
              <span className=' hover:text-red-400 hover:font-semibold'>Customer Rep [+1 6764-7890-237 ]</span>
              </Link>
              </div>
              </div>
              
            </div>
            <div className='flex flex-col p-10 items-center hover:bg-green-200 drop-shadow-xl '>
              <h4 className='justify-center font-medium '>Email us.</h4>
              <div className='flex items-center gap-x-3'>
              <p ><MdOutlineEmail className='text-5xl'/> </p>
              <div className='flex flex-col text-xs hover:text-red-400'>
              <Link href= "mailto:Admin@example.com">
              <span>Admin@example.com</span>
              </Link>
              <Link href="mailto:Info@example.com">
              <span>Info@example.com</span>
              </Link>
              </div>
              </div>
              
            </div>  

          </div>

        </div>
       </section>

       <section className='flex flex-col items-center py-10'>
  <div className=' flex flex-col md:flex-row items-center justify-center gap-10'>
    <div className=' md:w-1/2 flex flex-col items-center'>
      <div className='text-center items-center'>
        <h5 className='text-2xl font-semibold mb-4'>Send Message</h5>
        <p className='text-gray-600 justify-center w-[350px]'>Huge number of properties available here for buy, sell, and rent. Also, you find here co-living property, lots of opportunities.</p>
      </div>
      <div className='flex flex-col gap-5 gap-x-5 justify-between my-7'>
        <div className='flex gap-5 items-center' >
          <form className='w-full justify-center'>
            <input className='border border-green-700 p-2 rounded-xl w-full placeholder:text-xs' placeholder='First Name' />
          </form>
          <form className='w-full'>
            <input className='border border-green-700 p-2 rounded-xl w-full placeholder:text-xs' placeholder='Last Name' />
          </form>
        </div>
        <div className='flex gap-5'>
          <form className='w-full'>
            <input className='border border-green-700 p-2 rounded-xl w-full placeholder:text-xs' placeholder=' Email address' required="@" />
          </form>
          <form className='w-full'>
            <input className='border border-green-700 p-2 rounded-xl w-full placeholder:text-xs' placeholder='Phone' />
          </form>
        </div>
    
          <div className=''>

        <form className='h-50'><textarea className='border border-green-700 p-2 rounded-xl w-full placeholder:text-xs' placeholder='Phone' /></form>
          </div>

          
           <Link href="/contact"><button className='border bg-green-800 text-xs text-white my-10 p-3 rounded-lg'>Contact Us</button></Link>
                
        

      
      </div>

      
    </div>
    
      <div className='w-[50%] md:w-1/2 flex items-center '>
      <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195600.62651466404!2d-75.28283898774522!3d40.00264429516856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1722226974794!5m2!1sen!2sus' width='100%' height='300' style={{ border: 0 }} allowFullScreen loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
    </div>
    </div>
</section>
<div className='w-full'>
            <Footer/>
        </div>
</main>
    )
}