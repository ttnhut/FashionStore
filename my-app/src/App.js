import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/cartContext";
import Cart from "./pages/Cart";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
// cd
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
