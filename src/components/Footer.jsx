import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/little-lemon/Asset20@4x.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={Logo} alt="Little Lemon Logo" />
                </div>
                <nav className="footer-nav">
                    <h3>Navigation</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/reservations">Reservations</Link></li>
                        <li><Link to="/order-online">Order Online</Link></li>
                        <li><Link to="/login">Login</Link></li>
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