import "./App.css";
import {BrowserRouter, Routes , Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import Login from './pages/Login'
import Register from "./pages/Register";
import ProductPage from "./pages/ProductPage"; 

import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from 'react-toastify'
import UserDashBoard from "./pages/user-routes/UserDashBoard";
import PrivateRoot from "./components/PrivateRoute";
import ProfileInfo from "./pages/user-routes/ProfileInfo";
import Paypal from "./pages/paypal";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<UserDashBoard />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/user" element={<PrivateRoot />} >
          <Route path="dashboard" element={<UserDashBoard />} />
          <Route path="profile-info" element={<ProfileInfo />} />
        </Route>
        <Route path="paypal" element={<Paypal/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
