import motorcytle from '@/assets/motorcycle.svg'

interface CardProps {
  title: string
  price: string
  description: string
  image: string
  cta?: string
}

export default function Card({
  title,
  price,
  description,
  image,
  cta = 'Order a delivery',
}: CardProps) {
  return (
    <div className="card bg-base-white shadow-xl">
      <figure>
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{title}</h2>
          <span className="text-yellow-500 font-semibold">{price}</span>
        </div>
        <p className="text-sm">{description}</p>
        <div className="card-actions justify-start mt-4">
          <a href="#" className="font-semibold hover:underline text-sm">
            {cta}
            <img
              src={motorcytle}
              alt="Motorcycle"
              className="inline-block ml-2"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
