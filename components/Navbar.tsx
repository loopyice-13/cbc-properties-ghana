"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function Navbar() {

  const [open, setOpen] = useState(false);


  const links = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Properties",
      link: "#properties",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];



  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">


      <div className="container-custom flex items-center justify-between py-5">



        {/* Logo */}

        <a href="#home">

          <h1 className="text-2xl font-bold text-primary">

            CBC <span className="text-secondary">
              Properties
            </span>

          </h1>


          <p className="text-xs text-gray-500">
            Ghana Real Estate
          </p>

        </a>





        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8">


          {links.map((item)=>(
            <a
              key={item.name}
              href={item.link}
              className="text-gray-700 hover:text-secondary transition font-medium"
            >
              {item.name}
            </a>
          ))}



          <a
            href="#contact"
            className="bg-secondary text-white px-6 py-3 rounded-xl hover:scale-105 transition font-semibold"
          >
            Get Started
          </a>


        </div>





        {/* Mobile Button */}

        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
        >

          {open ? <X size={28}/> : <Menu size={28}/>}

        </button>



      </div>





      {/* Mobile Menu */}

      {open && (

        <div className="md:hidden bg-white border-t px-6 py-6">


          {links.map((item)=>(

            <a
              key={item.name}
              href={item.link}
              onClick={()=>setOpen(false)}
              className="block py-3 text-gray-700 hover:text-secondary"
            >

              {item.name}

            </a>

          ))}



          <a
            href="#contact"
            onClick={()=>setOpen(false)}
            className="block text-center mt-4 bg-secondary text-white py-3 rounded-xl"
          >
            Get Started
          </a>


        </div>

      )}


    </nav>

  );

}