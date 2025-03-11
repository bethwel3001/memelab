export default function Gallery() {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Your Memes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Example Meme Card */}
          <div className="bg-white/80 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <img src="https://via.placeholder.com/300" alt="Meme" className="rounded-lg mb-4" /> // Replace with actual meme images
            <p className="text-lg font-semibold">"When you finally fix a bug"</p>
          </div>
        </div>
      </div>
    );
  }