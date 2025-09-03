import React from 'react'
import { useNavigate } from 'react-router-dom';
import './EmptyFavorite.css';
import heart from "./Images/heart-image-2.webp"

const EmptyFavorite = () => {

    const navigate = useNavigate()

    const handleContinueShopping = () => {
        navigate('/Store')
    }
  return (
    <div className="empty-container">

        <img src={heart} alt="" />
        <h2>Your favorite is empty</h2>
        <p>Items added to your favorites will display here</p>

        <button onClick={handleContinueShopping}>Continue Shopping</button>
    </div>
  )
}

export default EmptyFavorite;
