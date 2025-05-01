import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./index.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <h1 className="nav-header">SHOP.</h1>
      <nav className="nav-wrap">
        <Link to={"/"} className="nav-para">
          Home
        </Link>
        <Link to={"/products"} className="nav-para">
          Products
        </Link>
        <Link to={"cart"} className="svg">
          <AiOutlineShoppingCart />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
