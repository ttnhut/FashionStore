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
import DashBoard from "./pages/user-routes/DashBoard";
import PostPage from "./pages/PostPage";
import UserProvider from "./contexts/UserProvider";
import Payment from "./pages/user-routes/Payment";
import CartDataProvider from "./contexts/CartDataProvider";
import AddProduct from "./pages/AddProduct";
import AddCategory from "./pages/AddCategory";
import UserManager from "./pages/UserManager";
import CategoryManagerComponent from "./components/CategoryManagerComponent";
import EditCategory from "./components/EditCat";
import PostManagerComponent from "./components/PostManagerComponent";
import CategoryManager from "./pages/CategoryManager";
import PostManager from "./pages/PostManager";
import EditProduct from "./components/EditProduct";
function App() {
  return (
    <CartDataProvider>
    <UserProvider>
    <BrowserRouter>
      <ToastContainer position="bottom-center" />
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user" element={<PrivateRoot />}>
            
            <Route path="profile-info" element={<ProfileInfo />} />
            <Route path="payment" element={<Payment/>}/>
            <Route path="dashboard" element={<DashBoard/>}/>
            {/* Category Dashboard */}
            <Route path="dashboard/categorymanager" element={<CategoryManager/>}/>
            <Route path="dashboard/categorymanager/addcategory" element={<AddCategory/>}/>
            <Route path="dashboard/categorymanager/edit/:id" element={<EditCategory/>}/>
            {/* Product Dashboard */}
            <Route path="dashboard/productmanager" element={<PostManager/>}/>
            <Route path="dashboard/productmanager/edit/:id" element={<EditProduct/>}/>
            {/* User Dashboard */}
            <Route path="dashboard/usermanager" element={<UserManager/>}/>
          </Route>
          <Route path="/cart" element={<Cart />} />
         
          <Route path="/clothes/:id" element={<PostPage/>} />
          
        </Routes>
      </CartProvider>
    </BrowserRouter>
    </UserProvider>
    </CartDataProvider>
  );
}

export default App;
