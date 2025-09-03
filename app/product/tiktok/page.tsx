"use client"
import { useState } from 'react';
import Header from "@/app/component/Header";
import Price from '@/app/component/Price';

import Footer from '@/app/component/Footer';

export default function Tiktok(){

  function view500(){
    setRate('10')
  }
  // API function to submit data
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const handleSubmit = async () => {
   if (!videoslink || !naam || !whatsapp || rate === "Click on UC" ) {
     setSubmitStatus("Please fill all fields and select a package");
     return;
   }

   setIsLoading(true);
   setSubmitStatus("");

   try {
     const response = await fetch('/api/tiktok', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         videoslink: videoslink,
         naam: naam,
         whatsapp: whatsapp,
         rate: rate
       }),
     });

     if (response.ok) {
       setSubmitStatus("Order submitted successfully!");
       // Clear form
       setVideoslink("");
       setNaam("");
       setWhatsapp("");
       setRate("Click on UC");
     } else {
       setSubmitStatus("Failed to submit order. Please try again.");
     }
      // Navigate to checkout page
   window.location.href = "/freefiretopup";
   } catch {
     setSubmitStatus("Network error. Please check your connection.");
   } finally {
     setIsLoading(false);
   }
 };

  //this for needed data
  const [videoslink,setVideoslink] =useState("");
  const [naam,setNaam] =useState("");
  const [whatsapp,setWhatsapp] =useState("");

