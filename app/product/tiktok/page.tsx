"use client"
import { useState } from 'react';
import Header from "@/app/component/Header";
import Price from '@/app/component/Price';
import View from '@/app/component/tiktok/View';
import Footer from '@/app/component/Footer';

export default function Tiktok(){
  const [selectedOption, setSelectedOption] = useState('');
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
              <option value="Banana" disabled>Banana</option>
              <option value="Apple">Apple</option>
              <option value="">Banana</option>
              <option value="Mango">Mango</option>
              <option value="Orange">Orange</option>
              <option value="Grapes">Grapes</option>
            </select>
            {selectedOption && <p className="mt-2 text-sm text-gray-600">Selected: {selectedOption}</p>}
          </div>
          </div>

          {/* UC Packages - Only show when Banana is selected */}
          {selectedOption === 'Banana' && (
            <>
              {/* First UC Package Section */}
              <div className="bg-[#336666] dark:bg-[#1a3333] rounded-xl w-full mt-8 p-4">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {/* Left Side */}
                  <div className="col-span-1 flex flex-col gap-4">
                    <button>
                       <Price price="135" diamond="60 UC" />
                    </button>
                    
                    <button>
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

              {/* Second UC Package Section */}
              
            </>
          )}

          {selectedOption === 'Apple'&& (
            <>
            <View></View><div>
                hello world from apple
              </div>
              </>
          )}
          <div className="bg-[#336666] dark:bg-[#1a3333] mt-10 pb-3 rounded-lg shadow-lg">
            <h1 className="text-white font-extrabold text-lg mb-2">Video Link</h1>
            <input 
            
            
               
             
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#336666] dark:focus:ring-[#4a9db3] transition duration-300" 
              placeholder="Tiktok video link"
            />
            
            <h1 className="text-white font-extrabold text-lg mt-4 mb-2">Name</h1>
            <input
            
              type="text" 
             
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#336666] dark:focus:ring-[#4a9db3] transition duration-300" 
              placeholder="Enter your name"
            />
            
            <h1 className="text-white font-extrabold text-lg mt-4 mb-2">WhatsApp Number</h1>
            <input
           
              type="number"
             
              
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#336666] dark:focus:ring-[#4a9db3] transition duration-300" 
              placeholder="Enter WhatsApp number"
            />
          </div>
          <button className="w-30 mt-6 font-extrabold text-white bg-[#336666] dark:bg-[#4a9db3] px-6 py-3 rounded-xl shadow-lg hover:bg-[#255b42] dark:hover:bg-[#367588] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed  text-center ">Buy Now</button>



          


      



           
            </main>
            <Footer/>
        </div>
       
        </>
    )
}