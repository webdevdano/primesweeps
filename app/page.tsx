import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white">
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-red-700 mb-2">PrimeSweep</h1>
        <h2 className="text-xl text-gray-600 mb-6">Professional Street Sweeping Services</h2>
        <p className="text-base text-gray-800 mb-8 max-w-lg mx-auto">
          Clean streets, safe communities. We specialize in thorough, reliable street sweeping using modern sweeper trucks.
        </p>
        <a href="/about" className="inline-block bg-red-700 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-red-800 transition">Learn More</a>
      </section>
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
