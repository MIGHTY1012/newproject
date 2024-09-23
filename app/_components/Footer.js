"use client";
import Image from "next/image";
import Logo from '@/public/image/Mgtlg.png';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";


export default function Footer(){
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      setEmail('Please wait...');
      
      setTimeout(() => {
        alert('Your submission was successful. Thanks!');
        setEmail('');
      }, 1000);
    };
  
    return(
        
        <main className="bg-green-100 ">

         <section  className="flex my-5  bg-green-800  justify-between m-auto items-center mx-10 border-4 border-white drop-shadow-2xl p-8 rounded-2xl hover:scale-2   ">
            <div className=" text-center items-center ">
               <h1 className="text-3xl text-white py-3 font-bold text-center">Are you a Home Owner?</h1> 
               <p className="text-x font-semibold text-red-400">Put your email address and get listed.</p>
                
            </div>
                <form onSubmit={handleSubmit} className="flex  border-2 bg-white gap-3 p-5  rounded-xl text-center">
                <input type="email" name="email" placeholder="Enter Your Email here..." className=" border-2 rounded-xl border-white px-3"  value={email}onChange={(e) => setEmail(e.target.value)} required  />
               
                <button className="text-xs text-white bg-green-800 border-2 rounded-xl px-2" > Get listed</button>
            
                </form>
         </section>
   <div className="mx-10">
         <section className=" text-center ">
            <div className="grid grid-cols-4  mx-10 m-auto py-10">

            <div className="m-auto flex flex-col justify-center items-center ">
                <Image src={Logo} width={80} height={100} className="justify-center items-center"/>
                <p className="text-xs py-5 font-semibold">Properties are most budget friendly so you have are find opportunity is main responsibility to clients</p>
            </div>
            <div className="text-center ">
                <h1 className="text-2xl font-bold  text-green-800 ">information.</h1>
                <ul>
                    <li className="text-xs py-3 font-semibold">About</li>
                    <li className="text-xs py-3 font-semibold">Properties</li>
                    <li className="text-xs py-3 font-semibold">Contact</li>
                    <li className="text-xs py-3 font-semibold">Cities</li>
                </ul>
            </div>
            <div>
                <h2 className="text-2xl font-bold  text-green-800">Support.</h2>
                <ul>
                    <li className="text-xs py-3 font-semibold">Service</li>
                    <li className="text-xs py-3 font-semibold">Create Agency</li>
                    <li className="text-xs py-3 font-semibold">Style Guide</li>
                    <li className="text-xs py-3 font-semibold">License</li>
                </ul>
            </div>
            <div className="text-center">
                <h3 className="text-2xl font-bold py-3  text-green-800">Address.</h3>
                <p className="text-xs py-3 font-semibold">2104 Charmaine Lane <br/> Amarillo, New York</p>
                <ul className="flex gap-6 justify-center text-green-800">
                  <Link href="https://www.instagram.com/"><FaSquareInstagram /></Link>
                  <Link href="https://twitter.com/?lang=en"><FaSquareTwitter /></Link>
                  <Link href="https://www.facebook.com/"><FaFacebook /></Link>
                </ul>
            </div>
            </div>
            <p className="text-sm font-semibold py-5"> @Powered by Univelcity</p>
         </section>
            </div>
        </main>
    )
}