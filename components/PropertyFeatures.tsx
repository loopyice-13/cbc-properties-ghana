import {
  ShieldCheck,
  Car,
  Waves,
  Sofa,
  MapPin,
  Wifi,
  Dumbbell,
  Trees,
} from "lucide-react";


const icons: Record<string, React.ReactNode> = {

  "24/7 Security": <ShieldCheck />,

  "Private Parking": <Car />,

  "Swimming Pool": <Waves />,

  "Furnished": <Sofa />,

  "Prime Location": <MapPin />,

  "High Speed Internet": <Wifi />,

  "Fitness Centre": <Dumbbell />,

  "Garden Area": <Trees />,

};



export default function PropertyFeatures({

  features,

}: {

  features: string[];

}) {


  return (

    <section className="mt-12">


      <h3 className="text-3xl font-bold text-primary">

        Property Features

      </h3>



      <div className="grid md:grid-cols-2 gap-5 mt-6">


        {features.map((feature)=>(


          <div

            key={feature}

            className="
              flex
              items-center
              gap-4
              bg-gray-50
              p-5
              rounded-xl
            "

          >


            <div className="text-secondary">

              {icons[feature] || <ShieldCheck />}

            </div>



            <span className="font-medium text-gray-700">

              {feature}

            </span>


          </div>


        ))}


      </div>


    </section>

  );

}