"use client"
import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import Agt1 from '@/public/image/agent1.jpg'

const testimonials = [
  "Overall, [Agent's Name]'s dedication, professionalism, and expertise in the real estate market made a significant difference in our lives. We highly recommend their services for anyone looking to sell, buy, or rent property.",
  "Excellent customer service and a fantastic product.",
  "I highly recommend this to everyone. Absolutely worth it!",
  "A game changer in the industry. I'm very satisfied with my purchase.",
  "Top-notch quality and outstanding performance."
];

const Testimony = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (   
    <main className='m-auto'>

    <div className="relative w-full h-96  rounded-2xl mx-10 py-5 bg-green-800 bg-  bg-right-top-10 drop-shadow-2xl overflow-visible" >
    <div className="absolute items-center   left-2/3 justify-center " >
        <Image src={Agt1}
        width={500}
        height={250} className=" justify-center items-center object-cover  rounded-2xl"/>
    </div>
      <div className="absolute inset-0 flex justify-center items-center -bottom-2/3  ">
        <div className="bg-white drop-shadow-2xl p-8 rounded-lg max-w-xl text-center text-xl flex items-center justify-between top-10">
          <p>{testimonials[currentIndex]}</p>
          <FaChevronRight className="text-3xl text-green-800 cursor-pointer " onClick={handleNext} />
        </div>
      </div>
    </div>
    </main>
  );
};

export default Testimony;
