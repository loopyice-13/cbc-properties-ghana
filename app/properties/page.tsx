import PropertyCard from "@/components/PropertyCard";


const properties = [
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Modern Family Villa",
    location: "East Legon, Accra",
    price: "GH₵ 3,500,000",
    bedrooms: 5,
    bathrooms: 4,
    size: "450 m²",
  },

  {
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    title: "Luxury Apartment",
    location: "Airport Residential Area, Accra",
    price: "GH₵ 1,800,000",
    bedrooms: 3,
    bathrooms: 3,
    size: "220 m²",
  },


  {
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    title: "Residential Land",
    location: "Adenta, Greater Accra",
    price: "GH₵ 450,000",
    bedrooms: 0,
    bathrooms: 0,
    size: "900 m²",
  },


  {
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    title: "Executive Townhouse",
    location: "Cantonments, Accra",
    price: "GH₵ 2,700,000",
    bedrooms: 4,
    bathrooms: 4,
    size: "350 m²",
  },


];


export default function PropertiesPage() {

  return (

    <main className="min-h-screen bg-gray-50">


      {/* Header */}

      <section className="bg-primary text-white py-24">

        <div className="container-custom text-center">


          <h1 className="text-5xl font-bold">
            Available Properties
          </h1>


          <p className="mt-5 text-gray-300">
            Explore premium homes, lands and commercial
            properties from CBC Properties Ghana.
          </p>


        </div>

      </section>






      {/* Filters */}

      <section className="container-custom py-10">


        <div className="bg-white rounded-2xl p-6 shadow-luxury grid md:grid-cols-4 gap-4">


          <select className="border p-4 rounded-xl">
            <option>
              Property Type
            </option>
            <option>
              House
            </option>
            <option>
              Apartment
            </option>
            <option>
              Land
            </option>
          </select>



          <select className="border p-4 rounded-xl">
            <option>
              Location
            </option>
            <option>
              East Legon
            </option>
            <option>
              Airport Residential
            </option>
            <option>
              Cantonments
            </option>
          </select>



          <select className="border p-4 rounded-xl">
            <option>
              Budget
            </option>
            <option>
              Under GH₵1M
            </option>
            <option>
              GH₵1M - GH₵3M
            </option>
            <option>
              Above GH₵3M
            </option>
          </select>



          <button className="bg-secondary text-white rounded-xl">
            Search Properties
          </button>


        </div>


      </section>







      {/* Listings */}

      <section className="container-custom pb-20">


        <div className="grid md:grid-cols-3 gap-8">


          {properties.map((property,index)=>(

            <PropertyCard
              key={index}
              {...property}
            />

          ))}


        </div>


      </section>


    </main>

  );

}