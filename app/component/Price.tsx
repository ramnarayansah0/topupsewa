export default function Price(props:any){
    return(
        <>
        <div>
            <div className="bg-white dark:bg-gray-800 p-3 text-center flex justify-center gap-1 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-200">
                <h2 className="text-[11px] text-[#367588] dark:text-[#4a9db3] left-1/2">Rs {props.price}</h2>
                <h1 className="text-gray-900 dark:text-gray-100">{props.diamond}</h1>
                <img className="h-4" src="/diamond.svg" alt="Diamond" />
            </div>
        </div>
        </>
    )
}