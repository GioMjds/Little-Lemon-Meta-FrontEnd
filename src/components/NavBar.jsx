/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import Logo1 from '../assets/little-lemon/Asset16@4x.png'
import Logo2 from '../assets/little-lemon/Asset14@4x.png'
import '../styles/navbar.css'

const NavBar = ({ switchLogo }) => {
  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <Link to='/' className='navbar-logo'>
          <img src={switchLogo ? Logo1 : Logo2} alt='Little Lemon Logo' />
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