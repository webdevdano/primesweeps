import Footer from './components/Footer';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-red-700">
      <Hero />
      <section className="flex flex-col md:flex-row gap-10 justify-center mt-12">
        <div className="bg-gray-100 rounded-2xl p-12 shadow-xl w-96 min-h-[220px] flex flex-col items-start">
          <h3 className="text-red-700 font-semibold text-2xl mb-4">Modern Equipment</h3>
          <p className="text-gray-700 text-lg">Our fleet uses the latest sweeper trucks for maximum efficiency.<br/> 
            Leaving your lot spotless every time.</p>
        </div>
        <div className="bg-gray-100 rounded-2xl p-12 shadow-xl w-96 min-h-[220px] flex flex-col items-start">
          <h3 className="text-red-700 font-semibold text-2xl mb-4">Experienced Team</h3>
          <p className="text-gray-700 text-lg">Trained professionals ensuring every job is done right the first time, and the next time. </p>
        </div>
        <div className="bg-gray-100 rounded-2xl p-12 shadow-xl w-96 min-h-[220px] flex flex-col items-start">
          <h3 className="text-red-700 font-semibold text-2xl mb-4">Eco-Friendly</h3>
          <p className="text-gray-700 text-lg">We use environmentally responsible methods and proper disposal methods.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
