import '../styles/homepage.css';
import Hero from '../components/Hero';
import Testimonials from '../sections/Testimonials';
import SpecialOffer from '../sections/SpecialOffer';
import { useEffect } from 'react';

const HomePage = () => {

  useEffect(() => {
    document.title = "Home | Little Lemon"
  }, [])

  return (
    <>
      <Hero />
      <SpecialOffer />
      <Testimonials />
    </>
  )
}

export default HomePage