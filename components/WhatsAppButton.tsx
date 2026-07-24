"use client";

import { MessageCircle } from "lucide-react";


export default function WhatsAppButton() {

  return (

    <a
      href="https://wa.me/233262898686"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-green-500
        text-white
        w-16
        h-16
        rounded-full
        flex
        items-center
        justify-center
        shadow-2xl
        hover:scale-110
        transition
      "
      aria-label="Chat with CBC Properties on WhatsApp"
    >

      <MessageCircle size={32}/>


    </a>

  );

}