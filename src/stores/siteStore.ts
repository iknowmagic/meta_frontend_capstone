import { create } from 'zustand'
import { testimonialsData } from '@/data/testimonials'
import { specialsData } from '@/data/specials'

type Testimonial = {
  id: number
  name: string
  note: string
  image: string
  rating: number
}

type Special = {
  id: number
  title: string
  price: string
  description: string
  image: string
}

interface SiteStore {
  testimonials: Testimonial[]
  setTestimonials: (_testimonials: Testimonial[]) => void
  specials: Special[]
  setSpecials: (_specials: Special[]) => void
}

export const useSiteStore = create<SiteStore>((set) => ({
  testimonials: testimonialsData,
  setTestimonials: (newTestimonials) => set({ testimonials: newTestimonials }),
  specials: specialsData,
  setSpecials: (newSpecials) => set({ specials: newSpecials }),
}))
