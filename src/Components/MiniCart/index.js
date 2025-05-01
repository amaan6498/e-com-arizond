// src/Components/MiniCart.js
import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./index.css";

const MiniCart = () => {
  const { cartItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMiniCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mini-cart-container">
      <button onClick={toggleMiniCart} className="mini-cart-toggle">
        🛒 {cartItems.length}
      </button>
      {isOpen && (
        <div className="mini-cart-dropdown">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Cart is empty</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <div>
                    <span>{item.title}</span>
                    <span>${item.price}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default MiniCart;
