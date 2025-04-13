import './App.css';
import About from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import Home from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage'; // ← If you created it
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext'; // ← Import CartProvider
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './pages/CheckoutPage';


function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/cart' element={<CartPage />} /> {/* Add this if cart page exists */}
          <Route path='/checkout' element={<Checkout />} /> 
        </Routes>
        <ToastContainer
    position="top-right"
    autoClose={1500}
    hideProgressBar={false}
    newestOnTop
    closeOnClick
    pauseOnHover
    draggable
  />
      </Router>
    </CartProvider>
  );
}

export default App;
