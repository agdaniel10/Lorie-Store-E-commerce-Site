import React from "react";
import { products } from "./data/Products";
import { useContext } from "react";
import { FavoriteContext } from "./FavoriteContext";
import ProductButton from "./ProductButton";
import { useNavigate } from "react-router-dom";
import './FavoritePage.css'

function FavoritesPage() {

    const { favoriteItems, removeFromFavorite, resetFavorite } = useContext(FavoriteContext);
    const navigate = useNavigate()

    const handleImageClick = (page) => {
        navigate(`/product/${page.id}`)
    }

    return (
        <>

        <div className="table-container">

            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {favoriteItems.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <div className="first-column">
                                    <button onClick={() => removeFromFavorite(item.id)}>
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                    <img 
                                    onClick={() => handleImageClick(item)}
                                    style={{cursor: 'pointer'}}
                                    aria-label={`View details for ${item.name}`}
                                    src={item.image}
                                    alt={item.name}
                                    />
                                    {item.name}
                                </div>
                            </td>
                            <td>{item.categoryDisplay}</td>
                            <td>{item.type}</td>
                            <td><p className="status">In stock</p></td>
                            <td>${item.price}.00</td>
                            <td>
                                <div className="product-btn">
                                    <ProductButton product={item} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <div className="reset-btn">
                <button onClick={() => resetFavorite()}>Reset Favorite</button>
        </div>

    </>
    )
}

export default FavoritesPage;