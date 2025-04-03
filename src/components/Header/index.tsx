import logo from '../../assets/logo.svg'

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl">My App</h1>
      <img src={logo} alt="Logo" className="h-10" />
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
