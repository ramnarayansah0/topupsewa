"use client"
import Price from "../component/Price";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useState } from "react";
import Link from "next/link";
import Head from 'next/head';

// Update API URL to use port 3000
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export default function page() {
  const [price,setPrice]=useState("Click On Diamond")
  //this is for left part
  function addText95(){
    setPrice("95 (115💎)")
  }
  function addText190(){
    setPrice("190 (240💎)")
  }
  function addText285(){
    setPrice("285 (335💎)")
  }
  function addText380(){
    setPrice("380 (480💎)")
  }
  function addText475(){
    setPrice("475 (610💎)")
  }
  function addText570(){
    setPrice("570 (725💎)")
  }
  function addText1425(){
    setPrice("1425 (1850💎)")
  }
  function addText1900(){
    setPrice("1900 (2530💎)")
  }
// this is for right part
function addText110(){
  setPrice("855 (1090💎)")
}
function addText2375(){
  setPrice("2375 (3140💎)")
}
function addText2850(){
  setPrice("2850 (3770💎)")
}
function addText3325(){
  setPrice("3325 (4380💎)")
}
function addText3800(){
  setPrice("3800 (5060💎)")
}
function addText7600(){
  setPrice("7600 (10120💎)")
}
function addText220w(){
  setPrice("220 (60💎)")
}
function addText80w(){
  setPrice("80 (60💎)")}

  //
  const [playerid,setPlayerid] =useState("");
  const [names,setName] =useState("");
  const [whatsapp,setWhatsapp] =useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

// api for post
const addProduct = async () => {
  try {
    setIsLoading(true);
    setError("");
    
    if (!playerid || !names || !whatsapp || price === "Click On Diamond") {
      setError("Please fill in all fields and select a price");
      return;
    }

    console.log('Sending request to:', `${API_URL}/api/users`);
    const response = await fetch(`${API_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price, playerid, names, whatsapp })
    });

    const data = await response.json();
    console.log('Response:', data);

    if (!response.ok) {
      throw new Error(data.error || "Failed to create order");
    }

    // Clear form after successful submission
    setPlayerid("");
    setName("");
    setWhatsapp("");
    setPrice("Click On Diamond");
    
    // Navigate to checkout page
    window.location.href = "/freefiretopup";
  } catch (err: any) {
    console.error('Error:', err);
    setError(err.message || "An error occurred while creating the order");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <>
      <Head>
        <title>Free Fire Top Up - Buy Diamonds at Best Price | Game Shop</title>
        <meta name="description" content="Buy Free Fire diamonds at the best prices. Instant top-up service for Free Fire Indonesia. Get 50 to 10400 diamonds with secure payment methods." />
        <meta name="keywords" content="free fire top up, free fire diamonds, free fire indonesia, free fire diamond purchase, free fire recharge, free fire diamond price" />
        <meta property="og:title" content="Free Fire Top Up - Buy Diamonds at Best Price" />
        <meta property="og:description" content="Get Free Fire diamonds instantly at competitive prices. Secure payment methods and fast delivery." />
        <meta property="og:image" content="/freefire.jpg" />
        <meta property="og:url" content="https://topupsewa.games/freefire-diamond-topup" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Free Fire Diamonds",
            "description": "Purchase Free Fire diamonds for your gaming account",
            "brand": {
              "@type": "Brand",
              "name": "Free Fire"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "65",
              "highPrice": "8800",
              "offerCount": "16"
            }
          })}
        </script>
      </Head>
      <div className="min-h-screen bg-white dark:bg-gray-900">
       <Header/>
       

        <main className="mx-4 mt-11">
          <div className="rounded-lg">
            <img className="w-52 rounded-lg" src="/topupfree.jpg" alt="Free Fire topup" loading="lazy" />
          </div>

          <div className="mt-10 ml-4">
            <h1 className="font-extrabold text-2xl text-gray-900 dark:text-white">Free Fire Topup</h1>
            <h2 className="text-lg text-gray-700 dark:text-gray-300">Rs 115 - Rs 7000+</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            Experience the ultimate Free Fire gaming with our premium diamond top-up service. Get instant delivery of Free Fire diamonds at competitive prices. Our secure payment system ensures safe transactions for all your Free Fire recharge needs. Whether you're looking for Free Fire diamond purchase for character skins, weapons, or battle passes, we've got you covered with the best Free Fire top-up deals in Ne.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">Instant Delivery</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm">Secure Payment</span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm">24/7 Support</span>
          </div>
          </div>

          {/* Left and Right Component Placement */}
          <div className="bg-[#336666] dark:bg-[#1a3333] rounded-xl w-full  mt-8 p-4">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Left Side */}
              <div className="col-span-1 flex flex-col gap-4  ">
                <button onClick={addText95}>
                   <Price price="95" diamond="115 Diamond" />
                </button>
                
                <button onClick={addText190}>
                   <Price price="190" diamond="240 Diamond" />
                </button>

                <button onClick={addText285}>
                   <Price price="285" diamond="335 Diamond" />
                </button>

                <button onClick={addText380}>
                   <Price price="380" diamond="480 Diamond" />
                </button>

                <button onClick={addText475}>
                   <Price price="475" diamond="610 Diamond" />
                </button>

                <button onClick={addText570}>
                   <Price price="570" diamond="725 Diamond" />
                </button>

                <button onClick={addText1425}>
                   <Price price="1425" diamond="1850 Diamond" />
                </button>

                <button onClick={addText1900}>
                   <Price price="1900" diamond="2530 Diamond" />
                </button>
                
              </div>

              {/* Right Side */}
              <div className="col-span-1 flex flex-col gap-4">
                <button onClick={addText110}>
                   <Price price="855" diamond="1090 Diamond" />
                </button>

               
                <button onClick={addText2375}>
                   <Price price="2375" diamond="3140 Diamond" />
                </button>
                <button onClick={addText2850}>
                   <Price price="2850" diamond="3770 Diamond" />
                </button>
                <button onClick={addText3325}>
                   <Price price="3325" diamond="4380 Diamond" />
                </button>
                <button onClick={addText3800}>
                   <Price price="3800" diamond="5060 Diamond" />
                </button>
                <button onClick={addText7600}>
                   <Price price="7600" diamond="10120 Diamond" />
                </button>
                <button onClick={addText220w}>
                   <Price price="not fix" diamond="Monthly" />
                </button>
                <button onClick={addText80w}>
                   <Price price="not fix" diamond=" Weekly" />
                </button>
              </div>
            </div>
          </div>
          <h1 className="text-center text-gray-900 dark:text-white font-extrabold text-lg mb-2  ">Price: {price}</h1>
          <div className="bg-[#336666] dark:bg-[#1a3333] mt-10 pb-3 rounded-lg shadow-lg">
            <h1 className="text-white font-extrabold text-lg mb-2">Player ID (UID)</h1>
            <input 
              type="number" 
              value={playerid} 
              onChange={(e)=>setPlayerid(e.target.value)} 
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#336666] dark:focus:ring-[#4a9db3] transition duration-300" 
              placeholder="Enter player uid"
            />
            
            <h1 className="text-white font-extrabold text-lg mt-4 mb-2">Name</h1>
            <input 
              type="text" 
              value={names} 
              onChange={(e)=>setName(e.target.value)} 
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#336666] dark:focus:ring-[#4a9db3] transition duration-300" 
              placeholder="Enter your name"
            />
            
            <h1 className="text-white font-extrabold text-lg mt-4 mb-2">WhatsApp Number</h1>
            <input 
              type="number" 
              value={whatsapp} 
              onChange={(e)=>setWhatsapp(e.target.value)} 
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#336666] dark:focus:ring-[#4a9db3] transition duration-300" 
              placeholder="Enter WhatsApp number"
            />
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-800 text-red-700 dark:text-red-200 rounded-lg">
              {error}
            </div>
          )}

          <button 
            onClick={addProduct} 
            disabled={isLoading}
            className={`w-full mt-6 font-extrabold text-white bg-[#336666] dark:bg-[#4a9db3] px-6 py-3 rounded-xl shadow-lg hover:bg-[#255b42] dark:hover:bg-[#367588] transition duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Processing...' : 'Buy Now'}
          </button>

          <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How to purchase Free Fire BD Diamonds in Free Fire Top Up:</h1>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p>1. First, select the Diamond Pack you want to buy.</p>
              <p>2. Next, enter your Free Fire Player UID , Name and WhatsApp Number.</p>
              <p>3. After that, check out and choose your payment method (eSEWA, kHALTI).</p>
              <p>4. After payment is made, the Diamond you purchased will be credited to your account within 5 minutes</p>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </>
  );
}
