import { Link } from 'react-router-dom'
import Logo from '../assets/little-lemon/Asset20@4x.png'
import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <Link to='/' className='navbar-logo'>
          <img src={Logo} alt='Little Lemon Logo' />
        </Link>
        <ul className='nav-menu'>
          <li className="nav-item">
            <Link to='/' className='nav-link'>Home</Link>
          </li>
          <li className="nav-item">
            <Link to='/about' className='nav-link'>About</Link>
          </li>
          <li className="nav-item">
            <Link to='/menu' className='nav-link'>Menu</Link>
          </li>
          <li className="nav-item">
            <Link to='/reservations' className='nav-link'>Reservations</Link>
          </li>
          <li className="nav-item">
            <Link to='/order' className='nav-link'>Order Online</Link>
          </li>
          <li className="nav-item">
            <Link to='/login' className='nav-link'>Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar