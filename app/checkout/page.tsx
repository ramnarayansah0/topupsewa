"use client"
import Link from "next/link";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Uploadq from "../component/upload";

export default function page() {
  return (
    <>
      <div>
        <Header />

        <main className="px-6 py-8">
          {/* QR Code Section */}
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-[#2E8B57]">Please Scan QR for Payment</h1>
            <img className="mx-auto mt-6 w-48 h-48 object-contain rounded-lg shadow-xl" src="/qr.png" alt="QR Code" />
          </div>

          {/* Upload Screenshot Section */}
          <div className="bg-[#336666] mt-12 py-8 px-6 rounded-xl shadow-2xl">
            <h1 className="text-white text-2xl font-extrabold text-center">Upload Screenshot Of Payment</h1>
            <Uploadq/>

            {/* Remark Section */}
            <div className="mt-8">
              <h1 className="text-white text-2xl font-extrabold">Remark</h1>
              <input 
                type="text" 
                className="mt-4 px-6 py-3 w-full sm:w-96 mx-auto rounded-lg border-2 border-gray-300 focus:ring-2 focus:ring-[#2E8B57] transition duration-300"
                placeholder="Enter Remark"
              />
            </div>
          </div>

          {/* Buy Now Button */}
          <Link href="/game">
          
          <button 
            className="font-extrabold text-white bg-[#2E8B57] px-8 py-4 mx-auto mt-12 rounded-xl block text-center hover:bg-[#255b42] transition ease-in-out duration-300 shadow-lg" onClick={()=>alert("sucessfull")}>
            Buy Now
          </button>
          </Link>
        </main>

        <Footer />
      </div>
    </>
  );
}