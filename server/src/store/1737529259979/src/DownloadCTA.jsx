const DownloadCTA = () => {
  return (
    <div className="bg-blue-600 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Download Now</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-black px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Download for iOS
          </button>
          <button className="bg-black px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Download for Android
          </button>
        </div>
      </div>
    </div>
  )
}

export default DownloadCTA