"use client"


import React from "react"
import Link from 'next/link';
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
// import { ModeToggle } from "./ModeToggle";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'


export default function navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="text-xl font-bold text-gray-300">
           Password Manager
          </a>

          {/* Desktop Menu */}
          <div className=" hidden md:flex space-x-6 text-white">
            <NavLink href="/" className=" flex  space-x-10 mr-10"> <UserButton /></NavLink>
            <Link href="/" className="link">Home</Link>
            <Link href="/about" className="link">About</Link>
            <Link href="/contact" className="link">Contact</Link>
          </div>

          {/* Mobile Menu Button */}

          <span className="md:hidden flex justify-around "><Link href="/" className=" flex space-x-10 mr-10"><UserButton/></Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" text-gray-400 hover:text-blue-600">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden  text-white bg-blue-800 shadow-md transition-all duration-300 ${isOpen ? "max-h-60  opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}>

        <MobileNavLink href="/">Home</MobileNavLink>
        <MobileNavLink href="/about">About</MobileNavLink>
        <MobileNavLink href="/contact">Contact</MobileNavLink>
      </div>
    </nav>
  );
}

/* Desktop Navigation Link */
function NavLink({ href, children }) {
  return (
    <a href={href} className="link">
      {children}
    </a>
  );
}


/* Mobile Navigation Link */
function MobileNavLink({ href, children }) {
  return (
    <a href={href} className="block px-4 py-2 text-gray-400 hover:bg-blue-800">
      {children}
    </a>
  );
}
