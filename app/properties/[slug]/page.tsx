import PropertyCard from "@/components/PropertyCard";


const properties = [

  {
    slug: "east-legon-villa",

    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",

    title: "Modern Family Villa",

    location: "East Legon, Accra, Ghana",

    price: "GH₵ 3,500,000",

    bedrooms: 5,

    bathrooms: 4,

    size: "450 m²",

  },


  {
    slug: "airport-residential-apartment",

    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",

    title: "Luxury Airport Apartment",

    location: "Airport Residential Area, Accra, Ghana",

    price: "GH₵ 1,800,000",

    bedrooms: 3,

    bathrooms: 3,

    size: "220 m²",

  },


];



export default function PropertiesPage() {


  return (

    <main className="bg-white min-h-screen">


      {/* Header */}

      <section className="bg-primary text-white py-20">

        <div className="container-custom">


          <h1 className="text-5xl font-bold">

            Our Properties

          </h1>


          <p className="mt-4 text-gray-200 text-lg">

            Explore premium homes, apartments and investment opportunities across Ghana.

          </p>


        </div>

      </section>





      {/* Properties */}

      <section className="container-custom py-16">


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


          {properties.map((property) => (


            <PropertyCard

              key={property.slug}

              {...property}

            />


          ))}


        </div>


      </section>


    </main>

  );

}
