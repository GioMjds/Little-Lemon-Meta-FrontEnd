/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom'
import Logo1 from '../assets/little-lemon/Asset16@4x.png'
import Logo2 from '../assets/little-lemon/Asset14@4x.png'
import '../styles/navbar.css'
import { useState } from 'react'
import User from '../assets/little-lemon/Male User.png';

const NavBar = ({ switchLogo, isLoggedin, onLogout }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = () => setShowProfileMenu(!showProfileMenu);
  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <NavLink to='/' className='navbar-logo'>
          <img src={switchLogo ? Logo1 : Logo2} alt='Little Lemon Logo' />
        </NavLink>
        <ul className='nav-menu'>
          <li className="nav-item">
            <NavLink to='/' className='nav-link' activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/about' className='nav-link' activeClassName="active">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/menu' className='nav-link' activeClassName="active">Menu</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/reservations' className='nav-link' activeClassName="active">Reservations</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/order' className='nav-link' activeClassName="active">Order Online</NavLink>
          </li>
          <li className="nav-item">
            {isLoggedin ? (
              <div className="profile-container" onClick={toggleProfileMenu}>
                <img className='profile-pic' src={User} alt="Profile" />
                {showProfileMenu && (
                  <div className="profile-menu">
                    <button onClick={() => alert('Profile clicked')}>Profile</button>
                    <button onClick={() => alert('Change Password')}>Change Password</button>
                    <button onClick={onLogout}>Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <NavLink to='/login' className='nav-link' activeClassName="active">Login</NavLink >
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar