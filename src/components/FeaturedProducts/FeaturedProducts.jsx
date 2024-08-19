import React from 'react';
import './FeaturedProducts.css';
import productImage from '../../assets/images/banner.jpg';

function FeaturedProducts() {
  const products = [
    { id: 1, name: "Ethiopian Aroma", price: "$9.00", image: productImage },
    { id: 2, name: "Green Africana", price: "$9.00", image: productImage },
    { id: 3, name: "Caffe Latte", price: "$10.00", image: productImage },
    { id: 4, name: "Cappuccino", price: "$10.00", image: productImage },
    { id: 5, name: "Espresso", price: "$8.00", image: productImage },
  ];

  return (
    <section className="featured-products">
      <h2>Recent Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
