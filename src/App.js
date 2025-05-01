import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import ProductsPage from "./Components/ProductsPage";
import CartPage from "./Components/CartPage";
import MiniCart from "./Components/MiniCart";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="cart" element={<CartPage />} />
        </Routes>
        <MiniCart />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
