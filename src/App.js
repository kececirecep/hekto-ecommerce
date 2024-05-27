import './App.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Products from './pages/Products/Products';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import FavoriteProducts from './pages/FavoriteProducts/FavoriteProducts';



function App() {
  return (
    <div>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#fff",
            color: "#111827",
          },
        }}
      />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='/favorite-products' element={<FavoriteProducts />} />
        <Route path='/shopping-cart' element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
