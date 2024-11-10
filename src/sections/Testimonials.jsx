import '../styles/testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const testimonialsData = [
  {
    name: 'Alice Johnson',
    feedback: 'Little Lemon has the best Mediterranean food I have ever tasted! Highly recommend the Chicken Shawarma.',
  },
  {
    name: 'Bob Smith',
    feedback: 'The atmosphere is warm and welcoming, and the staff is incredibly friendly. A must-visit!',
  },
  {
    name: 'Charlie Brown',
    feedback: 'I love the Mediterranean Salad! Fresh and delicious. Perfect for a light lunch.',
  },
  {
    name: 'Diana Prince',
    feedback: 'The Seafood Paella is a game changer! So flavorful and beautifully presented.',
  },
  {
    name: 'Ethan Hunt',
    feedback: 'Amazing experience! The Pita Pizza is a must-try. Will definitely come back.',
  },
  {
    name: 'Fiona Gallagher',
    feedback: 'Great place for family gatherings. The service is quick and the food is always fresh.',
  },
  {
    name: 'George Clooney',
    feedback: 'I was blown away by the quality of the dishes. Truly authentic Mediterranean cuisine!',
  },
  {
    name: 'Hannah Montana',
    feedback: 'A hidden gem in the city! The Falafel Wrap is delicious and filling.',
  },
];

const Testimonials = () => {
  return (
    <div className='testimonials-container'>
      <h1>What Our Customers Say</h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        loop={true}
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide
            key={index}
          >
            <div className='testimonial-card'>
              <h3 className='testimonial-name'>{testimonial.name}</h3>
              <p className='testimonial-feedback'>{testimonial.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Testimonials