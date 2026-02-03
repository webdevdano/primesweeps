'use client';

import Footer from "@/app/components/Footer";
import { useState } from "react";


const images = [
  { src: "/Images/CleanEntrance1.jpg", alt: "Clean Entrance 1" },
  { src: "/Images/CleanEntrance2.jpg", alt: "Clean Entrance 2" },
  { src: "/Images/CleanLot1.jpg", alt: "Clean Lot 1" },
  { src: "/Images/CleanLot3.jpg", alt: "Clean Lot 3" },
  { src: "/Images/CleanLot4.jpg", alt: "Clean Lot 4" },
  { src: "/Images/CleanLot5.jpg", alt: "Clean Lot 5" },
];

export default function Gallery() {
  const [modalImg, setModalImg] = useState<null | { src: string; alt: string }>(null);
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-2 sm:px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold text-red-700 mb-3 sm:mb-4 font-poppins-italic-700">Gallery</h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 w-full max-w-5xl mx-auto">
        {images.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="w-full h-40 sm:h-72 object-cover rounded-2xl shadow-lg border-2 border-red-700 cursor-pointer transition-transform hover:scale-105"
            onClick={() => setModalImg(img)}
          />
        ))}
      </div>
      {modalImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-2" onClick={() => setModalImg(null)}>
          <div className="relative w-full max-w-lg sm:max-w-3xl flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-white text-3xl font-bold z-10" onClick={() => setModalImg(null)}>&times;</button>
            <img src={modalImg.src} alt={modalImg.alt} className="w-full max-h-[60vh] sm:max-h-[80vh] object-contain rounded-2xl shadow-2xl border-4 border-red-700" />
          </div>
        </div>
      )}
      <Footer />
    </main>
  );
}
