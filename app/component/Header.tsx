"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Header(){
    return(
        <>
        <header className="p-5 shadow-lg w-full bg-blue-400 dark:bg-blue-900 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/freefire.jpg" alt="Free Fire Logo" className="h-10 w-10 rounded-full" />
            <div className="flex gap-6">
              <a href="/" className="text-white dark:text-gray-100 hover:text-gray-200 dark:hover:text-gray-300 font-medium text-lg transition-colors duration-200">Home</a>
              <Link href="/freefire-diamond-topup" className="text-white dark:text-gray-100 hover:text-gray-200 dark:hover:text-gray-300 font-medium text-lg transition-colors duration-200">Product</Link>
              <Link href="/order" className="text-white dark:text-gray-100 hover:text-gray-200 dark:hover:text-gray-300 font-medium text-lg transition-colors duration-200">Order</Link>
            </div>
          </div>
          <div className="flex gap-2 mx-5">
            <img className="invisible sm:visible" src="/profile.svg" alt="Profile" />
          </div>
        </header>
        </>
    )
}