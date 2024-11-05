import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice'; // Adjust the import path as necessary

const ProductList = ({ plants }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant)); // Dispatch the addItem action with the plant details
  };

  return (
    <div className="product-grid">
      {plants.map((plant) => (
        <div key={plant.name} className="product-card">
          <h3>{plant.name}</h3>
          <img src={plant.imageUrl} alt={plant.name} />
          <p>{plant.description}</p>
          <p>${plant.cost}</p>
          <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

