export default function Gallery() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-12">
      <h1 className="text-3xl font-bold text-red-700 mb-4">Gallery</h1>
      <p className="text-base text-gray-800 mb-8 text-center">See our sweeper trucks in action and the results of our work!</p>
      <div className="flex gap-8 flex-wrap justify-center">
        
        <img src="/Images/CleanEntrance1.jpg" alt="Clean Entrance 1" className="w-56 h-36 object-cover rounded-xl shadow border-2 border-red-700" />
        <img src="/Images/CleanEntrance2.jpg" alt="Clean Entrance 2" className="w-56 h-36 object-cover rounded-xl shadow border-2 border-red-700" />
        <img src="/Images/CleanLot1.jpg" alt="Clean Lot 1" className="w-56 h-36 object-cover rounded-xl shadow border-2 border-red-700" />
        <img src="/Images/CleanLot3.jpg" alt="Clean Lot 3" className="w-56 h-36 object-cover rounded-xl shadow border-2 border-red-700" />
        <img src="/Images/CleanLot4.jpg" alt="Clean Lot 4" className="w-56 h-36 object-cover rounded-xl shadow border-2 border-red-700" />
        <img src="/Images/CleanLot5.jpg" alt="Clean Lot 5" className="w-56 h-36 object-cover rounded-xl shadow border-2 border-red-700" />
      </div>
    </main>
  );
}
