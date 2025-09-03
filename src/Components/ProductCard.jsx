import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductButton from './ProductButton';
import { FavoriteContext } from './FavoriteContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { favoriteItems, toggleFavorite} = useContext(FavoriteContext)
  
  if (!product) {
    return null;
  }

  const handleCardClick = (e) => {
    // Only navigate if the click didn't come from interactive elements
    if (!e.target.closest('button') && !e.target.closest('.product-button-container')) {
      navigate(`/product/${product.id}`);
    }
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation()
    toggleFavorite(product)
  }

  // Safe rating rendering
  const renderStars = () => {
    const rating = Math.max(0, Math.min(5, product.rating || 0)); 
    return [...Array(Math.floor(rating))].map((_, i) => (
      <i key={i} className="fa-solid fa-star" aria-hidden="true"></i>
    ));
  };

  // Check if there's a discount
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <div 
      className="card" 
      onClick={handleCardClick} 
      style={{ cursor: 'pointer' }}
    >
      <div className="card-image-div">
        <i className="fa-solid fa-fire-flame-curved" aria-hidden="true"></i>
        <img 
          src={product.image} 
          alt={product.name}
          onError={(e) => {
            e.target.src = './Images/placeholder.jpg';
          }}
        />
        <div className='heart-div'>
          <button onClick={handleFavoriteClick}> 
            {favoriteItems.find((item) => item.id === product.id) ? 
              <i className="fa-solid fa-heart"></i> : 
              <i className="fa-regular fa-heart" aria-hidden="true"></i>
            }
          </button>
        </div>
      </div>

      <div className="Card-description">
        <p className="mens-clothing">{product.categoryDisplay}</p>
        <p className="item-description">{product.name}</p>
        
        <div className="price-section">
          <p className="price">
            ${product.price?.toFixed(2) || '0.00'}
          </p>
        </div>
        
        {/* Stars Rating */}
        <div className="card-stars" aria-label={`Rating: ${product.rating || 0} out of 5 stars`}>
          {renderStars()}
        </div>

        <p className="review">{product.reviews || 0} reviews</p>
        <p className="stock">
          In Stock <span>{product.stock || 0}</span>
        </p>
        
        {/* Show discount percentage if there's a discount */}
        {hasDiscount && (
          <p className="discount-info">
            Save ${(product.originalPrice - product.price).toFixed(2)} 
            ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off)
          </p>
        )}
        
        {/* Wrap ProductButton in a container to prevent click conflicts */}
        <div className="product-button-container">
          <ProductButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;