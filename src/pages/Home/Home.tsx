import Hero from '@/components/Hero'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { useSiteStore } from '@/stores/siteStore'
import Rating from '@/components/Rating'

export default function Home() {
  const testimonials = useSiteStore((state) => state.testimonials)
  const specials = useSiteStore((state) => state.specials)

  return (
    <>
      <Hero />
      <section className="bg-white py-16">
        <div className="mx-auto px-4 w-full max-w-800">
          <div className="flex md:flex-row flex-col md:justify-between md:items-center mb-8">
            <h2 className="font-bold text-3xl">This Week’s Specials!</h2>
            <Button>Online Menu</Button>
          </div>

          <div className="gap-8 grid md:grid-cols-3">
            {specials.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
      {/* a nice bluish background with tailwind colors */}
      <section className="bg-light-gray py-12">
        <div className="mx-auto px-4 w-full max-w-[800px]">
          <h2 className="mb-8 font-bold text-2xl text-center">
            What Our Customers Say
          </h2>
          <div className="justify-items-center gap-4 grid grid-cols-1 md:grid-cols-4">
            {testimonials.map((t) => (
              <Rating
                key={t.id}
                name={t.name}
                image={t.image}
                note={t.note}
                rating={t.rating}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
