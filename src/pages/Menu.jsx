import '../styles/menu.css'
import { useState } from 'react'
import { dishesData } from '../components/MenuData'

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(dishesData);

  const filterCategory = categoryItem => {
    const updatedCategory = dishesData.filter(item => item.category === categoryItem);
    setSelectedCategory(updatedCategory);
  };

  return (
    <div className='menu-container'>
      <h1>Our Menu</h1>
      <div className="menu-filter">
        <span className='menu-category-btn' onClick={() => setSelectedCategory(dishesData)}>All</span>
        <span className='menu-category-btn' onClick={() => filterCategory("Main Dish")}>Main Dish</span>
        <span className='menu-category-btn' onClick={() => filterCategory("Side Dish")}>Side Dish</span>
        <span className='menu-category-btn' onClick={() => filterCategory("Desserts")}>Desserts</span>
        <span className='menu-category-btn' onClick={() => filterCategory("Beverages")}>Beverages</span>
      </div>
      <div className="menu-grid">
        {selectedCategory.map((item, index) => (
          <div className="menu-card" key={index}>
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name} className='menu-img' />
            <p className='menu-price'>Price: {item.price}</p>
            <p className="menu-category">Category: {item.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu