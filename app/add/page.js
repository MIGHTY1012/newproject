

// import Img14 from '@/public/image/img21.jpg'
// import Image from 'next/image'
// import { TiArrowSortedDown } from "react-icons/ti";
// import { FaArrowRightArrowLeft } from "react-icons/fa6";
// import { MdDriveFileMoveOutline } from "react-icons/md";
// import Link from 'next/link';
// import Footer from '../_components/Footer';





// export default function page(){
//     return(
//         <main>

//         <section className="relative w-full h-[400px] m-auto">
//         <Image src={Img14} className="absolute w-full h-[400px] inset-0 object-cover" />
//         <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//         <div className="relative z-10 text-center flex flex-col justify-center items-center h-full p-10 text-white">
//           <h1 className="text-sm ">Property Add</h1>
//           <p className="text-4xl font-bold py-3">Add Property</p>
//           <span className="text-sm font-semibold ">
//           Huge number of propreties availabe here for buy and sell also you can find here co-living property
//           </span>
//         </div>

//       </section>

//       <section className='m-auto mx-10'>
//         <div className='flex  flex-row justify-between g-10 mx-10'>
            
//             <form className='flex flex-col mt-5 '>
//                 <p className='text-sx py-3 text-green-600'> Property Title</p>
//                 <input className='border border-green-700 p-2 rounded-xl w-[750px] placeholder:text-xs ' placeholder='Property title'/>
//             </form>
//             <form className='flex flex-col mt-5 mx-10 w-[500px]'>
//       <p className='text-sx py-3 text-green-600'>Property Types</p>
//     <div className='relative'>
//         <div className='flex border border-green-700 p-2 rounded-xl justify-between items-center cursor-pointer'>
//           <input
//             type='text'
//             className='placeholder:text-xs outline-none cursor-pointer w-full'
//             placeholder='price $'
           
//           />
//           <TiArrowSortedDown className='font-medium' />
//         </div>
        
//           <div className='absolute top-full mt-1 w-full border border-green-700 rounded-xl bg-white z-10'>
//       </div>
           
//       </div>
//     </form>


                
//         </div>
//              <div className='justify-center m-auto mx-10 items-center my-5'>
                
//                     <form className='flex flex-col '>
//                         <p className='text-sx py-3 text-green-600'>Property Description</p>
//                         <input className='border border-green-700 h-[300px] w-[1100px] placeholder:mx-3 placeholder:text-xs placeholder:align-baseline rounded-xl' placeholder='Write Your Text Here '/>
//                     </form>
                
//              </div>
//       </section>

//       <section className=' m-auto my-10'>
//         <div className='flex  flex-row justify-between g-10 mx-10'>
//         <form className='flex flex-col mt-5 mx-10 '>
//                 <p className='text-sx py-3 text-green-600'> Location 1</p>
//                 <input className='border border-green-700 p-2 rounded-xl w-[500px] placeholder:text-xs ' placeholder='Address Line 1'/>
//             </form>
//             <form className='flex flex-col mt-5 mx-10 '>
//                 <p className='text-sx py-3 text-green-600'> Location 2</p>
//                 <input className='border border-green-700 p-2 rounded-xl w-[500px] placeholder:text-xs ' placeholder='Address Line 2'/>
//             </form>
//         </div>
//         <div className='flex  flex-row justify-between g-10 mx-10'>
//         <form className='flex flex-col mt-5 mx-10 '> 
            
//                 <p className='text-sx py-3 text-green-600'> City</p>
//                 <input className='border border-green-700 p-2 rounded-xl w-[500px] placeholder:text-xs ' placeholder='City'/>
//             </form>
//             <form className='flex flex-col mt-5 mx-10 '>
//                 <p className='text-sx py-3 text-green-600'> Zip Code</p>
//                 <input className='border border-green-700 p-2 rounded-xl w-[500px] placeholder:text-xs ' placeholder='Zip Code'/>
//             </form>
//         </div>

