import { useState } from 'react'
import React from 'react'

type CarouselProps = {
  items: React.ReactNode[]
  numItems?: number
  sameHeight?: boolean
}

export default function Carousel({
  items,
  numItems = 3,
  sameHeight = true,
}: CarouselProps) {
  const [current, setCurrent] = useState(0)
  const total = items.length

  const prev = () => setCurrent((prev) => (prev - 1 + total) % total)
  const next = () => setCurrent((prev) => (prev + 1) % total)

  const visibleItems = items.slice(current, current + numItems)
  const wrapped = current + numItems > total

  // Handle wrap-around logic manually
  const displayItems = wrapped
    ? [...items.slice(current), ...items.slice(0, current + numItems - total)]
    : visibleItems

  return (
    <div className="relative">
      {/* Grid container for carousel items */}
      <div className="gap-4 grid grid-cols-3 pb-4 w-full overflow-hidden carousel">
        {displayItems.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full carousel-item"
            style={{ minHeight: sameHeight ? '150px' : 'auto' }} // Set height if needed
          >
            {item}
          </div>
        ))}
      </div>

      {/* Left & Right Buttons positioned outside the carousel */}
      <div className="top-1/2 left-[-3rem] z-10 absolute -translate-y-1/2 transform">
        <button onClick={prev} className="btn btn-circle btn-sm md:btn-md">
          ❮
        </button>
      </div>
      <div className="top-1/2 right-[-3rem] z-10 absolute -translate-y-1/2 transform">
        <button onClick={next} className="btn btn-circle btn-sm md:btn-md">
          ❯
        </button>
      </div>
    </div>
  )
}
