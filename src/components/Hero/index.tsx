import heroImage from '@/assets/hero.png'
import Button from '@/components/Button'

export default function Hero() {
  return (
    <section className="bg-green text-white py-6">
      <div className="max-w-800 w-full mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative">
        {/* Left column */}
        <div>
          <h1 className="text-5xl font-bold text-yellow-400">Little Lemon</h1>
          <h2 className="text-2xl mb-4">Chicago</h2>
          <p className="mb-6 max-w-md">
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button>Reserve a Table</Button>
        </div>

        {/* Right column */}
        <div>
          <img
            src={heroImage}
            alt="Chef with plate"
            className="max-w-md rounded-xl shadow-2xl absolute top-0 w-70 right-3"
          />
        </div>
      </div>
    </section>
  )
}
