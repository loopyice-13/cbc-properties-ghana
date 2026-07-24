import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";


export default function Footer() {

  return (

    <footer className="bg-gray-950 text-white pt-16 pb-8">

      <div className="container-custom">


        <div className="grid md:grid-cols-4 gap-10">


          {/* Brand */}

          <div>

            <h2 className="text-2xl font-bold">
              CBC <span className="text-secondary">
                Properties
              </span>
            </h2>


            <p className="text-gray-400 mt-4 leading-relaxed">
              CBC Properties Ghana provides professional real estate
              solutions including property sales, rentals, management,
              development and investment opportunities.
            </p>


            <div className="flex gap-4 mt-6">

              <a href="#" className="hover:text-secondary transition">
                <Facebook />
              </a>

              <a href="#" className="hover:text-secondary transition">
                <Instagram />
              </a>

              <a href="#" className="hover:text-secondary transition">
                <Linkedin />
              </a>

              <a href="#" className="hover:text-secondary transition">
                <Twitter />
              </a>

            </div>

          </div>





          {/* Quick Links */}

          <div>

            <h3 className="text-lg font-bold mb-5">
              Quick Links
            </h3>


            <ul className="space-y-3 text-gray-400">

              <li>Home</li>
              <li>About Us</li>
              <li>Properties</li>
              <li>Services</li>
              <li>Contact</li>

            </ul>


          </div>





          {/* Services */}

          <div>

            <h3 className="text-lg font-bold mb-5">
              Services
            </h3>


            <ul className="space-y-3 text-gray-400">

              <li>Property Sales</li>
              <li>Property Rentals</li>
              <li>Land Acquisition</li>
              <li>Property Management</li>
              <li>Real Estate Consulting</li>

            </ul>


          </div>





          {/* Contact */}

          <div>

            <h3 className="text-lg font-bold mb-5">
              Contact
            </h3>


            <div className="space-y-4 text-gray-400">


              <p className="flex gap-3">

                <MapPin className="text-secondary shrink-0"/>

                <span>
                  3rd Floor – GM Plaza,
                  Okponglo, La-Bawaleshie Road,
                  East Legon, Accra
                </span>

              </p>



              <p className="flex gap-3">

                <Phone className="text-secondary"/>

                +233 30 393 5313

              </p>




              <p className="flex gap-3">

                <Phone className="text-secondary"/>

                +233 26 289 8686

              </p>




              <p className="flex gap-3">

                <Mail className="text-secondary"/>

                info@cbcghanaltd.com

              </p>


            </div>


          </div>


        </div>





        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">

          © {new Date().getFullYear()} CBC Properties Ghana.
          All rights reserved.

        </div>


      </div>


    </footer>

  );

}