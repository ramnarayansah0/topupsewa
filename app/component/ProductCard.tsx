import Link from "next/link";
import Image from 'next/image';

interface ProductCardProps {
  img: string;
  name: string;
  price: string;
  Url?: string;
}

export default function ProductCard(props: ProductCardProps) {
    return (
        <div className="bg-amber-400 dark:bg-amber-900 rounded-lg p-4">
            <Image 
                src={props.img.startsWith('/') ? props.img : `/${props.img}`}
                alt={props.name} 
                width={128}
                height={128}
                className="w-32 h-32 mx-auto py-2"
            />
            <div className="description px-5 flex flex-col items-center">
                <h2 className="text-sm font-bold text-center text-gray-900 dark:text-white">{props.name}</h2>
                <p className="price text-xs text-center text-gray-800 dark:text-gray-200">{props.price}</p>
            </div>
            {/* Ensure `props.Url` exists, otherwise fallback to "#" */}
            {props.Url ? (
                <Link href={props.Url} className="mx-8 bg-blue-400 dark:bg-blue-600 p-1 rounded-lg font-semibold text-sm text-center text-white hover:bg-blue-700 dark:hover:bg-blue-800 transition duration-200">
                    Buy Now
                </Link>
            ) : (
                <button className="mx-8 bg-gray-400 dark:bg-gray-600 p-1 rounded-lg font-semibold text-sm text-center text-white dark:text-gray-200 cursor-not-allowed" disabled>
                    Buy Now
                </button>
            )}
        </div>
    );
}
