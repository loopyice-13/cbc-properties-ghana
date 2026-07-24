import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";


export default function ContactSection() {

  return (

    <section className="py-20 bg-primary text-white">

      <div className="container-custom">


        <div className="grid md:grid-cols-2 gap-12">


          {/* Contact Details */}

          <div>

            <p className="text-secondary uppercase tracking-widest font-semibold">
              Contact CBC Properties
            </p>


            <h2 className="text-4xl font-bold mt-4">
              Find Your Next Property With Confidence
            </h2>


            <p className="text-gray-300 mt-5 leading-relaxed">
              Speak with CBC Properties Ghana for property sales,
              land opportunities, rentals, management and real estate
              consultation.
            </p>



            <div className="mt-8 space-y-5">


              <div className="flex items-center gap-4">

                <Phone className="text-secondary"/>

                <div>
                  <p>Office</p>
                  <p className="text-gray-300">
                    +233 30 393 5313
                  </p>
                </div>

              </div>



              <div className="flex items-center gap-4">

                <MessageCircle className="text-secondary"/>

                <div>
                  <p>WhatsApp</p>
                  <p className="text-gray-300">
                    +233 26 289 8686
                  </p>
                </div>

              </div>




              <div className="flex items-center gap-4">

                <Mail className="text-secondary"/>

                <div>
                  <p>Email</p>
                  <p className="text-gray-300">
                    info@cbcghanaltd.com
                  </p>
                </div>

              </div>




              <div className="flex items-center gap-4">

                <MapPin className="text-secondary"/>

                <div>
                  <p>Office Address</p>
                  <p className="text-gray-300">
                    3rd Floor – GM Plaza,
                    Okponglo, La-Bawaleshie Road,
                    East Legon, Accra
                  </p>
                </div>

              </div>


            </div>




            <a
              href="https://wa.me/233262898686"
              target="_blank"
              className="inline-flex items-center gap-3 mt-8 bg-secondary px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >

              <MessageCircle />

              Chat On WhatsApp

            </a>


          </div>






          {/* Google Map + Form */}

          <div className="space-y-6">


            <div className="rounded-3xl overflow-hidden h-72">

              <iframe
                src="https://www.google.com/maps?q=GM+Plaza+Okponglo+Accra+Ghana&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />

            </div>




            <div className="bg-white text-gray-800 p-8 rounded-3xl">


              <h3 className="text-2xl font-bold text-primary">
                Request A Viewing
              </h3>


              <form className="mt-6 space-y-4">


                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border p-4 rounded-xl"
                />


                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border p-4 rounded-xl"
                />


                <textarea
                  placeholder="Property you are interested in..."
                  rows={4}
                  className="w-full border p-4 rounded-xl"
                />


                <button
                  className="w-full bg-primary text-white py-4 rounded-xl"
                >
                  Send Request
                </button>


              </form>


            </div>


          </div>


        </div>


      </div>


    </section>

  );

}