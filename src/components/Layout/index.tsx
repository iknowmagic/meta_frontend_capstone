import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Nav from '../Nav'
import Main from '../Main'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Menu', path: '/menu' },
  { label: 'Reservations', path: '/reservations' },
  { label: 'Order Online', path: '/order' },
  { label: 'Login', path: '/login' },
]

function Layout() {
  return (
    <>
      <Nav items={navItems} />
      <Main>
        <Outlet />
      </Main>
      <Footer items={navItems} />{' '}
    </>
  )
}

export default Layout
