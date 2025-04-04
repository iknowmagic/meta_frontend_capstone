import Hero from '@/components/Hero'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { useSiteStore } from '@/stores/siteStore'

export default function Home() {
  const testimonials = useSiteStore((state) => state.testimonials)
  const specials = useSiteStore((state) => state.specials)

  return (
    <>
      <Hero />
      <section className="bg-white py-16">
        <div className="max-w-800 w-full mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-3xl font-bold">This Week’s Specials!</h2>
            <Button>Online Menu</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specials.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-100 p-4 rounded-lg mt-8 flex flex-col md:flex-row items-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
