import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo.svg'

interface NavItem {
  label: string
  path: string
}

interface NavProps {
  items: NavItem[]
}

export default function Nav({ items = [] }: NavProps) {
  const location = useLocation()
  return (
    <nav className="bg-base-100 shadow-lg p-4">
      <div className="navbar max-w-800 mx-auto grid grid-cols-3">
        <div className="col-span-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img src={Logo} alt="Logo" className="h-12" />
          </Link>
        </div>
        <ul className="menu menu-horizontal px-1 col-span-2 font-bold">
          {items.map((item) => (
            <li
              key={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
