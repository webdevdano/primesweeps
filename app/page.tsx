import Footer from './components/Footer';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <Hero />
      <section className="flex flex-col md:flex-row gap-8 justify-center mt-8">
        <div className="bg-gray-100 rounded-xl p-8 shadow w-64">
          <h3 className="text-red-700 font-semibold mb-2">Modern Equipment</h3>
          <p className="text-gray-700">Our fleet uses the latest sweeper trucks for maximum efficiency.</p>
        </div>
        <div className="bg-gray-100 rounded-xl p-8 shadow w-64">
          <h3 className="text-red-700 font-semibold mb-2">Experienced Team</h3>
          <p className="text-gray-700">Trained professionals ensure every job is done right.</p>
        </div>
        <div className="bg-gray-100 rounded-xl p-8 shadow w-64">
          <h3 className="text-red-700 font-semibold mb-2">Eco-Friendly</h3>
          <p className="text-gray-700">We use environmentally responsible methods and disposal.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
