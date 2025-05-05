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
  function addText55(){
    setPrice("55 (60💎)")
  }
  function addText220(){
    setPrice("220 (60💎)")
  }
  function addText440(){
    setPrice("440 (60💎)")
  }
  function addText770(){
    setPrice("770 (60💎)")
  }
  function addText1100(){
    setPrice("1100 (60💎)")
  }
  function addText4400(){
    setPrice("4400 (5200💎)")
  }
  function addText1100l(){
    setPrice("1100 (60💎)")
  }
  function addText220l(){
    setPrice("220 (60💎)")
  }
// this is for right part
function addText110(){
  setPrice("110 (60💎)")
}
function addText330(){
  setPrice("330 (60💎)")
}
function addText550(){
  setPrice("550 (60💎)")
}
function addText1000(){
  setPrice("1000 (60💎)")
}
function addText2200(){
  setPrice("2200 (60💎)")
}
function addText8800(){
  setPrice("8800 (60💎)")
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
        <meta property="og:url" content="https://yourdomain.com/game" />
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
            <img className="w-auto rounded-lg" src="/freefire.jpg" alt="Free Fire" />
          </div>

          <div className="mt-10 ml-4">
            <h1 className="font-extrabold text-2xl text-gray-900 dark:text-white">Free Fire (Indonesia)</h1>
            <h2 className="text-lg text-gray-700 dark:text-gray-300">Rs 85 - Rs 9,870</h2>
          </div>

          {/* Left and Right Component Placement */}
          <div className="bg-[#336666] dark:bg-[#1a3333] rounded-xl w-full  mt-8 p-4">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Left Side */}
              <div className="col-span-1 flex flex-col gap-4">
                <button onClick={addText55}>
                   <Price price="65" diamond="50 Diamond" />
                </button>
                
                <button onClick={addText220}>
                   <Price price="220" diamond="260 Diamond" />
                </button>

                <button onClick={addText440}>
                   <Price price="440" diamond="520 Diamond" />
                </button>

                <button onClick={addText770}>
                   <Price price="770" diamond="910 Diamond" />
                </button>

                <button onClick={addText1100}>
                   <Price price="1100" diamond="1300 Diamond" />
                </button>

                <button onClick={addText4400}>
                   <Price price="4400" diamond="5200 Diamond" />
                </button>

                <button onClick={addText1100l}>
                   <Price price="1100" diamond="1300 Diamond" />
                </button>

                <button onClick={addText220l}>
                   <Price price="220" diamond="260 Diamond" />
                </button>
                
              </div>

              {/* Right Side */}
              <div className="col-span-1 flex flex-col gap-4">
                <button onClick={addText110}>
                   <Price price="110" diamond="130 Diamond" />
                </button>

               
                <button onClick={addText330}>
                   <Price price="330" diamond="390 Diamond" />
                </button>
                <button onClick={addText550}>
                   <Price price="550" diamond="650 Diamond" />
                </button>
                <button onClick={addText1000}>
                   <Price price="1000" diamond="1180 Diamond" />
                </button>
                <button onClick={addText2200}>
                   <Price price="2200" diamond="2600 Diamond" />
                </button>
                <button onClick={addText8800}>
                   <Price price="8800" diamond="10400 Diamond" />
                </button>
                <button onClick={addText220w}>
                   <Price price="220" diamond="260 Diamond" />
                </button>
                <button onClick={addText80w}>
                   <Price price="80" diamond="95 Diamond" />
                </button>
              </div>
            </div>
          </div>
          <h1>Price: {price}</h1>
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
            <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How to purchase Free Fire BD Diamonds in Game Shop Np:</h1>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p>1. First, select the Diamond Pack denomination.</p>
              <p>2. Next, enter your Free Fire Player ID.</p>
              <p>3. After that, check out and choose your payment method.</p>
              <p>4. After payment is made, the Diamond you purchased will be credited to your account within 5 minutes</p>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
    </>
  );
}
