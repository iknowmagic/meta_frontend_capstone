import Hero from '@/components/Hero'
import Card from '@/components/Card'
import Button from '@/components/Button'
import bruschettaImage from '@/assets/bruschetta.png'
import greekSaladImage from '@/assets/greek_salad.jpg'
import lemonDessertImage from '@/assets/lemon_dessert.jpg'

const specials = [
  {
    title: 'Greek Salad',
    price: '$12.99',
    description:
      'Crispy lettuce, peppers, olives, and feta cheese, served with our signature dressing.',
    image: greekSaladImage,
  },
  {
    title: 'Bruschetta',
    price: '$5.99',
    description: 'Grilled bread with garlic, tomatoes, and olive oil.',
    image: bruschettaImage,
  },
  {
    title: 'Lemon Dessert',
    price: '$4.99',
    description: 'Fresh baked lemon cake with a creamy lemon frosting.',
    image: lemonDessertImage,
  },
]

export default function Home() {
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
        </div>
      </section>
    </>
  )
}
