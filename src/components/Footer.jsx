/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../styles/footer.css';
import { Link } from 'react-router-dom';
import Logo1 from '../assets/little-lemon/Asset9@4x.png';
import Logo2 from '../assets/little-lemon/Asset20@4x.png';

const Footer = ({ toggleLogo }) => {
    const [text, setText] = useState('uwu? >-<');
    const [logo, setLogo] = useState(toggleLogo);

    const handleClick = () => {
        setLogo(!logo);
        setText(text === 'uwu? >-<' ? 'more uwu?' : 'uwu?');
        toggleLogo();
    }
    return (
        <footer className='footer'>
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo ? Logo1 : Logo2} alt="Little Lemon Logo" />
                </div>
                <nav className="footer-nav">
                    <h3>Navigation</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/reservations">Reservations</Link></li>
                        <li><Link to="/order">Order Online</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li>
                            <span 
                                onClick={handleClick} 
                                className={`logo-toggle ${logo ? 'active' : ''}`}
                            >
                                {text}
                            </span>
                        </li>
                    </ul>
                </nav>
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>Address: 123 Main St, City, State  12345</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: info@littlelemon.com</p>
                </div>
                <div className="footer-social">
                    <h3>Connect with us</h3>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook"></i></a>
                        <a href="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href="https://twitter.com" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a href="https://tiktok.com" target="_blank"><i className="fab fa-tiktok"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <h3>&copy; {new Date().getFullYear()} Little Lemon ™ | All Rights Reserved.</h3>
            </div>
        </footer>
    )
}

export default Footer