import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NewNavbar from "@/components/NewNavbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Construck",
  description: "New Generation Construction Solutions",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <div className="relative w-full flex justify-center items-center">
         {/* <Navbar/> */}
         <NewNavbar/>
       </div>
        {children}

        <div className="relative w-full flex justify-center items-center">
         {/* <Navbar/> */}
         <Footer/>
       </div>

       
        </body>

    </html>
  );
}
