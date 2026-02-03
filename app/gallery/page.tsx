export default function Gallery() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-12">
      <h1 className="text-3xl font-bold text-red-700 mb-4">Gallery</h1>
      <p className="text-base text-gray-800 mb-8 text-center">See our sweeper trucks in action and the results of our work!</p>
      <div className="flex gap-8 flex-wrap justify-center">
        {/* Example images, replace with real images as needed */}
        <img src="/truck1.jpg" alt="Sweeper Truck 1" className="w-56 h-36 object-cover rounded-xl shadow border-2 border-red-700" />
        <img src="/truck2.jpg" alt="Sweeper Truck 2" className="w-56 h-36 object-cover rounded-xl shadow border-2 border-red-700" />
        <img src="/sweep-action.jpg" alt="Sweeping in Action" className="w-56 h-36 object-cover rounded-xl shadow border-2 border-red-700" />
      </div>
    </main>
  );
}
