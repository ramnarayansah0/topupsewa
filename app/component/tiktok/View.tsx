import Price from "../Price";

export default function View(){
    return(
        <>
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
        
        </>
    )
}