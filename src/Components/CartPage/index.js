import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./index.css";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const subtotal = cartItems
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      {cartItems.length === 0 ? (
        <>
          <p className="cart-empty">Your cart is empty.</p>
          <Link to={"/products"}>
            <p className="cart-browse cart-empty">Browse</p>
          </Link>
        </>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-item-details">
                  <div className="cart-item-title">{item.title}</div>
                  <div className="cart-item-price">${item.price}</div>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-summary-info">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
