import {
  Award,
  Users,
  Building2,
  MapPin,
} from "lucide-react";


const stats = [
  {
    icon: <Building2 size={32}/>,
    number: "100+",
    label: "Property Opportunities",
  },

  {
    icon: <Users size={32}/>,
    number: "500+",
    label: "Clients Served",
  },

  {
    icon: <MapPin size={32}/>,
    number: "20+",
    label: "Locations Covered",
  },

  {
    icon: <Award size={32}/>,
    number: "10+",
    label: "Years Of Experience",
  },
];


export default function AboutSection() {

  return (

    <section className="py-20 bg-white">

      <div className="container-custom">


        <div className="grid md:grid-cols-2 gap-12 items-center">


          {/* Image */}

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
              alt="CBC Properties Ghana office"
              className="rounded-3xl shadow-luxury w-full h-[500px] object-cover"
            />


            <div className="absolute bottom-6 left-6 bg-secondary text-white p-6 rounded-2xl">

              <p className="text-4xl font-bold">
                CBC
              </p>

              <p>
                Trusted Real Estate Partner
              </p>

            </div>


          </div>





          {/* Content */}

          <div>


            <p className="text-secondary uppercase tracking-widest font-semibold">
              About CBC Properties Ghana
            </p>



            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4">
              Creating Real Estate Opportunities Across Ghana
            </h2>



            <p className="text-gray-600 mt-6 leading-relaxed">
              CBC Properties Ghana is a real estate company focused on
              providing professional property solutions for individuals,
              businesses and investors.
            </p>



            <p className="text-gray-600 mt-4 leading-relaxed">
              Our services include property sales, rentals, property
              management, land acquisition, development and real estate
              consulting. We help clients make confident decisions
              through reliable market knowledge and professional support.
            </p>



            <p className="text-gray-600 mt-4 leading-relaxed">
              Located at GM Plaza, Okponglo, East Legon, Accra,
              CBC Properties continues to connect clients with valuable
              residential and commercial opportunities.
            </p>




            <button className="mt-8 bg-primary text-white px-8 py-4 rounded-xl hover:bg-opacity-90 transition">
              Discover Our Services
            </button>


          </div>


        </div>





        {/* Statistics */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">


          {stats.map((stat,index)=>(

            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-luxury transition"
            >

              <div className="text-secondary flex justify-center mb-4">
                {stat.icon}
              </div>


              <h3 className="text-3xl font-bold text-primary">
                {stat.number}
              </h3>


              <p className="text-gray-600 mt-2">
                {stat.label}
              </p>


            </div>

          ))}


        </div>


      </div>


    </section>

  );

}
