import heroImage from '@/assets/hero.png'

export default function Hero() {
  return (
    <section className="bg-green text-white py-16 relative">
      <div className="max-w-[1240px] w-full mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left column */}
        <div>
          <h1 className="text-5xl font-bold text-yellow-400">Little Lemon</h1>
          <h2 className="text-2xl mb-4">Chicago</h2>
          <p className="mb-6 max-w-md">
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="btn bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition">
            Reserve a Table
          </button>
        </div>

        {/* Right column */}
        <div>
          <img
            src={heroImage}
            alt="Chef with plate"
            className="max-w-md rounded-xl shadow-2xl absolute top-12 w-80"
          />
        </div>
      </div>
    </section>
  )
}
