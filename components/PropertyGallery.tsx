"use client";

import { useState } from "react";


interface PropertyGalleryProps {

  images: string[];

}



export default function PropertyGallery({
  images,
}: PropertyGalleryProps) {


  const [activeImage, setActiveImage] = useState(images[0]);



  return (

    <div className="space-y-5">


      {/* Main Image */}

      <div className="h-[550px] overflow-hidden rounded-3xl">

        <img
          src={activeImage}
          alt="Property image"
          className="w-full h-full object-cover"
        />

      </div>





      {/* Thumbnail Images */}

      <div className="grid grid-cols-4 gap-4">


        {images.map((image,index)=>(


          <button

            key={index}

            onClick={() => setActiveImage(image)}

            className={`h-24 rounded-xl overflow-hidden border-2 transition ${
              
              activeImage === image
              ? "border-yellow-600"
              : "border-transparent"

            }`}

          >


            <img

              src={image}

              alt={`Property thumbnail ${index + 1}`}

              className="w-full h-full object-cover"

            />


          </button>


        ))}


      </div>


    </div>

  );

}