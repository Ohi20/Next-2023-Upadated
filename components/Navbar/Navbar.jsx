'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      {/* Logo container */}
      <div className="flex items-center  mr-6 lg:mr-72">
        <Image
          src=""
          className="h-[120px] w-[120px] object-contain"
          alt="Logo"
        />
      </div>

      {/* Mobile Menu Button */}
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? 'hidden' : 'block'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? 'block' : 'hidden'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>

      {/* Links container */}
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto gap-8 ${
          isOpen ? 'block border border-1 p-2 lg:border-none' : 'hidden'
        }`}
      >

<DarkModeToggle />

        <div className="text-sm gap-4 light:text-[#12100E] dark:text-[#8693AB] font-bold lg:font-medium lg:flex-grow">
          <Link
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 lg:text-xl mr-4"
          >
            Home
          </Link>
          <Link
            href="/blogs"
            className="block mt-4 lg:inline-block lg:mt-0 lg:text-xl mr-4"
          >
            Blogs
          </Link>
          <Link
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0 lg:text-xl mr-4"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 lg:text-xl mr-4"
          >
            Contact
          </Link>
          <Link
            href="/dashboard"
            className="block mt-4 lg:inline-block lg:mt-0 lg:text-xl mr-4"
          >
            Dashboard
          </Link>

          <button className="p-1 outline-none bg-[#12100E] text-[#D7D7D7]  pointer rounded hover:text-[#EFE9F4
] my-2">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;