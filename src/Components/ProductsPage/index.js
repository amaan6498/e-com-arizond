import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import "./index.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); // destructure from context

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="products-container">
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <div className="product-info">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-category">{product.category}</p>
              <div className="product-rating">
                <span>
                  Rating: {product.rating.rate} ({product.rating.count} reviews)
                </span>
              </div>
              <div className="product-price">${product.price}</div>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
