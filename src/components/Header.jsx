import '../styles/header.css';
import { Link } from 'react-router-dom';
import bannerImg from '../assets/restaurant-food.jpg';

const Header = () => {
  return (
    <header className="header">
        <section>
            <div className="banner">
                <h2>Welcome to Little Lemon</h2>
                <h3>Manila, Philippines</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                <Link to="/reservations"><button>Reserve a table</button></Link>
            </div>

            <div className="banner-image">
                <img src={bannerImg} alt='Little Lemon' />
            </div>
        </section>
    </header>
  )
}

export default Header