"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Header(){
    return(
        <>
        <header className="p-5 shadow-lg w-full bg-blue-400 dark:bg-blue-900 flex justify-between">
          <div className="flex gap-2">
            <a href="/" className="learn text-white dark:text-gray-100 hover:text-gray-200 dark:hover:text-gray-300">Home</a>
            <Link href="/game" className="learn text-white dark:text-gray-100 hover:text-gray-200 dark:hover:text-gray-300">Product</Link>
            <Link href="/order" className="learn text-white dark:text-gray-100 hover:text-gray-200 dark:hover:text-gray-300">Order</Link>
          </div>
          <div className="flex gap-2 mx-5">
            <img className="invisible sm:visible" src="/profile.svg" alt="Profile" />
          </div>
        </header>
        </>
    )
}