// // 

// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { IoMenu, IoClose } from "react-icons/io5";
// import { RiArrowDownWideFill } from "react-icons/ri";
// import logo from "@/public/RST-LOGO.png";

// export default function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     return (
//         <div>
//             <nav className="bg-white shadow-md p-4">
//                 <div className="container mx-auto flex items-center justify-between">
//                     <Image src={logo} alt="Villa logo" width={150} height={70} />
//                     <div className="md:hidden">
//                         {menuOpen ? (
//                             <IoClose className="text-2xl cursor-pointer" onClick={toggleMenu} />
//                         ) : (
//                             <IoMenu className="text-2xl cursor-pointer" onClick={toggleMenu} />
//                         )}
//                     </div>
//                     <div className={`md:flex ${menuOpen ? "block" : "hidden"} w-full md:w-auto`}>
//                         <ul className="flex flex-col md:flex-row md:items-center w-full md:w-auto space-y-4 md:space-y-0 md:space-x-6">
//                             <li>
//                                 <a href="#" className="text-gray-700 hover:text-orange-500">Home</a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-gray-700 hover:text-orange-500">
//                                     Properties <RiArrowDownWideFill />
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-gray-700 hover:text-orange-500">Pages</a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-gray-700 hover:text-orange-500">Blog</a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-gray-700 hover:text-orange-500">Contact</a>
//                             </li>
//                             <li>
//                                 <button className="bg-green-700 text-white px-4 py-2 rounded">Add Property</button>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     );
// }


"use client";

import Image from "next/image";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "@/public/image/Mgtlg.png";
import styles from '@/app/_components/Nav.module.css'
import Top from '@/app/_components/Top';
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <Top />
            <nav className={styles.Nav}>
                <div className="flex items-center justify-between">
                    <Image src={logo} alt="Villa logo" width={50} height={50} />
                    <div className="md:hidden">
                        {menuOpen ? (
                            <IoClose className="text-2xl cursor-pointer" onClick={toggleMenu} />
                        ) : (
                            <IoMenu className="text-2xl cursor-pointer" onClick={toggleMenu} />
                        )}
                    </div>
                </div>

                <div className={`md:flex ${menuOpen ? "block" : "hidden"} md:block`}>
                    <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                        <Link
                            href="/">Home </Link>
                        <Link
                         href="/properties">Properties </Link>
                        <Link
                             href="/about">About</Link>
                        <Link
                            href="/contact">Contact</Link>
                        
                       <Link href="/add"><button className="bg-blue-500 text-white px-4 py-2 rounded">Add Properties</button>
                       </Link> 
                        
                    </ul>
                </div>
            </nav>
        </div>
    );
}
