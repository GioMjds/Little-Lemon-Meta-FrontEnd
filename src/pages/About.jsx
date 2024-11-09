import '../styles/about.css';
import Logo from '../assets/little-lemon/Asset20@4x.png';

const About = () => {
  return (
    <>
      <div className='about-container'>
        <div className="about-content">
          <h1>About Little Lemon</h1>
          <p>Little Lemon is a family-owned Mediterranean restaurant located in the heart of Manila, Philippines. We pride ourselves on serving traditional recipes with a modern twist, ensuring a delightful dining experience for all our guests.</p>
          <h1>Our Mission</h1>
          <p>Our mission is to provide a warm and welcoming environment where families and friends can gather to enjoy delicious, high-quality Mediterranean cuisine made from fresh, locally sourced ingredients.</p>
          <h1>Our Values</h1>
          <p>We believe in sustainability, quality, and community. We are committed to using eco-friendly practices and supporting local farmers and suppliers.</p>
          <h1>History</h1>
          <p>Little Lemon was founded in 2020 by a family of passionate food lovers. Since then, we have been dedicated to bringing the authentic flavors of the Mediterranean to Manila, creating a unique dining experience for our customers.</p>
          <h1>Acknowledgments</h1>
          <p>Special thanks to our team and all our loyal customers for their continuous support. Your feedback helps us improve and grow.</p>
        </div>
        <div className="about-logo">
          <img src={Logo} alt="Little Lemon Logo" />
        </div>
      </div>
    </>
  )
}

export default About