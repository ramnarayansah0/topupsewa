import Link from "next/link";

export default function ProductCard(props: any) {
    return (
        <div className="bg-amber-400 rounded-lg p-4">
            <img 
                src={props.img} 
                alt={props.name} 
                className="w-32 h-32 mx-auto py-2"
            />
            <div className="description px-5 flex flex-col items-center">
                <h2 className="text-sm font-bold text-center">{props.name}</h2>
                <p className="price text-xs text-center">{props.price}</p>
            </div>
            {/* Ensure `props.Url` exists, otherwise fallback to "#" */}
            {props.Url ? (
                <Link href={props.Url} className="mx-8 bg-blue-400 p-1 rounded-lg font-semibold text-sm text-center hover:bg-blue-700 transition duration-200">
                    Buy Now
                </Link>
            ) : (
                <button className="mx-8  bg-gray-400 p-1 rounded-lg font-semibold text-sm text-center cursor-not-allowed" disabled>
                    Buy Now
                </button>
            )}
        </div>
    );
}
