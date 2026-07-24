import {
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Phone,
  MessageCircle,
} from "lucide-react";

import PropertyGallery from "@/components/PropertyGallery";
import PropertyFeatures from "@/components/PropertyFeatures";
import GoogleMap from "@/components/GoogleMap";


const properties = {

  "east-legon-villa": {

    title: "Modern Family Villa",
    location: "East Legon, Accra, Ghana",
    price: "GH₵ 3,500,000",

    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    ],

    bedrooms: 5,
    bathrooms: 4,
    size: "450 m²",

    description:
      "A beautifully designed modern villa located in East Legon, Accra. The property offers spacious living areas, premium finishes, excellent security and easy access to major locations.",

    features: [
      "24/7 Security",
      "Private Parking",
      "Modern Kitchen",
      "Garden Area",
      "Prime Location",
    ],

  },


  "airport-residential-apartment": {

    title: "Luxury Airport Apartment",
    location: "Airport Residential Area, Accra, Ghana",
    price: "GH₵ 1,800,000",

    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
    ],

    bedrooms: 3,
    bathrooms: 3,
    size: "220 m²",

    description:
      "A premium apartment in Airport Residential Area offering modern comfort, security and convenient access to Accra's business districts.",

    features: [
      "Swimming Pool",
      "Fitness Centre",
      "Parking",
      "24/7 Security",
      "Prime Location",
    ],

  },

};



export default async function PropertyDetails({

  params,

}: {

  params: Promise<{
    slug: string;
  }>;

}) {


  const { slug } = await params;


  const property =
    properties[slug as keyof typeof properties];



  if (!property) {

    return (

      <main className="min-h-screen flex items-center justify-center">

        <h1 className="text-4xl font-bold">
          Property Not Found
        </h1>

      </main>

    );

  }



  return (

    <main className="bg-white min-h-screen">


      <section className="bg-primary text-white py-20">

        <div className="container-custom">

          <h1 className="text-5xl font-bold">
            {property.title}
          </h1>


          <p className="flex items-center gap-2 mt-4">

            <MapPin />

            {property.location}

          </p>

        </div>

      </section>





      <section className="container-custom py-12">

        <PropertyGallery
          images={property.images}
        />

      </section>






      <section className="container-custom pb-20">


        <div className="grid md:grid-cols-3 gap-10">


          <div className="md:col-span-2">


            <h2 className="text-3xl font-bold text-primary">

              Property Description

            </h2>



            <p className="mt-5 text-gray-600 leading-relaxed">

              {property.description}

            </p>





            <div className="grid grid-cols-3 gap-4 mt-10">


              <div className="bg-gray-50 p-5 rounded-xl text-center">

                <BedDouble className="mx-auto text-secondary"/>

                <p className="mt-2">
                  {property.bedrooms} Bedrooms
                </p>

              </div>



              <div className="bg-gray-50 p-5 rounded-xl text-center">

                <Bath className="mx-auto text-secondary"/>

                <p className="mt-2">
                  {property.bathrooms} Bathrooms
                </p>

              </div>



              <div className="bg-gray-50 p-5 rounded-xl text-center">

                <Maximize className="mx-auto text-secondary"/>

                <p className="mt-2">
                  {property.size}
                </p>

              </div>


            </div>






            <PropertyFeatures
              features={property.features}
            />







            <div className="mt-12">


              <h3 className="text-3xl font-bold text-primary mb-6">

                Location

              </h3>



              <GoogleMap
                location={property.location}
              />


            </div>



          </div>







          <aside className="bg-primary text-white p-8 rounded-3xl h-fit">


            <p className="text-gray-300">

              Property Price

            </p>



            <h2 className="text-3xl font-bold text-secondary mt-2">

              {property.price}

            </h2>





            <a
              href="tel:+233303935313"
              className="flex justify-center items-center gap-2 bg-white text-primary mt-8 py-4 rounded-xl"
            >

              <Phone />

              Call CBC

            </a>





            <a
              href="https://wa.me/233262898686"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 bg-secondary mt-4 py-4 rounded-xl"
            >

              <MessageCircle />

              WhatsApp

            </a>


          </aside>



        </div>


      </section>


    </main>

  );

}