//         <div className='flex  flex-row justify-between g-10 mx-10'>
//         <form className='flex flex-col mt-5  mx-10 w-[500px]'>
//                 <p className='text-sx py-3 text-green-600'> Property Types</p>
//                 <div className='flex border border-green-700 p-2 rounded-xl  justify-between '>
//                 <input type='price' className='placeholder:text-xs  ' placeholder='Duplex Villa '   />
//                 <TiArrowSortedDown className=' font-medium' /> 
//                 {/* <select><optgroup value="Duplex">Duplex566</optgroup></select> */}
//                 </div>
//             </form>
//             <form className='flex flex-col mt-5 mx-10  w-[500px] '>
//                 <p className='text-sx py-3 text-green-600'> Property Status</p>
//                 <div className='flex border border-green-700 p-2 rounded-xl justify-between  '>
//                 <input type='price' className='placeholder:text-xs relative ' placeholder='Sale'  />
//                 <TiArrowSortedDown className='font-medium' />
//                 </div>
//             </form>
//         </div>

//         <div className='flex  flex-row justify-between g-10 mx-10'>
//         <form className='flex flex-col mt-5 mx-10 '>
//                 <p className='text-sx py-3 text-green-600'> Property Size</p>
//                 <input className='border border-green-700 p-2 rounded-xl w-[500px] placeholder:text-xs ' placeholder='Property Size (sqft)'/>
//             </form>
//             <form className='flex flex-col mt-5 mx-10 '>
//                 <p className='text-sx py-3 text-green-600'> Number of Bedroom</p>
//                 <input className='border border-green-700 p-2 rounded-xl w-[500px] placeholder:text-xs ' placeholder='Number of Bedroom'/>
//             </form>
//         </div>

//         <div className='flex  flex-row justify-between g-10 mx-10'>
//         <form className='flex flex-col mt-5 mx-10 '>
//                 <p className='text-sx py-3 text-green-600'>Number of Bathroom</p>
//                 <input className='border border-green-700 p-2 rounded-xl w-[500px] placeholder:text-xs ' placeholder='Number of Bathroom'/>
//             </form>
//             <form className='flex flex-col mt-5 mx-10 '>
//                 <p className='text-sx py-3 text-green-600'> Number of Garage</p>
//                 <input className='border border-green-700 p-2 rounded-xl w-[500px] placeholder:text-xs ' placeholder='Number of Garage'/>
//             </form>
//         </div>

//         <div className='flex  flex-col justify-between g-10 mx-10 m-auto '>
//         <form className='flex flex-col mt-5 mx-10 '>
//                 <p className='text-sx py-3 text-green-600'>Add Images</p>
//                 <input type='file' className='border border-green-700 p-2 rounded-xl w-[1100px] h-[100px] placeholder:text-xs '/>
//             </form>
//             <form  className='flex flex-col mt-5 mx-10'>
//                 <p className='text-sx py-3 text-green-600'> Add Videos</p>
//                 <div className='border border-green-700 p-2 rounded-xl w-[1100px] h-[100px] justify-center items-center  ' >
//                 <input type='file'  className=' justify-center items-center  placeholder:justify-center placeholder:items-center type:' placeholder='Add Videos ' />
//                 {/* <Link href="add" className='justify-center relative'>
//                   <p className='flex justify-center items-center w-40   bg-green-800 text-white p-3 gap-2 rounded-xl'><MdDriveFileMoveOutline className='text-2xl' /> Add Videos</p> </Link> */}
//                 </div>
//             </form>
//         </div>
//       </section>

//       {/* <li className='border'>
        
//         <form name="state" id="state">
//             <optgroup label="north west">
//                 <input value="ibd" selected/>
//             <option value="ogun" placeholder="ogun"></option>
//             </optgroup>
            
//             <optgroup label="south west">
//                 <option value="lg">lagos</option>
//                 <option value="osn">osun</option>
//             </optgroup>
//            <optgroup label="south west">
//             <option value="kogi">kogi</option>
//             <option value="platue">platue</option>

//            </optgroup>


//         </form>
//     </li> */}

//       <section className='mx-10 flex justify-between gap-x-5 bg-white drop-shadow-2xl border py-5 rounded-lg'>
//         <div className='flex flex-col mx-10  bg-white drop-shadow-2xl border items-center rounded-md '>

//             <h1 className='py-5 mx-10 text-2xl font-medium text-green-600'>Property Aminities</h1>
           
//             <div className='flex gap-5  mt-5 pt-10'> 

//               <div className='grid grid-flow-row gap-5  mx-10  '>
        
