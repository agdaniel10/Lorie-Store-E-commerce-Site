import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import './ProductCard.css'

function ProductButton({product}) {
    const { addToCart, reduceQuantity, addQuantity, cartItems } = useContext(CartContext);
    
    const cartItem = cartItems.find(item => item.id === product.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCart(product);
    };

    const handleIncrement = (e) => {
        e.stopPropagation();
        addQuantity(product.id);
    };

    const handleDecrement = (e) => {
        e.stopPropagation();
        reduceQuantity(product.id);
    };

    // Format price calculation
    const formatPrice = (unitPrice, qty) => `$${(unitPrice * qty).toFixed(2)}`;

    return (
        <button 
            className="add-to-cart" 
            onClick={quantity === 0 ? handleAddToCart : null}
            aria-label={quantity === 0 ? `Add ${product.name} to cart` : `${product.name} quantity controls`}
        >
            {quantity === 0 ? (
                <>
                    <i className="fa-solid fa-bag-shopping" aria-hidden="true"></i> Add to Cart
                </>
            ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <button 
                            type="button" 
                            onClick={handleDecrement}
                            style={counterBtnStyle}
                            aria-label="Decrease quantity"
                        >
                            −
                        </button>
                        <span style={{ minWidth: '20px', textAlign: 'center', fontWeight: 'bold' }}>
                            {quantity}
                        </span>
                        <button 
                            type="button" 
                            onClick={handleIncrement}
                            style={counterBtnStyle}
                            aria-label="Increase quantity"
                        >
                            +
                        </button>
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>
                        {formatPrice(product.price, quantity)}
                    </span>
                </div>
            )}
        </button>
    );
}

const counterBtnStyle = {
    width: '24px',
    height: '24px',
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '1',
    padding: 0,
    margin: 0,
    cursor: 'pointer',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export default ProductButton;