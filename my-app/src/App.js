import "./App.css";
import {BrowserRouter, Routes , Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import Login from './pages/Login'
import Register from "./pages/Register";
import ProductPage from "./pages/ProductPage";
import ModalCart from "./pages/ModalCart";
import Paypal from "./pages/paypal";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Paypal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
