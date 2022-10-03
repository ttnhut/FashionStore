<<<<<<< HEAD
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
       <ProductPage /> 
    </div>
=======
import "./App.css";
import {BrowserRouter, Routes , Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import Login from './pages/Login'
import Register from "./pages/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 960480319c27baae853648374ba983b2547400d0
  );
}

export default App;

