export default function Editor() {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6">Meme Editor</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Upload Section */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Upload Image</h3>
            <input type="file" className="mb-4" />
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full">
              Upload
            </button>
          </div>
  
          {/* Caption Section */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">AI-Generated Captions</h3>
            <p className="mb-4">"Why so serious?"</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
              Generate Caption
            </button>
          </div>
        </div>
      </div>
    );
  }