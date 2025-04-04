type RatingProps = {
  name: string
  image: string
  note: string
  rating: number // 1 to 5
}

export default function Rating({ name, image, note, rating }: RatingProps) {
  return (
    <div className="bg-base-100 shadow-md p-6 rounded-lg max-w-sm card">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={image}
          alt={name}
          className="rounded-full w-14 h-14 object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="rating rating-sm">
            {[1, 2, 3, 4, 5].map((value) => (
              <div
                key={value}
                className={`mask mask-star-2 ${
                  value <= rating ? 'bg-orange-400' : 'bg-gray-300'
                }`}
                aria-label={`${value} star`}
                aria-current={value === rating ? 'true' : undefined}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-sm italic">&quot;{note}&quot;</p>
    </div>
  )
}
