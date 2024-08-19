import React from 'react';
import './MenuPage.css';
import espressoImage from '../../assets/images/banner.jpg';

function MenuPage() {
  const menuItems = [
    { id: 1, name: "Espresso", price: "$2.00", image: espressoImage },
    { id: 2, name: "Cappuccino", price: "$3.50", image: espressoImage },
    { id: 3, name: "Latte", price: "$4.00", image: espressoImage },
    { id: 4, name: "Mocha", price: "$4.50", image: espressoImage },
    { id: 5, name: "Americano", price: "$2.50", image: espressoImage },
  ];

  return (
    <div className="menu-page">
      <h2>Menu</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <div className="menu-item-details">
              <span>{item.name}</span> - <span>{item.price}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuPage;
