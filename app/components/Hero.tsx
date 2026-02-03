import React from 'react'

export default function Hero() {
  return (
    <section className="relative flex items-center min-h-[500px] py-24 px-0 w-full bg-gradient-to-r from-red-50 to-white overflow-hidden border-y-2 border-gray-200">
      <div className="flex flex-col items-start w-full max-w-7xl mx-auto px-12">
        <h1 className="text-6xl font-bold text-red-700 mb-4 font-poppins-italic-700 leading-tight drop-shadow-lg">PrimeSweepServices</h1>
        <h2 className="text-2xl text-gray-700 mb-8 font-semibold">Professional Street Sweeping & Environmental Services</h2>
        <p className="text-lg text-gray-800 mb-8 max-w-2xl">
          We deliver comprehensive street sweeping and environmental cleaning solutions for municipalities, businesses, and communities. Our modern fleet and expert team ensure cleaner, safer, and more attractive streets. From routine maintenance to emergency response, we’re committed to excellence and sustainability in every sweep.
        </p>
        <ul className="mb-10 text-base text-gray-600 list-disc pl-6">
          <li>State-of-the-art sweeper trucks</li>
          <li>Eco-friendly debris disposal</li>
          <li>Flexible scheduling for your needs</li>
          <li>Fully licensed & insured</li>
        </ul>
        <a href="/about" className="inline-block bg-red-700 text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-red-800 transition text-lg">Learn More</a>
      </div>
    </section>
  )
}
