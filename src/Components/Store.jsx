import React, { useEffect } from 'react';
import { useState } from 'react';
import './Store.css';
import { products } from "./data/Products";
import ProductCard from './ProductCard';

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [click, setClick] = useState(false)
  
  const categories = [...new Set(products.map(product => product.category))];
  console.log(categories)
  
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    if (window.innerWidth <= 768) {
      setClick(false);
    }
  }

  const handleClick = () => {
    setClick(!click)
  }

  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 700 && click) {
          setClick(false)
        }
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize)
    }, [click])

  return (
    <div className='store-general-div'>
      <div className='store-header'>
        <h2>Explore our wide range of products from various categories and brands.</h2>
      </div>

      <div className='horizontal-div'></div>

      {!click ? 
        <button className='filter-button' onClick={() => handleClick()}>Show Filters</button> 
        : ''
      }

      <div className='general-display-div'>
        <div className='category-div'>
          <h4 className='product-categories-text'>Product Categories</h4>

          <label>
            <input
              type="radio" 
              name="Category" 
              value="" 
              checked={selectedCategory === ""}
              onChange={handleCategoryChange} 
            />
            All Products
          </label>

          {categories.map(category => (
            <label key={category}>
              <input
                type="radio" 
                name="Category" 
                value={category}
                checked={selectedCategory === category}
                onChange={handleCategoryChange}
              />

              {products.find(p => p.category === category)?.categoryDisplay || 
              category.charAt(0).toUpperCase() + category.slice(1)}
            </label>
          ))}

          {selectedCategory && (
            <p style={{ marginTop: '10px', fontStyle: 'italic' }}>
              Showing: {products.find(p => p.category === selectedCategory)?.categoryDisplay || selectedCategory}
            </p>
          )}
        </div>

        <div className="products-section">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>

      <nav className={`filter-hambug ${click ? 'open' : ''}`}>
        <div className='filter-mark'>
          <h3>Filters</h3>
          <i className="fa-solid fa-xmark close-icon" onClick={handleClick} aria-label="Close menu" />
        </div>

        <div className='cat-div'>
          <h4 className='product-categories-text'>Product Categories</h4>
          <label>
            <input
              type="radio" 
              name="Category" 
              value="" 
              checked={selectedCategory === ""}
              onChange={handleCategoryChange} 
            />
            All Products
          </label>

          {categories.map(category => (
            <label key={category}>
              <input
                type="radio" 
                name="Category" 
                value={category}
                checked={selectedCategory === category}
                onChange={handleCategoryChange}
              />

              {products.find(p => p.category === category)?.categoryDisplay || 
              category.charAt(0).toUpperCase() + category.slice(1)}
            </label>
          ))}
        </div>
      </nav>


    </div>
  );
}

export default Store;