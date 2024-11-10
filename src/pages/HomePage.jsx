import '../styles/homepage.css';
import Hero from '../components/Hero';
import Testimonials from '../sections/Testimonials';
import SpecialOffer from '../sections/SpecialOffer';

const HomePage = () => {
  return (
    <>
      <Hero />
      <SpecialOffer />
      <Testimonials />
    </>
  )
}

export default HomePage