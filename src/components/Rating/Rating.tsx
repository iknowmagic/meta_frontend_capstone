type RatingProps = {
  name: string
  image: string
  note: string
  rating: number // 1 to 5
}

export default function Rating({ name, image, note, rating }: RatingProps) {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg w-44 card">
      <div className="gap-y-2 grid grid-cols-2">
        <div className="avatar">
          <div className="rounded-full w-12">
            <img src={image} alt={name} className="w-full" />
          </div>
        </div>

        {/* Name */}
        <h3 className="justify-self-center self-center font-semibold text-sm text-left">
          {name}
        </h3>

        {/* Stars */}
        <div className="justify-center md:justify-start col-span-2 rating rating-xs">
          {[1, 2, 3, 4, 5].map((value) => (
            <div
              key={value}
              className={`mask mask-star-2 ${
                value <= rating ? 'bg-orange-700' : 'bg-gray-300'
              }`}
              aria-label={`${value} star`}
            ></div>
          ))}
        </div>

        {/* Note */}
        <p className="col-span-2 text-gray-700 text-xs md:text-left text-center italic">{`"${note}"`}</p>
      </div>
    </div>
  )
}
