import Link from "next/link";
import {
  MapPin,
  BedDouble,
  Bath,
  Maximize,
} from "lucide-react";


interface PropertyCardProps {

  slug: string;
  image: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  size: string;

}



export default function PropertyCard({
  slug,
  image,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  size,
}: PropertyCardProps) {


  return (

    <div className="bg-white rounded-2xl overflow-hidden shadow-luxury hover:-translate-y-2 transition duration-300">


      {/* Image */}

      <div className="relative h-64">


        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />


        <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
          Featured
        </div>


      </div>





      {/* Content */}

      <div className="p-6">


        <h3 className="text-xl font-bold text-primary">
          {title}
        </h3>



        <div className="flex items-center gap-2 text-gray-600 mt-2">

          <MapPin
            size={18}
            className="text-secondary"
          />

          <span>
            {location}
          </span>

        </div>





        <p className="text-2xl font-bold text-secondary mt-4">
          {price}
        </p>





        <div className="flex justify-between text-gray-600 mt-5">


          <div className="flex items-center gap-2">

            <BedDouble size={18}/>

            <span>
              {bedrooms}
            </span>

          </div>




          <div className="flex items-center gap-2">

            <Bath size={18}/>

            <span>
              {bathrooms}
            </span>

          </div>





          <div className="flex items-center gap-2">

            <Maximize size={18}/>

            <span>
              {size}
            </span>

          </div>


        </div>





        <Link
          href={`/properties/${slug}`}
          className="block text-center w-full mt-6 bg-primary text-white py-3 rounded-xl hover:bg-opacity-90 transition"
        >
          View Details
        </Link>



      </div>


    </div>

  );

}