//             <label className="gap-x-2"> <input type='checkbox' name='checkbox' id='checkbox' className='gap-x-3'/><span className='px-3'>
//             Air Conditioning</span></label>
//             <label class=""> <input type='checkbox' name='checkbox' id='checkbox'/><span className='px-3'>
//             Balcony</span></label>
//             <label> <input type='checkbox' name='checkbox' id='checkbox'/><span className='px-3'>
//             Oven</span></label>
//             <label> <input type='checkbox' name='checkbox' id='checkbox'/><span className='px-3'> Paking</span></label>
//             <label> <input type='checkbox' name='checkbox' id='checkbox'/><span className='px-3'>
//             Pool</span></label>
//             <label> <input type='checkbox' name='checkbox' id='checkbox'/><span className='px-3'>
//             Washing-Machine</span></label>
           
//               </div>


//         <div className='grid grid-flow-row gap-1 px-3.5'>
            
        
//             <label className="gap-x-2"> <input type='checkbox' name='checkbox' id='checkbox' className='gap-x-3'/><span className='px-3'>
//             Bedding</span></label>
//             <label class=""> <input type='checkbox' name='checkbox' id='checkbox'/><span className='px-3'>ACable Tv</span></label>
//             <label> <input type='checkbox' name='checkbox' id='checkbox'/><span className='px-3'>
//             Internet</span></label>
//             <label> <input type='checkbox' name='checkbox' id='checkbox'/><span className='px-3'> 
//             Lift</span></label>
//             <label> <input type='checkbox' name='checkbox' id='checkbox'/><span className='px-3'>
//             Dish-Washer</span></label>
//             <label> <input type='checkbox' name='checkbox' id='checkbox'/><span className='px-3'>
//             Toaster</span></label>
           
//         </div>
//         </div>
//                 <div className='border bg-green-800 text-xs text-white my-10 p-3 rounded-lg'>
//                     <Link href="/add"><button>Add Property</button>
//                     </Link>
//                 </div>
//         </div>

        
//         <div className='flex justify-center items-center '>
//                 <p className=' justify-center items-center hover:bg-green-700 hover:text-white hover:p-5 hover:rounded-md '>
//                 <FaArrowRightArrowLeft className='text-8xl font-extrabold' />
//                 </p>
//               </div>

//         <div className="  justify-center items-center m-auto  mx-10 text-center rounded-md h-[400px] bg-white drop-shadow-2xl border">
//             <h2 className='text-2xl font-medium text-green-600 py-10'>Place on Map </h2>
//             <p  className="  justify-center items-center m-auto w-fit h-fit mx-10">
//             <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195600.62651466404!2d-75.28283898774522!3d40.00264429516856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1722226974794!5m2!1sen!2sus' width='100%' height='250px' style={{border:0 }} allowfullscreen loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>
//             </p>
//           </div>
        
//       </section>

//       <section className='m-auto '>
//         <div className='mx-10 mt-7'>
//             <Footer/>
//         </div>
//       </section>
//         </main>
//     )
// }


"use client"


import { useState } from 'react';
import Image from 'next/image';
import { TiArrowSortedDown } from "react-icons/ti";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdDriveFileMoveOutline } from "react-icons/md";
import Link from 'next/link';
import Footer from '../_components/Footer';
import Img14 from '@/public/image/img21.jpg';

