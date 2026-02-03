import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t-2 border-gray-100 py-6 mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 justify-center items-center text-gray-600 text-sm">
          <span>Phone: (555) 123-4567</span>
          <span>Email: info@primesweep.com</span>
          <span>123 Main St, Anytown, USA</span>
        </div>
          <span className="text-gray-700 block mb-2">&copy; {new Date().getFullYear()} <span className="text-red-700 font-bold">PrimeSweep</span>. All rights reserved.</span>
          <span className="text-gray-500 text-xs">Developed by <a href="https://danielmarinelarena.vercel.app" target="_blank" rel="noopener noreferrer">Daniel Marinelarena</a></span>
      </div>
    </footer>
  );
}
