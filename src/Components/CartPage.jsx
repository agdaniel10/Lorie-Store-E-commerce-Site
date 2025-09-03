import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import bag from "../assets/bag.png"
import "./CartPage.css"
import { useNavigate } from "react-router-dom";
import EmptyCartDisplay from "./EmptyCartDisplay";
import { FavoriteContext } from "./FavoriteContext";



function CartPage() {
    const { cartItems, removeFromCart, addQuantity, reduceQuantity, resetCart } = useContext(CartContext)
    const { favoriteItems, toggleFavorite} = useContext(FavoriteContext)
    const navigate = useNavigate();


    const handleImageClick = (page) => {
        navigate(`/product/${page.id}`)
    } 

    const formatPrice = (unitPrice, qty)  => `$${(unitPrice * qty).toFixed(2)}`
    const total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    const originalPrice = cartItems.reduce((acc, item) => acc + item.originalPrice * item.quantity, 0)
    const discount = originalPrice- total;

    return (

        <>

        {cartItems.length === 0 ? < EmptyCartDisplay/> :
            <div className="shopping-cart-container">

                <div className="shopping-cart-title">
                    <img src={bag} alt="this is a bag" /> 
                    <p>Agada Shopping Cart</p>
                </div>

                <div className="cart-main-container">
                    <div className="cart-items-details">
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item.id}>
                                    <div className="cart-list-border">
                                        <div className="cart-list-container">
                                            <div
                                                className="cart-list-image"
                                                onClick={() => handleImageClick(item)}
                                                style={{cursor: 'pointer'}}
                                                role="button"
                                                tabIndex={0}
                                                aria-label={`View details for ${item.name}`}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' || e.key === ' ') {
                                                        handleImageClick(item)
                                                    }
                                                }}
                                            >
                                                <img src={item.image} alt={item.name} />
                                            </div>

                                            <div className="cart-list-properties">
                                                <div className="cart-list-name-price">
                                                    <p className="item-name-paragraph">{item.name}</p>
                                                    <p>{formatPrice(item.price, item.quantity)}</p>
                                                </div>
                                                

                                                <p className="cart-var">
                                                    Variant: <span>
                                                        {item.category 
                                                        ? item.category.charAt(0).toUpperCase() + item.category.slice(1).toLowerCase() 
                                                        : ''
                                                        }
                                                    </span>
                                                </p>
                                                <p className="cart-var">Status: <span>New</span></p>

                                                <div className="cart-list-bottom-items">
                                                    <div className="cart-list-bottom-items-left">
                                                        <button className="btn-love-item" onClick={() => toggleFavorite(item)}> 
                                                            {favoriteItems.find((item1) => item1.id === item.id) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart" aria-hidden="true"></i>}
                                                        </button>
                                                        <button className="btn-remove" onClick={() => removeFromCart(item.id)}><i className="fa-solid fa-trash"></i></button>
                                                    </div>

                                                    <div className="cart-list-bottom-items-right">
                                                        <button onClick={() => reduceQuantity(item.id)}><i className="fa-solid fa-minus"></i></button>
                                                        <p>{item.quantity}</p>
                                                        <button onClick={() => addQuantity(item.id)}><i className="fa-solid fa-plus"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="cart-reset-container">
                            <button className="btn-reset-cart" onClick={() => resetCart()}>
                                <i className="fa-solid fa-refresh"></i> Reset Cart
                            </button>
                        </div>
                    </div>

                    <div className="cart-checkout-delivery-address">
                        <div className="cart-price-summary">
                            <div className="main-summary">
                                <h6>Order Summary</h6>

                                <div className="price-props">
                                    <div className="sub-total">
                                        <p>SubTotal</p>
                                        <p>${originalPrice}</p>
                                    </div>

                                    <div className="price-discount">
                                        <p>Discount</p>
                                        <p>${discount}</p>
                                    </div>
                                </div>

                                <div className="total">
                                    <p>Total</p>
                                    <p>${total}</p>
                                </div>

                                <button className="checkout">Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        }

        </>

    )
}

export default CartPage;