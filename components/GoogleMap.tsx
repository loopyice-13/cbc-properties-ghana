interface GoogleMapProps {

  location: string;

}



export default function GoogleMap({

  location,

}: GoogleMapProps) {


  const mapUrl = 
    `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;



  return (

    <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-luxury">


      <iframe

        src={mapUrl}

        width="100%"

        height="100%"

        style={{
          border: 0,
        }}

        loading="lazy"

        allowFullScreen

        referrerPolicy="no-referrer-when-downgrade"

      />


    </div>

  );

}