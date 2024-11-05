import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
 
  };

  const handleContinueShopping = (e) => {
   
  };



  const handleIncrement = (item) => {
  };

  const handleDecrement = (item) => {
   
  };

  const handleRemove = (item) => {
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './path/to/CartSlice'; // Adjust the path as necessary

const handleRemoveItem = (name) => {
  dispatch(removeItem(name)); // Dispatch the removeItem action
};

const handleUpdateQuantity = (name, quantity) => {
  dispatch(updateQuantity({ name, quantity })); // Dispatch the updateQuantity action
};
const calculateTotalAmount = (cartItems) => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };
  const calculateTotalCost = (item) => {
    return item.price * item.quantity;
  };
  const handleContinueShopping = () => {
    // Logic to navigate to the product listing page
    alert('Returning to product listing page...');
  };
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, amount: item.quantity + 1 }));
  };
  
  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.name));
    } else {
      dispatch(updateQuantity({ name: item.name, amount: item.quantity - 1 }));
    }
  };
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
<span className="cart-quantity">{totalQuantity}</span>
        