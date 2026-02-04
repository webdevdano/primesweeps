import React from 'react'

export default function Hero() {
  return (
    <section className="relative flex items-center min-h-[400px] sm:min-h-[500px] py-10 sm:py-24 px-0 w-full bg-gradient-to-r from-red-50 to-white overflow-hidden">
      <div className="flex flex-col md:flex-row items-center w-full max-w-7xl mx-auto gap-6 md:gap-12 px-2 sm:px-4">
        <div className="flex flex-col items-start flex-1 w-full">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-red-700 mb-3 sm:mb-4 font-poppins-italic-700 leading-tight drop-shadow-lg">PrimeSweepServices</h1>
          <h2 className="text-lg sm:text-2xl text-gray-700 mb-4 sm:mb-8 font-semibold">Professional Street Sweeping & Environmental Services</h2>
          <p className="text-base sm:text-lg text-gray-800 mb-4 sm:mb-8 max-w-xl sm:max-w-2xl">
            We deliver comprehensive street sweeping and environmental cleaning solutions for municipalities, businesses, and communities. Our modern fleet and expert team ensure cleaner, safer, and more attractive streets. From routine maintenance to emergency response, we’re committed to excellence and sustainability in every sweep.
          </p>
          <ul className="mb-6 sm:mb-10 text-sm sm:text-base text-gray-600 list-disc pl-5 sm:pl-6">
            <li>State-of-the-art sweeper trucks</li>
            <li>Eco-friendly debris disposal</li>
            <li>Flexible scheduling for your needs</li>
            <li>Fully licensed & insured</li>
          </ul>
          <a href="/about" className="inline-block bg-red-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-10 rounded-full shadow-lg hover:bg-red-800 transition text-base sm:text-lg">Learn More</a>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 flex-1 w-full items-end justify-center max-w-xl sm:max-w-2xl mt-8 md:mt-0">
          <img src="/Images/SweeperTruck1.jpg" alt="Sweeper Truck 1" className="rounded-2xl shadow-2xl w-full h-40 sm:h-[320px] object-cover border border-gray-200" />
          <img src="/Images/SweeperTruck2.jpg" alt="Sweeper Truck 2" className="rounded-2xl shadow-xl w-full h-32 sm:h-[240px] object-cover border border-gray-200 ml-auto" />
        </div>
      </div>
    </section>
  )
}
