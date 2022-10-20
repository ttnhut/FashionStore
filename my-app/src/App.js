import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import UserDashBoard from "./pages/user-routes/UserDashBoard";
import PrivateRoot from "./components/PrivateRoute";
import ProfileInfo from "./pages/user-routes/ProfileInfo";
import { CartProvider } from "./contexts/cartContext";
import Cart from "./pages/Cart";
import DashBoard from "./pages/DashBoard";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" />
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<PrivateRoot />}>
            <Route path="dashboard" element={<UserDashBoard />} />
            <Route path="profile-info" element={<ProfileInfo />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/dash" element={<DashBoard />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
