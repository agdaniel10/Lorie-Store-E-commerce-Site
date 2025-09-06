import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import { products } from "./data/Products";
import './ProductDetails1.css'
import ProductButton from "./ProductButton";

import { FavoriteContext } from "./FavoriteContext";

const ProductDetails1 = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const {favoriteItems, toggleFavorite, addToFavorite, removeFromFavorite} = useContext(FavoriteContext);


    if (!product) {
        return <div>Products not found</div>
    }

    return (
        <div className="Product-details-container">
            <div className="product-detail-image">
                <img src={product.image} alt={product.name} />
            </div>

            <div className="product-info-section">
                <h1>{product.name}</h1>
                <p className="desc">{product.description}</p>

                <div className="rating">
                    {[...Array(product.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i> 
                    ))}
                </div>

                <div className="price">${product.price}</div>
                {product.stock > 0 ? <p className="instock">In Stock {product.stock}</p> : <div className="stocks">Out of Stock</div>}

                <div className="btn-love-xtics">
                    <ProductButton product={product} />
                    <button className="heart" onClick={() => toggleFavorite(product)}>
                        {favoriteItems.find((item) => item.id === product.id) ? <i class="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart" aria-hidden="true"></i>}
                    </button>
                    <div><p>{product.name}</p></div>
                </div>

                <div className="xtics">
                    <div className="div-xtics">
                        <i class="fa-solid fa-brush"></i>
                        <p>Compare Color</p>
                    </div>
                    <div className="div-xtics">
                        <i class="fa-solid fa-question"></i>
                        <p>Ask a question</p>
                    </div>
                    <div className="div-xtics">
                        <i class="fa-solid fa-truck-fast"></i>
                        <p>Delivery and Return</p>
                    </div>
                    <div className="div-xtics">
                        <i class="fa-solid fa-share"></i>
                        <p>Share</p>
                    </div>
                </div>

                <div className="delivery">
                    <div className="free-delivery">
                        <i class="fa-solid fa-truck"></i>
                        <div className="details">
                            <p>Free Delivery</p>
                            <p>Enter your Postal code for Delivey Availability.</p>
                        </div>
                    </div>

                    <div className="free-delivery">
                        <i class="fa-solid fa-arrow-rotate-left"></i>
                        <div className="details">
                            <p>Return Delivery</p>
                            <p>Free 30days Delivery Returns. Details</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetails1;