export default function Page() {
  const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState('');

  const [saleDropdownOpen, setSaleDropdownOpen] = useState(false);
  const [selectedSale, setSelectedSale] = useState('');

  const [villaDropdownOpen, setVillaDropdownOpen] = useState(false);
  const [selectedVilla, setSelectedVilla] = useState('');

  const togglePriceDropdown = () => {
    setPriceDropdownOpen (!priceDropdownOpen,);
  };
  const toggleVillaDropdown = () => {
    setVillaDropdownOpen (!villaDropdownOpen,);
  };

  const toggleSaleDropdown = () => {
    setSaleDropdownOpen(!saleDropdownOpen);
  };

  const selectPrice = (price) => {
    setSelectedPrice(price);
    setPriceDropdownOpen(false);
  };
  const selectSale = (sale) => {
    setSelectedSale(sale);
    setSaleDropdownOpen(false);
  };
  const selectVilla = (villa) => {
    setSelectedVilla(villa);
    setSaleDropdownOpen(false);
  };

  return (
    <main>
      <section className="relative w-full h-[400px] m-auto">
        <Image src={Img14} className="absolute w-full h-[400px] inset-0 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center flex flex-col justify-center items-center h-full p-10 text-white">
          <h1 className="text-sm">Property Add</h1>
          <p className="text-4xl font-bold py-3">Add Property</p>
          <span className="text-sm font-semibold">
            Huge number of properties available here for buy and sell. Also, you can find co-living property here.
          </span>
        </div>
      </section>

      <section className='m-auto mx-10'>
        <div className='flex flex-row justify-between g-10 mx-10'>
          <form className='flex flex-col mt-5 '>
            <p className='text-sx py-3 text-green-600'>Property Title</p>
            <input className='border border-green-700 p-2 rounded-xl w-[750px] placeholder:text-xs ' placeholder='Property title' />
          </form>
          <form className='flex flex-col mt-5 mx-10 w-[500px]'>
            <p className='text-sx py-3 text-green-600'>Price</p>
            <div className='relative'>
              <div className='flex border border-green-700 p-2 rounded-xl justify-between items-center cursor-pointer' onClick={togglePriceDropdown}>
                <input
                  type='text'
                  value={selectedPrice}
                  className='placeholder:text-xs outline-none cursor-pointer w-full  text-xs font-semibold'
                  placeholder='Select price'
                  readOnly
                />
                <TiArrowSortedDown className='font-medium' />
              </div>

              {priceDropdownOpen && (
                <div className='absolute top-full mt-1 w-full border border-green-700 rounded-xl bg-white z-10'>
                  <ul>
                    <li className='p-2 hover:bg-green-800 cursor-pointer text-xs hover:rounded-lg hover:text-white hover:font-semibold ' onClick={() => selectPrice('$10,000')}>$10,000</li>
                    <li className='p-2 hover:bg-green-800 cursor-pointer text-xs hover:rounded-lg hover:text-white hover:font-semibold' onClick={() => selectPrice('$15,000')}>$15,000</li>
                    <li className='p-2 hover:bg-green-800 cursor-pointer text-xs hover:rounded-lg hover:text-white hover:font-semibold' onClick={() => selectPrice('$20,000')}>$20,000</li>
                  </ul>
                </div>
              )}
            </div>
          </form>
        </div>
        {/* Additional sections for other inputs can go here */}
      </section>
      <section className='m-auto mx-10'>

             <div className='justify-center m-auto mx-10 items-center my-5'>
                
                    <form className='flex flex-col '>
                        <p className='text-sx py-3 text-green-600'>Property Description</p>
                        <input className='border border-green-700 h-[300px] w-[1400px] placeholder:mx-3 placeholder:text-xs placeholder:align-baseline rounded-xl' placeholder='Write Your Text Here '/>
                    </form>
                
             </div>
      </section>

      <section className=' m-auto my-10'>
        <div className='flex  flex-row justify-between g-10 mx-10'>
        <form className='flex flex-col mt-5 mx-10 '>
                <p className='text-sx py-3 text-green-600'> Location 1</p>
                <input className='border border-green-700 p-2 rounded-xl w-[500px] placeholder:text-xs ' placeholder='Address Line 1'/>
            </form>
            <form className='flex flex-col mt-5 mx-10 '>
                <p className='text-sx py-3 text-green-600'> Location 2</p>
                <input className='border border-green-700 p-2 rounded-xl w-[500px] placeholder:text-xs ' placeholder='Address Line 2'/>
            </form>
        </div>
        <div className='flex  flex-row justify-between g-10 mx-10'>
        <form className='flex flex-col mt-5 mx-10 '> 
            
                <p className='text-sx py-3 text-green-600'> City</p>
                <input className='border border-green-700 p-2 rounded-xl w-[500px] placeholder:text-xs ' placeholder='City'/>
            </form>
            <form className='flex flex-col mt-5 mx-10 '>
                <p className='text-sx py-3 text-green-600'> Zip Code</p>
                <input className='border border-green-700 p-2 rounded-xl w-[500px] placeholder:text-xs ' placeholder='Zip Code'/>
            </form>
        </div>

        <div className='flex  flex-row justify-between g-10 mx-10'>
        <form className='flex flex-col mt-5  mx-10 w-[500px]'>
             <div className='relative'>

                <p className='text-sx py-3 text-green-600'> Property Types</p>
                {/* <div className='flex border border-green-700 p-2 rounded-xl  justify-between '>
                <input type='price' className='placeholder:text-xs  ' placeholder='Duplex Villa '   />
                <TiArrowSortedDown className=' font-medium' /> 
                </div> */}
                  <div className='flex border border-green-700 p-2 rounded-xl justify-between items-center cursor-pointer' onClick={toggleVillaDropdown}>
                <input
                  type='text'
                  value={selectedVilla}
                  className='placeholder:text-xs outline-none cursor-pointer w-full  text-xs font-semibold'
                  placeholder='Duplex Villa'
                  readOnly
                  />
                <TiArrowSortedDown className='font-medium' />
              </div>
              {villaDropdownOpen && (
                <div className='absolute top-full mt-1 w-full border border-green-700 rounded-xl bg-white z-10'>
                  <ul>
                    <li className='p-2 hover:bg-green-800 cursor-pointer text-xs hover:rounded-lg hover:text-white hover:font-semibold ' onClick={() => selectVilla('Duplex Villa')}>Duplex Villa</li>
                    <li className='p-2 hover:bg-green-800 cursor-pointer text-xs hover:text-white hover:font-semibold ' onClick={() => selectVilla('Duplex')}>Duplex</li>
                    <li className='p-2 hover:bg-green-800 hover:rounded-lg hover:text-white cursor-pointer text-xs  hover:font-semibold' onClick={() => selectVilla('Villa')}>Villa</li>
                  </ul>
                </div>
              )}

             </div>
            </form>


            <form className='flex flex-col mt-5 mx-10  w-[500px] '>
              <div className='relative'>

                <p className='text-sx py-3 text-green-600'> Property Status</p>
                {/* <div className='flex border border-green-700 p-2 rounded-xl justify-between  '>
                <input type='price' className='placeholder:text-xs relative ' placeholder='Sale'  />
                <TiArrowSortedDown className='font-medium' />
                </div> */}
                <div className='flex border border-green-700 p-2 rounded-xl justify-between items-center cursor-pointer' onClick={toggleSaleDropdown}>
                <input
                  type='text'
                  value={selectedSale}
                  className='placeholder:text-xs outline-none cursor-pointer w-full text-xs font-semibold'
                  placeholder='Sale'
                  readOnly
                  />
                <TiArrowSortedDown className='font-medium' />
              </div>
              {saleDropdownOpen && (
                <div className='absolute  mt-1 w-full border border-green-700 rounded-xl bg-white z-10'>
                  <ul>
                    <li className='p-2 hover:bg-green-800 cursor-pointer text-xs hover:rounded-lg hover:text-white hover:font-semibold ' onClick={() => selectSale('Sale')}>Sale</li>
                    <li className='p-2 hover:bg-green-800 cursor-pointer text-xs hover:text-white hover:font-semibold ' onClick={() => selectSale('High Price')}>High Price</li>
                    <li className='p-2 hover:bg-green-800 hover:rounded-lg hover:text-white cursor-pointer text-xs  hover:font-semibold' onClick={() => selectSale('Low Price')}>Low Price</li>
                  </ul>
                </div>
              )}
                  </div>
              

            </form>
        </div>

        <div className='flex  flex-row justify-between g-10 mx-10'>
        <form className='flex flex-col mt-5 mx-10 '>
                <p className='text-sx py-3 text-green-600'> Property Size</p>
                <input className='border border-green-700 p-2 rounded-xl w-[500px] placeholder:text-xs ' placeholder='Property Size (sqft)'/>
            </form>
            <form className='flex flex-col mt-5 mx-10 '>
                <p className='text-sx py-3 text-green-600'> Number of Bedroom</p>
                <input className='border border-green-700 p-2 rounded-xl w-[500px] placeholder:text-xs ' placeholder='Number of Bedroom'/>
            </form>
        </div>

        <div className='flex  flex-row justify-between g-10 mx-10'>
        <form className='flex flex-col mt-5 mx-10 '>
                <p className='text-sx py-3 text-green-600'>Number of Bathroom</p>
                <input className='border border-green-700 p-2 rounded-xl w-[500px] placeholder:text-xs ' placeholder='Number of Bathroom'/>
            </form>
            <form className='flex flex-col mt-5 mx-10 '>
                <p className='text-sx py-3 text-green-600'> Number of Garage</p>
                <input className='border border-green-700 p-2 rounded-xl w-[500px] placeholder:text-xs ' placeholder='Number of Garage'/>
            </form>
        </div>

        <div className='flex  flex-col justify-between g-10 mx-10 m-auto '>
        <form className='flex flex-col mt-5 mx-10 '>
                <p className='text-sx py-3 text-green-600'>Add Images</p>
                <input type='file' className='border border-green-700 p-2 rounded-xl w-[1100px] h-[100px] placeholder:text-xs '/>
            </form>
            <form  className='flex flex-col mt-5 mx-10'>
                <p className='text-sx py-3 text-green-600'> Add Videos</p>
                <div className='border border-green-700 p-2 rounded-xl w-[1100px] h-[100px] justify-center items-center  ' >
                <input type='file'  className=' justify-center items-center  placeholder:justify-center placeholder:items-center type:' placeholder='Add Videos ' />
                {/* <Link href="add" className='justify-center relative'>
                  <p className='flex justify-center items-center w-40   bg-green-800 text-white p-3 gap-2 rounded-xl'><MdDriveFileMoveOutline className='text-2xl' /> Add Videos</p> </Link> */}
                </div>
            </form>
        </div>
      </section>

     

      <section className='mx-10 flex justify-between gap-x-5 bg-white drop-shadow-2xl border py-5 rounded-lg'>
        <div className='flex flex-col mx-10  bg-white drop-shadow-2xl border items-center rounded-md '>

            <h1 className='py-5 mx-10 text-2xl font-medium text-green-600'>Property Aminities</h1>
           
            <div className='flex gap-5  mt-5 pt-10'> 

              <div className='grid grid-flow-row gap-5  mx-10  '>
        
            <label className="gap-x-2"> <input type='checkbox' name='checkbox' id='checkbox' className='gap-x-3'/><span className='px-3'>
            Air Conditioning</span></label>
            <label class=""> <input type='checkbox' name='checkbox' id='checkbox'/><span className='px-3'>
            Balcony</span></label>
            <label> <input type='checkbox' name='checkbox' id='checkbox'/><span className='px-3'>
            Oven</span></label>
            <label> <input type='checkbox' name='checkbox' id='checkbox'/><span className='px-3'> Paking</span></label>
            <label> <input type='checkbox' name='checkbox' id='checkbox'/><span className='px-3'>
            Pool</span></label>
            <label> <input type='checkbox' name='checkbox' id='checkbox'/><span className='px-3'>
            Washing-Machine</span></label>
           
              </div>


        <div className='grid grid-flow-row gap-1 px-3.5'>
            
        
            <label className="gap-x-2"> <input type='checkbox' name='checkbox' id='checkbox' className='gap-x-3'/><span className='px-3'>
            Bedding</span></label>
            <label class=""> <input type='checkbox' name='checkbox' id='checkbox'/><span className='px-3'>ACable Tv</span></label>
            <label> <input type='checkbox' name='checkbox' id='checkbox'/><span className='px-3'>
            Internet</span></label>
            <label> <input type='checkbox' name='checkbox' id='checkbox'/><span className='px-3'> 
            Lift</span></label>
            <label> <input type='checkbox' name='checkbox' id='checkbox'/><span className='px-3'>
            Dish-Washer</span></label>
            <label> <input type='checkbox' name='checkbox' id='checkbox'/><span className='px-3'>
            Toaster</span></label>
           
        </div>
        </div>
                <div className='border bg-green-800 text-xs text-white my-10 p-3 rounded-lg'>
                    <Link href="/add"><button>Add Property</button>
                    </Link>
                </div>
        </div>

        
        <div className='flex justify-center items-center '>
                <p className=' justify-center items-center hover:bg-green-700 hover:text-white hover:p-5 hover:rounded-md '>
                <FaArrowRightArrowLeft className='text-8xl font-extrabold' />
                </p>
              </div>

        <div className="  justify-center items-center m-auto  mx-10 text-center rounded-md h-[400px] bg-white drop-shadow-2xl border">
            <h2 className='text-2xl font-medium text-green-600 py-10'>Place on Map </h2>
            <p  className="  justify-center items-center m-auto w-fit h-fit mx-10">
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195600.62651466404!2d-75.28283898774522!3d40.00264429516856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b7d8d4b54beb%3A0x89f514d88c3e58c1!2sPhiladelphia%2C%20PA!5e0!3m2!1sen!2sus!4v1722226974794!5m2!1sen!2sus' width='100%' height='250px' style={{border:0 }} allowfullscreen loading='lazy' referrerpolicy='no-referrer-when-downgrade'></iframe>
            </p>
          </div>
        
      </section>

      <section className='m-auto '>
        <div className='mx-10 mt-7'>
          <Footer />
        </div>
      </section>
    </main>
  );
}