const [rate,setRate]= useState("Select Price");
  const [selectedOption, setSelectedOption] = useState("Views");
    return(
        <>
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header/>
            <main className="mx-4 mt-11">
               
                <div className="mt-10 ml-4">
            <h1 className="font-extrabold text-2xl text-gray-900 dark:text-white">PUBG  Topup</h1>
            <h2 className="text-lg text-gray-700 dark:text-gray-300">Rs 135 - Rs 12950+</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            Experience the ultimate PUBG gaming with our premium UC top-up service. Get instant delivery of PUBG UC at competitive prices. Our secure payment system ensures safe transactions for all your PUBG recharge needs. Whether you&apos;re looking for PUBG UC purchase for character skins, weapons, or battle passes, we&apos;ve got you covered with the best UC top-up deals in Nepal.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm">Instant Delivery</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm">Secure Payment</span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 rounded-full text-sm">24/7 Support</span>
          </div>
          
          <div className="text-center my-2">
            <h3 className="text-lg font-semibold mb-4">Select Package Type:</h3>
            <select 
              value={selectedOption} 
              onChange={(e) => setSelectedOption(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select an option</option>
              <option value="Views" >Views</option>
              <option value="Likes">Likes</option>
              
              <option disabled value="Mango">Flowers</option>
              <option disabled value="Orange">premium</option>
              
            </select>
            {selectedOption && <p className="mt-2 text-sm text-gray-600">Selected: {selectedOption}</p>}
          </div>
          </div>

          {/* UC Packages - Only show when Banana is selected */}
          {selectedOption === 'Views' && (
            <>
              {/* First Views Package Section */}
              <div className="bg-[#336666] dark:bg-[#1a3333] rounded-xl w-full mt-8 p-4">
                <div className="grid grid-cols-2 gap-4 h-full">
                 
                  {/* Left Side */}
                  <div className="col-span-1 flex flex-col gap-4">
                    <button onClick={view500}>
                       <Price price="135" diamond="60 views" />
                    </button>
                    
                    <button >
                       <Price price="285" diamond="120 UC" />
                    </button>

                    <button>
                       <Price price="410" diamond="180 UC" />
                    </button>

                    <button>
                       <Price price="530" diamond="240 UC" />
                    </button>

                    <button>
                       <Price price="660" diamond="325 UC" />
                    </button>

                    <button>
                       <Price price="810" diamond="385 UC" />
                    </button>

                    <button>
                       <Price price="915" diamond="445 UC" />
                    </button>

                    <button>
                       <Price price="1330" diamond="660 UC" />
                    </button>
                  </div>

                  {/* Right Side */}
                  <div className="col-span-1 flex flex-col gap-4">
                    <button>
                       <Price price="1460" diamond="720 UC" />
                    </button>

                    <button>
                       <Price price="1990" diamond="985 UC" />
                    </button>
                    <button>
                       <Price price="3420" diamond="1800" />
                    </button>
                    <button>
                       <Price price="6540" diamond="3850 UC" />
                    </button>
                    <button>
                       <Price price="12950" diamond="8100" />
                    </button>
                    <button>
                       <Price price="not fix" diamond="Offfer UC" />
                    </button>
                    <button>
                       <Price price="not fix" diamond="Monthly" />
                    </button>
                    <button>
                       <Price price="not fix" diamond=" Weekly" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {selectedOption === 'Likes'&& (
            <>
            {/* First likes Package Section */}
            <div className="bg-[#336666] dark:bg-[#1a3333] rounded-xl w-full mt-8 p-4">
                <div className="grid grid-cols-2 gap-4 h-full">
                 
                  {/* Left Side */}
                  <div className="col-span-1 flex flex-col gap-4">
                    <button onClick={view500}>
                       <Price price="135" diamond="60 likes" />
                    </button>
                    
                    <button >
                       <Price price="285" diamond="120 UC" />
                    </button>

                    <button>
                       <Price price="410" diamond="180 UC" />
                    </button>

                    <button>
                       <Price price="530" diamond="240 UC" />
                    </button>

                    <button>
                       <Price price="660" diamond="325 UC" />
                    </button>

                    <button>
                       <Price price="810" diamond="385 UC" />
                    </button>

                    <button>
                       <Price price="915" diamond="445 UC" />
                    </button>

                    <button>
                       <Price price="1330" diamond="660 UC" />
                    </button>
                  </div>

                  {/* Right Side */}
                  <div className="col-span-1 flex flex-col gap-4">
                    <button>
                       <Price price="1460" diamond="720 UC" />
                    </button>

                    <button>
                       <Price price="1990" diamond="985 UC" />
                    </button>
                    <button>
                       <Price price="3420" diamond="1800" />
                    </button>
                    <button>
                       <Price price="6540" diamond="3850 UC" />
                    </button>
                    <button>
                       <Price price="12950" diamond="8100" />
                    </button>
                    <button>
                       <Price price="not fix" diamond="Offfer UC" />
                    </button>
                    <button>
                       <Price price="not fix" diamond="Monthly" />
                    </button>
                    <button>
                       <Price price="not fix" diamond=" Weekly" />
                    </button>
                  </div>
                </div>
              </div>
              </>
          )}
          <h1 className="text-center text-gray-900 dark:text-white font-extrabold text-lg mb-2  ">Amount: {rate}</h1>
          <div className="bg-[#336666] dark:bg-[#1a3333] mt-10 pb-3 rounded-lg shadow-lg">
            <h1 className="text-white font-extrabold text-lg mb-2">Video Link</h1>
            <input 
             value={videoslink}
             onChange={(e)=>setVideoslink(e.target.value)}
               type="text" 
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#336666] dark:focus:ring-[#4a9db3] transition duration-300" 
              placeholder="Tiktok video link"
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
           value={whatsapp}
              type="number"
             onChange={(e)=>setWhatsapp(e.target.value)}
              
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#336666] dark:focus:ring-[#4a9db3] transition duration-300" 
              placeholder="Enter WhatsApp number"
            />
          </div>
          <button className="w-30 mt-6 font-extrabold text-white bg-[#336666] dark:bg-[#4a9db3] px-6 py-3 rounded-xl shadow-lg hover:bg-[#255b42] dark:hover:bg-[#367588] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed  text-center "
          onClick={handleSubmit}
          disabled={isLoading}
          >{isLoading ? "Submitting..." : "Buy Now"}</button>
          {submitStatus && (
            <div className={`mt-4 p-3 rounded-lg text-center ${
              submitStatus.includes("successfully") 
                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200" 
                : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200"
            }`}>
              {submitStatus}
            </div>
          )}
         
            </main>
            <Footer/>
        </div>
       
        </>
    )
}