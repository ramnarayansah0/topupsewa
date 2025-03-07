export default function Price(props:any){
    return(
        <>
        <div>
            <div className="bg-[#fff] p-3 text-center flex justify-center gap-1">
                <h2 className="text-[11px] text-[#367588]  left-1/2 ">Rs {props.price}</h2>
                <h1 className="">{props.diamond}</h1>
                <img className="h-4" src="/diamond.svg"></img>
            </div>
        </div>
        </>
    )
}