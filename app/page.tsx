import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedProperties from "@/components/FeaturedProperties";
import InquiryForm from "@/components/InquiryForm";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";


export default function Home() {


  return (

    <main>


      <Navbar />



      {/* Hero Section */}

      <section className="relative min-h-[90vh] flex items-center">


        <img

          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"

          alt="Luxury property"

          className="absolute inset-0 w-full h-full object-cover"

        />



        <div className="absolute inset-0 bg-black/50" />





        <div className="container-custom relative z-10 text-white">


          <p className="text-secondary uppercase tracking-widest font-semibold">

            CBC Properties Ghana

          </p>



          <h1 className="text-5xl md:text-7xl font-bold mt-5 max-w-4xl">

            Find Your Dream Property In Ghana

          </h1>



          <p className="mt-6 text-xl text-gray-200 max-w-2xl">

            Premium homes, lands and investment opportunities
            across Accra and Ghana.

          </p>




          <div className="flex gap-5 mt-10">


            <a

              href="/properties"

              className="bg-secondary px-8 py-4 rounded-xl font-semibold"

            >

              Explore Properties

            </a>




            <a

              href="#contact"

              className="bg-white text-primary px-8 py-4 rounded-xl font-semibold"

            >

              Contact Us

            </a>



          </div>



        </div>


      </section>







      {/* Featured Properties */}

      <FeaturedProperties />








      {/* About */}

      <AboutSection />








      {/* Enquiry */}

      <section className="container-custom py-20">


        <InquiryForm />


      </section>








      {/* Contact */}

      <section id="contact">

        <ContactSection />

      </section>








      <Footer />


    </main>

  );

}