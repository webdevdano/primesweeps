'use client';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

export default function About() {
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Email received! We will get back to you soon.');
        form.reset();
      } else {
        toast.error('Failed to send email. Please try again.');
      }
    } catch {
      toast.error('Failed to send email. Please try again.');
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-red-700 px-0 py-0">
      {/* Hero Section */}
      <section className="w-full bg-linear-to-r from-red-50 to-white border-b-2 border-gray-100 py-12 sm:py-20 px-2 sm:px-4 flex flex-col items-center justify-center">
        <div className="max-w-3xl text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-red-700 mb-4 sm:mb-6 font-poppins-italic-700">About PrimeSweepServices</h1>
          <p className="text-base sm:text-lg text-gray-800 mb-2">
            PrimeSweep is a professional street sweeping business specializing in keeping roads, parking lots, and industrial areas clean using state-of-the-art sweeper trucks.
          </p>
          <p className="text-base sm:text-lg text-gray-800 mb-4">
            Our experienced team is dedicated to providing reliable, efficient, and environmentally friendly services for communities and businesses in Ontario, CA and surrounding areas.<br/> We pride ourselves on our commitment to customer satisfaction and our role in enhancing the cleanliness and safety of our local environment.
          </p>
        </div>
      </section>

      {/* Bubbles stacked, side-by-side with contact form */}
      <section className="w-full bg-red-700 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full max-w-6xl justify-center items-stretch px-2 sm:px-4 mx-auto mt-0 z-10 relative mb-4">
          {/* Bubbles stacked vertically */}
          <div className="flex flex-col gap-4 sm:gap-8 flex-1 mb-6 md:mb-0">
            <section className="bg-linear-to-r from-red-50 to-white rounded-3xl shadow-xl p-5 sm:p-8 flex flex-col justify-center items-center text-red-700">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Our Mission</h2>
              <p className="text-base sm:text-lg">
                To deliver top-quality street sweeping solutions that enhance safety, appearance, and sustainability for our clients.
              </p>
            </section>
            <section className="bg-linear-to-r from-red-50 to-white rounded-3xl shadow-xl p-5 sm:p-8 flex flex-col justify-center items-center text-red-700">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Why Choose Us?</h2>
              <ul className="list-disc list-inside text-red-700 text-base sm:text-lg">
                <li>Modern sweeper trucks</li>
                <li>Experienced operators</li>
                <li>Flexible scheduling</li>
                <li>Eco-friendly practices</li>
              </ul>
            </section>
          </div>
          {/* Contact Form */}
          <section className="flex-1 bg-linear-to-r from-red-50 to-white rounded-2xl shadow-xl border border-gray-100 p-5 sm:p-8 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">Contact Us</h2>
            <form className="flex flex-col gap-4 sm:gap-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                <input type="text" id="name" name="name" required className="w-full text-black px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                <input type="email" id="email" name="email" required className="w-full text-black px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea id="message" name="message" rows={4} required className="w-full text-black px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"></textarea>
              </div>
              <button type="submit" className="mt-2 bg-red-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow hover:bg-red-800 transition text-base sm:text-lg self-end">Send Message</button>
            </form>
          </section>
        </div>
      </section>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Footer />
    </main>
  );
}
