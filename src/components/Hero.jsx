import '../styles/hero.css';
import { Link } from 'react-router-dom';
import bannerImg from '../assets/little-lemon/Asset20@4x.png';

const Hero = () => {
  return (
    <header className="header">
        <section>
            <div className="banner">
                <h2>Welcome to Little Lemon</h2>
                <h3>Manila, Philippines</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
                <Link to="/reservations" className="reservation-link">Make a Reservation</Link>
            </div>

            <div className="banner-image">
                <img src={bannerImg} alt='Little Lemon' />
            </div>
        </section>
    </header>
  )
}

export default Hero