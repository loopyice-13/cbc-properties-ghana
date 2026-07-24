import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import WhatsAppButton from "@/components/WhatsAppButton";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});



export const metadata: Metadata = {

  title: {
    default: "CBC Properties Ghana | Premium Real Estate Solutions",
    template: "%s | CBC Properties Ghana",
  },


  description:
    "CBC Properties Ghana provides professional real estate services including property sales, rentals, property management, land acquisition and real estate consulting in Ghana.",


  keywords: [
    "CBC Properties Ghana",
    "real estate Ghana",
    "houses for sale in Accra",
    "property for sale Ghana",
    "land for sale Ghana",
    "East Legon properties",
    "Accra real estate",
  ],


  authors: [
    {
      name: "CBC Properties Ghana",
    },
  ],


  openGraph: {

    title:
      "CBC Properties Ghana | Find Your Dream Property",


    description:
      "Discover premium homes, commercial properties and investment opportunities across Ghana.",


    type: "website",


    locale:
      "en_GH",

  },


  robots: {

    index: true,

    follow: true,

  },


};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html lang="en">

      <body className={inter.className}>

        {children}

        <WhatsAppButton />

      </body>

    </html>

  );

}