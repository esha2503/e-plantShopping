import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice'; // Import addItem from CartSlice

const plantsArray = [
  {
    name: "Plant 1",
    image: "url_to_image_1",
    description: "Description of Plant 1",
    cost: 10.00,
  },
  {
    name: "Plant 2",
    image: "url_to_image_2",
    description: "Description of Plant 2",
    cost: 15.00,
  },
  // Add more plant objects as needed
];

const ProductList = () => {
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant)); // Dispatch the addItem action with the plant details
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true })); // Update the addedToCart state
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant) => (
        <div key={plant.name} className="product-card">
          <h2>{plant.name}</h2>
          <img src={plant.image} alt={plant.name} />
          <p>{plant.description}</p>
          <p>Price: ${plant.cost.toFixed(2)}</p>
          <button onClick={() => handleAddToCart(plant)}>
            Add to Cart
          </button>
          {addedToCart[plant.name] && <p>Added to cart!</p>}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
