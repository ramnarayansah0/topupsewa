"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Header(){
    return(
        <>
        <header className="p-5 shadow-lg w-full bg-blue-400 flex justify-between ">
          <div className="flex gap-2">
        
          <a href="/" className="learn ">Home</a>
          <Link href="/game"  className="learn">Product</Link>
         
          <Link href="/order"  className="learn">Order</Link>
          </div>
         
          <div className="flex gap-2 mx-5">
        <img className="invisible sm:visible" src="/profile.svg"></img>
       
         
          </div>
        
        </header>
        
        </>
    )
}