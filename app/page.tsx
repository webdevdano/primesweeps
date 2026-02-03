import Footer from './components/Footer';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-red-700 px-2 sm:px-4">
      <Hero />
      <section className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center mt-8 w-full max-w-6xl">
        <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl w-full md:w-96 min-h-[180px] flex flex-col items-start mb-4 md:mb-0">
          <h3 className="text-red-700 font-semibold text-xl sm:text-2xl mb-3">Modern Equipment</h3>
          <p className="text-gray-700 text-base sm:text-lg">Our fleet uses the latest sweeper trucks for maximum efficiency.<br/> 
            Leaving your lot spotless every time.</p>
        </div>
        <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl w-full md:w-96 min-h-[180px] flex flex-col items-start mb-4 md:mb-0">
          <h3 className="text-red-700 font-semibold text-xl sm:text-2xl mb-3">Experienced Team</h3>
          <p className="text-gray-700 text-base sm:text-lg">Trained professionals ensuring every job is done right the first time, and the next time. </p>
        </div>
        <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl w-full md:w-96 min-h-[180px] flex flex-col items-start">
          <h3 className="text-red-700 font-semibold text-xl sm:text-2xl mb-3">Eco-Friendly</h3>
          <p className="text-gray-700 text-base sm:text-lg">We use environmentally responsible methods and proper disposal methods.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
