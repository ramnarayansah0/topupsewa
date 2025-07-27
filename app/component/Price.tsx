interface PriceProps {
  price: string;
  diamond: string;
}

export default function Price(props: PriceProps) {
    return(
        <>
        <div>
            <button 
                className="w-full bg-white dark:bg-gray-800 p-3 text-center flex justify-center gap-1 rounded-lg hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-[#336666] focus:ring-offset-2 dark:focus:ring-[#4a9db3] dark:focus:ring-offset-gray-800 dark:hover:bg-gray-700 transition duration-200"
                type="button"
            >
                <h2 className="text-[11px] text-[#367588] dark:text-[#4a9db3] left-1/2">Rs {props.price}</h2>
                <h1 className="text-gray-900 dark:text-gray-100">{props.diamond}</h1>
                <img className="h-4" src="/diamond.svg" alt="Diamond" />
            </button>
        </div>
        </>
    )
}