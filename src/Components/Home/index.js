import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-text-container">
        <h1 className="home-text-header">
          FIND PRODUCTS THAT MATCHES YOUR STYLE
        </h1>
        <p className="home-text-para">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Link to="/products" className="home-shop-button">
          Shop Now
        </Link>
      </div>
      <img
        src="https://res.cloudinary.com/dtjlqngvn/image/upload/v1746102108/lf1xvmwxrg3edtsufcoy.png"
        alt="banner"
      />
    </div>
  );
};

export default Home;
