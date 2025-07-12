"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <>
        <header className="p-4 md:p-6 rounded-md shadow-xl w-full bg-gradient-to-r from-blue-400 to-blue-500 dark:from-blue-900 dark:to-blue-800 flex justify-between items-center relative">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
              <img src="/freefire.jpg" alt="Free Fire Logo" className="h-8 w-8 md:h-12 md:w-12 rounded-full shadow-lg" />
              <span className="text-white font-bold text-lg md:text-xl hidden md:block">TopUpSewa</span>
            </Link>
          </div>

          {/* Center - Brand name for mobile */}
          <div className="md:hidden">
            <span className="text-white font-bold text-lg">TopUpSewa</span>
          </div>
            
          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex gap-4 lg:gap-6 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/freefire-diamond-topup" className="text-white hover:text-blue-100 font-semibold text-base lg:text-lg transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10">Games</Link>
            <Link href="/freefire-diamond-topup" className="text-white hover:text-blue-100 font-semibold text-base lg:text-lg transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10">Product</Link>
            <Link href="/freefire-diamond-topup" className="text-white hover:text-blue-100 font-semibold text-base lg:text-lg transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10">Subscribe</Link> 
            <Link href="/order" className="text-white hover:text-blue-100 font-semibold text-base lg:text-lg transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10">Order</Link>
          </nav>

          {/* Right side - Mobile menu button and desktop profile */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Profile */}
            <div className="hidden md:flex items-center">
              <img className="h-8 w-8 cursor-pointer hover:scale-110 transition-transform duration-200" src="/profile.svg" alt="Profile" />
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-gradient-to-b from-blue-400 to-blue-500 dark:from-blue-900 dark:to-blue-800 shadow-lg rounded-b-md z-50 md:hidden">
              <nav className="flex flex-col p-4 space-y-3">
                <Link 
                  href="/freefire-diamond-topup" 
                  className="text-white hover:text-blue-100 font-semibold text-lg transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Games
                </Link>
                <Link 
                  href="/freefire-diamond-topup" 
                  className="text-white hover:text-blue-100 font-semibold text-lg transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Product
                </Link>
                <Link 
                  href="/freefire-diamond-topup" 
                  className="text-white hover:text-blue-100 font-semibold text-lg transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Subscribe
                </Link> 
                <Link 
                  href="/order" 
                  className="text-white hover:text-blue-100 font-semibold text-lg transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Order
                </Link>
                <div className="flex items-center gap-3 px-4 py-3">
                  <img className="h-8 w-8" src="/profile.svg" alt="Profile" />
                  <span className="text-white font-semibold">Profile</span>
                </div>
              </nav>
            </div>
          )}
        </header>
        </>
    )
}