import bruschettaImage from '@/assets/bruschetta.png'
import greekSaladImage from '@/assets/greek_salad.jpg'
import lemonDessertImage from '@/assets/lemon_dessert.jpg'

export const specialsData = [
  {
    id: 1,
    title: 'Greek Salad',
    price: '$12.99',
    description:
      'Crispy lettuce, peppers, olives, and feta cheese, served with our signature dressing.',
    image: greekSaladImage,
  },
  {
    id: 2,
    title: 'Bruschetta',
    price: '$5.99',
    description: 'Grilled bread with garlic, tomatoes, and olive oil.',
    image: bruschettaImage,
  },
  {
    id: 3,
    title: 'Lemon Dessert',
    price: '$4.99',
    description: 'Fresh baked lemon cake with a creamy lemon frosting.',
    image: lemonDessertImage,
  },
]
