import React from "react";
import emptyCart from './Images/empty-Cart.jpg'
import './EmptyCartDisplay.css'
import { useNavigate } from "react-router-dom";
function EmptyCartDisplay () {

    const navigate = useNavigate()

    const handleDiscoverProducts = () => {
        navigate('/Store')
    }

    return (
        <div className="empty-cart-container">
            <div className="empty-cart-space-container">
                <img src={emptyCart} alt="empy-cart-image" />
                <h1>Your cart is feeling lonely</h1>
                <p>Looks like you haven't added anything yet. Lets find something amazing!</p>
                <button onClick={handleDiscoverProducts}>Discover Products</button>
            </div>

        </div>
    )
}

export default EmptyCartDisplay;