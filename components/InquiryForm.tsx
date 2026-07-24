"use client";

import { useState } from "react";


export default function InquiryForm() {


  const [form, setForm] = useState({

    name: "",

    phone: "",

    email: "",

    property: "",

    message: "",

  });



  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {


    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });


  }



  function sendWhatsApp() {


    const text = `

Hello CBC Properties Ghana,

Name: ${form.name}

Phone: ${form.phone}

Email: ${form.email}

Property Interest: ${form.property}

Message:
${form.message}

    `;



    const url =
      `https://wa.me/233262898686?text=${encodeURIComponent(text)}`;



    window.open(url, "_blank");


  }



  return (

    <section className="bg-gray-50 rounded-3xl p-8 shadow-luxury">


      <h2 className="text-3xl font-bold text-primary">

        Send Property Enquiry

      </h2>



      <p className="text-gray-600 mt-3">

        Tell us what property you are interested in and our team will contact you.

      </p>





      <div className="grid md:grid-cols-2 gap-5 mt-8">


        <input

          name="name"

          placeholder="Full Name"

          value={form.name}

          onChange={handleChange}

          className="p-4 rounded-xl border"

        />



        <input

          name="phone"

          placeholder="Phone Number"

          value={form.phone}

          onChange={handleChange}

          className="p-4 rounded-xl border"

        />




        <input

          name="email"

          placeholder="Email Address"

          value={form.email}

          onChange={handleChange}

          className="p-4 rounded-xl border"

        />





        <input

          name="property"

          placeholder="Property Interested In"

          value={form.property}

          onChange={handleChange}

          className="p-4 rounded-xl border"

        />



      </div>





      <textarea

        name="message"

        placeholder="Your message"

        value={form.message}

        onChange={handleChange}

        rows={5}

        className="w-full mt-5 p-4 rounded-xl border"

      />






      <button

        onClick={sendWhatsApp}

        className="mt-6 bg-secondary text-white px-8 py-4 rounded-xl font-semibold"

      >

        Send Enquiry

      </button>



    </section>

  );

}