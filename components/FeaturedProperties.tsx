import PropertyCard from "./PropertyCard";


const properties = [

  {
    slug: "east-legon-villa",
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
    slug: "airport-residential-apartment",
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
    slug: "cantonments-townhouse",
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


export default function FeaturedProperties() {


  return (

    <section className="py-20 bg-gray-50">


      <div className="container-custom">



        <div className="text-center mb-12">


          <p className="text-secondary uppercase tracking-widest font-semibold">
            Featured Listings
          </p>



          <h2 className="text-4xl font-bold text-primary mt-3">
            Discover Premium Properties
          </h2>



          <p className="text-gray-600 mt-4">
            Explore selected homes and investment opportunities
            from CBC Properties Ghana.
          </p>


        </div>






        <div className="grid md:grid-cols-3 gap-8">


          {properties.map((property) => (

            <PropertyCard
              key={property.slug}
              {...property}
            />

          ))}


        </div>



      </div>


    </section>

  );

}