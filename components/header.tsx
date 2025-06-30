export default function Header() {
  return (
    <header className="bg-black text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">SnapShot</h1>
        <p className="text-xl md:text-2xl text-gray-300">Professional Event Photography</p>
        <p className="text-lg text-gray-400 mt-2">Capturing your most important moments</p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          <span className="px-4 py-2 bg-gray-800 rounded-full">Weddings</span>
          <span className="px-4 py-2 bg-gray-800 rounded-full">Corporate Events</span>
          <span className="px-4 py-2 bg-gray-800 rounded-full">Celebrations</span>
          <span className="px-4 py-2 bg-gray-800 rounded-full">Conferences</span>
        </div>
      </div>
    </header>
  )
}
