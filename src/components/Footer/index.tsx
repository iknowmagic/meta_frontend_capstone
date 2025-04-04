import { Link } from 'react-router-dom'

interface NavItem {
  label: string
  path: string
}

interface NavProps {
  items: NavItem[]
}

export default function Footer({ items = [] }: NavProps) {
  return (
    <footer className="bg-gray-800 text-white py-4">
      {items.map((item) => (
        <div key={item.path} className="text-center">
          <Link to={item.path} className="text-white hover:underline">
            {item.label}
          </Link>
        </div>
      ))}
    </footer>
  )
}
