import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Store from './Components/Store';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Trending from './Components/Trending';
import Footer from './Components/Footer';
import CartPage from './Components/CartPage';
import FavoritesPage from './Components/FavoritePage';
import { CartProvider } from './Components/CartContext';
import { FavoriteProvider } from './Components/FavoriteContext';
import { Toaster } from 'react-hot-toast';
import './App.css';
import ProductDetails1 from './Components/ProductDetails1';
import BlogCardPage from './Components/BlogCardPage';
import Search from './Components/Search';

function App() {
  const [showSearch, setShowSearch] = useState(false)

  const toggleSearch = () => {
    setShowSearch(!showSearch)
  }

  const closeSearch = () => {
    setShowSearch(false)
  }

  return (
    <div>
      <CartProvider>
        <FavoriteProvider>
          <Header onSearchClick={toggleSearch} />
          <Search isVisible={showSearch} onClose={closeSearch} />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails1 />} />
              <Route path="/blogcard/:id" element={<BlogCardPage />} />
              <Route path="/CartPage" element={<CartPage />} />
              <Route path="/FavoritePage" element={<FavoritesPage />} />
              <Route path="/store" element={<Store />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/trending" element={<Trending />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </main>
          <Toaster position='top-right'/>
        </FavoriteProvider>
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;