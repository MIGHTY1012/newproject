import Img14 from '@/public/image/img23.jpg'
import Image from 'next/image'

export default function para(){
    return(
        <section className="relative w-full h-[400px] mx-10">
        <Image src={Img14} className="absolute w-full h-[400px] inset-0 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center flex flex-col justify-center items-center h-full p-10 text-white">
          <h1 className="text-sm ">Our Properties</h1>
          <p className="text-3xl font-semibold py-3">All Our Properties</p>
          <span className="text-xs font-semibold ">
            Huge number of properties available here for buy and sell, also you can find here co-living property
          </span>
           
        </div>
      </section>
    )
}