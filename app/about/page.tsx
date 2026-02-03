export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-12">
      <h1 className="text-3xl font-bold text-red-700 mb-4">About PrimeSweep</h1>
      <p className="text-base text-gray-800 mb-8 max-w-2xl text-center">
        PrimeSweep is a professional street sweeping business specializing in keeping roads, parking lots, and industrial areas clean using state-of-the-art sweeper trucks. Our experienced team is dedicated to providing reliable, efficient, and environmentally friendly services for communities and businesses.
      </p>
      <section className="mb-8 w-full max-w-xl">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Our Mission</h2>
        <p className="text-gray-700">
          To deliver top-quality street sweeping solutions that enhance safety, appearance, and sustainability for our clients.
        </p>
      </section>
      <section className="w-full max-w-xl">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Modern sweeper trucks</li>
          <li>Experienced operators</li>
          <li>Flexible scheduling</li>
          <li>Eco-friendly practices</li>
        </ul>
      </section>
    </main>
  );
}
