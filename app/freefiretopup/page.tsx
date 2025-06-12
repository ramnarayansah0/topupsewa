"use client"
import Link from "next/link";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Uploadq from "../component/upload";
import Head from "next/head";

export default function page() {
  return (
    <>
    <Head>
        <title>Gaming Top-Up Hub | Free Fire & Mobile Legends Diamond Top-Up</title>
        <meta name="description" content="Get instant Free Fire and Mobile Legends diamonds at the best prices in Nepal. Fast, secure and reliable top-up service with 24/7 support. Best rates guaranteed!" />
        <meta name="keywords" content="Free Fire topup Nepal, FF diamond topup, Mobile Legends topup, MLBB diamonds, gaming topup service, Garena Free Fire recharge, cheap FF diamonds, secure game topup" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Gaming Top-Up Hub | Free Fire & Mobile Legends Diamond Top-Up" />
        <meta property="og:description" content="Your trusted source for Free Fire and Mobile Legends diamond top-ups. Best prices in Nepal with instant delivery and secure payments." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}`} />
      </Head>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header />

        <main className="px-6 py-8">
          {/* QR Code Section */}
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-[#2E8B57] dark:text-[#4CAF50]">Please Scan QR for Payment</h1>
            <img className="mx-auto mt-6 w-60  object-contain rounded-lg shadow-xl" src="/onlyQR.jpg" alt="freefire topup qr" />
          </div>

          {/* Upload Screenshot Section */}
          <div className="bg-gradient-to-br from-[#336666] to-[#1a3333] dark:from-[#1a3333] dark:to-[#0d1a1a] mt-12 py-10 px-8 rounded-xl shadow-2xl border border-[#4d9999]/20">
            <div className="max-w-md mx-auto">
              <h1 className="text-white text-2xl font-extrabold text-center mb-6 bg-[#4d9999]/20 py-3 px-4 rounded-lg">
                Upload Screenshot Of Payment
              </h1>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <Uploadq/>
              </div>
            </div>

            {/* Remark Section */}
            <div className="mt-8 flex flex-col items-center">
              <h1 className="text-white text-2xl font-extrabold text-center">Remark Or Payment mobile number</h1>
              <input 
                type="text" 
                className="mt-4 px-6 py-3 w-full sm:w-96 rounded-lg border-2 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#2E8B57] dark:focus:ring-[#4CAF50] transition duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Enter Remark Or Payment mobile number"
              />
            </div>
          </div>

          {/* Buy Now Button */}
          <Link href="/">
            <button 
              className="font-extrabold text-white bg-[#2E8B57] dark:bg-[#4CAF50] px-8 py-4 mx-auto mt-12 rounded-xl block text-center hover:bg-[#255b42] dark:hover:bg-[#3d8b40] transition ease-in-out duration-300 shadow-lg"
              onClick={() => {
                const dialog = document.createElement('dialog');
                dialog.innerHTML = `
                  <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
                    <h3 class="text-xl font-bold text-green-600 dark:text-green-400 mb-4">Order Successful!</h3>
                    <p class="text-gray-700 dark:text-gray-300">Your order has been placed successfully.</p>
                    <button class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onclick="this.closest('dialog').close()">Close</button>
                  </div>
                `;
                document.body.appendChild(dialog);
                dialog.showModal();
              }}
            >
              Buy Now
            </button>
          </Link>
        </main>

        <Footer />
      </div>
    </>
  );
}