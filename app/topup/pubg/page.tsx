"use client"
import { useState } from "react";
import Footer from "../../component/Footer";
import Header from "../../component/Header";
import Price from "../../component/Price";

export default function Page() {
   const [rate,setRate]= useState("Click on Diamond")
   // function
   function addText95(){
      setRate("95 (115💎)")
    }
    function addText190(){
      setRate("190 (240💎)")
    }
    function addText285(){
      setRate("285 (335💎)")
    }
    function addText380(){
      setRate("380 (480💎)")
    }
    function addText475(){
      setRate("475 (610💎)")
    }
    function addText570(){
      setRate("570 (725💎)")
    }
    function addText1425(){
      setRate("1425 (1850💎)")
    }
    function addText1900(){
      setRate("1900 (2530💎)")
    }
  // this is for right part
  function addText110(){
    setRate("110 (60💎)")
  }
  function addText2375(){
   setRate("2375 (3140💎)")
  }
  function addText2850(){
   setRate("2850 (3770💎)")
  }
  function addText3325(){
   setRate("3325 (4380💎)")
  }
  function addText3800(){
   setRate("3800 (5060💎)")
  }
  function addText7600(){
   setRate("7600 (10120💎)")
  }
  function addText220w(){
    setRate("220 (60💎)")
  }
  function addText80w(){
   setRate("80 (60💎)")}

   // fill boxes
   const [gamesid,setGamesid] =useState("");
  const [naam,setNaam] =useState("");
  const [message,setMessage] =useState("");
  
    return (
        <>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header/>
        <main className="mx-4 mt-11">
        <div className="rounded-lg">
            <img className="w-52 rounded-lg" src="/pugb-comp.jpg" alt="Free Fire topup" loading="lazy" />
          </div>
          <div className="mt-10 ml-4">
            <h1 className="font-extrabold text-2xl text-gray-900 dark:text-white">PUBG  Topup</h1>
            <h2 className="text-lg text-gray-700 dark:text-gray-300">Rs 115 - Rs 7000+</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            Experience the ultimate PUBG gaming with our premium UC top-up service. Get instant delivery of PUBG UC at competitive prices. Our secure payment system ensures safe transactions for all your PUBG recharge needs. Whether you're looking for PUBG UC purchase for character skins, weapons, or battle passes, we've got you covered with the best UC top-up deals in NePpal.
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
              <div className="col-span-1 flex flex-col gap-4">
                <button onClick={addText95}>
                   <Price price="95" diamond="115 UC" />
                </button>
                
                <button  onClick={addText190}>
                   <Price price="190" diamond="240 Diamond" />
                </button>

                <button onClick={addText285} >
                   <Price price="285" diamond="335 Diamond" />
                </button>

                <button  onClick={addText380}>
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

          <h1 className="text-center text-gray-900 dark:text-white font-extrabold text-lg mb-2  ">Amount: {rate},{gamesid},{message},{naam}</h1>

          <div className="bg-[#336666] dark:bg-[#1a3333] mt-10 pb-3 rounded-lg shadow-lg">
            <h1 className="text-white font-extrabold text-lg mb-2">Player ID (UID)</h1>
            <input 
            value={gamesid}
            onChange={(e)=>setGamesid(e.target.value)}
              type="number" 
             
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#336666] dark:focus:ring-[#4a9db3] transition duration-300" 
              placeholder="Enter player uid"
            />
            
            <h1 className="text-white font-extrabold text-lg mt-4 mb-2">Name</h1>
            <input
            value={naam}
            onChange={(e)=>setNaam(e.target.value)}
              type="text" 
             
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#336666] dark:focus:ring-[#4a9db3] transition duration-300" 
              placeholder="Enter your name"
            />
            
            <h1 className="text-white font-extrabold text-lg mt-4 mb-2">WhatsApp Number</h1>
            <input
            value={message} 
              type="number"
              onChange={(e)=>setMessage(e.target.value)}
              
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#336666] dark:focus:ring-[#4a9db3] transition duration-300" 
              placeholder="Enter WhatsApp number"
            />
          </div>
          <button className="w-full mt-6 font-extrabold text-white bg-[#336666] dark:bg-[#4a9db3] px-6 py-3 rounded-xl shadow-lg hover:bg-[#255b42] dark:hover:bg-[#367588] transition duration-300">Buy Now</button>
          <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How to purchase PUBG UC  in PUBG  Top Up:</h1>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p>1. First, select the PUBG UC Pack you want to buy.</p>
              <p>2. Next, enter your PUBG Player ID , Name and WhatsApp Number.</p>
              <p>3. After that, check out and choose your payment method (eSEWA, kHALTI).</p>
              <p>4. After payment is made, the UC you purchased will be credited to your account within 5 minutes</p>
            </div>
          </div>
          <Footer/>
        </main>
        </div>
        </>
    )
}