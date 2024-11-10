import '../styles/special-offer.css'
import Dish2 from '../assets/dishes/dish2.jpg';
import Dish3 from '../assets/dishes/dish3.jpg';
import Dish6 from '../assets/dishes/dish6.jpg';

const dishes = [
    {
        name: 'Mediterranean Salad',
        img: Dish2,
        price: '$10.99',
        description: 'A refreshing and flavorful salad made with fresh vegetables and herbs from the Mediterranean region',
        rating: 4.7,
    },
    {
        name: 'Seafood Paella',
        img: Dish3,
        price: '$19.99',
        description: 'A classic Spanish dish made with a variety of fresh seafood and seasoned rice',
        rating: 4.8,
    },
    {
        name: 'Pita Pizza',
        img: Dish6,
        price: '$14.99',
        description: 'A classic Mediterranean pizza with a crispy crust and fresh toppings for a delicious meal',
        rating: 4.9,
    }
];

const SpecialOffer = () => {
  return (
    <div className='special-offer'>
        <h1>Special Offers</h1>
        <div className="grid-container">
            {dishes.map((dish, index) => (
                <div className="dish-card" key={index}>
                    <h3>{dish.name}</h3>
                    <img src={dish.img} alt={dish.name} className='dish-image' />
                    <p>{dish.description}</p>
                    <p className='price'>Price: {dish.price}</p>
                    <p className='rating'>Rating: {dish.rating}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SpecialOffer