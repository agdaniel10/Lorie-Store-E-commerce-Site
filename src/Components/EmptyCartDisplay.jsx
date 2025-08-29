import React from "react";
import emptyCart from './Images/empty-Cart.jpg'
import './EmptyCartDisplay.css'

function EmptyCartDisplay () {

    return (
        <div className="empty-cart-container">
            <div className="empty-cart-space-container">
                <img src={emptyCart} alt="empy-cart-image" />
                <h1>Your cart is feeling lonely</h1>
                <p>Looks like you haven't added anything yet. Lets find something amazing!</p>
                <button>Discover Products</button>
            </div>

        </div>
    )
}

export default EmptyCartDisplay;