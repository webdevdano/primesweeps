import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t-2 border-gray-100 py-6 mt-8 sm:mt-12 px-0">
      <div className="w-full text-center px-0">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center items-center text-gray-600 text-sm mb-2">
          <span>Phone: (555) 123-4567</span>
          <span>Email: info@primesweep.com</span>
          <span>123 Main St, Anytown, USA</span>
        </div>
        <span className="text-gray-700 block mb-2">&copy; {new Date().getFullYear()} <span className="text-red-700 font-bold">PrimeSweepServices</span>. All rights reserved.</span>
        <span className="text-gray-500 text-xs">Developed by <a href="https://danielmarinelarena.vercel.app" target="_blank" rel="noopener noreferrer">Daniel Marinelarena</a></span>
      </div>
    </footer>
  );
}
