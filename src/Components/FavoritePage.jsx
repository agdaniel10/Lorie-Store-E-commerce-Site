import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "./data/Products";
import { FavoriteContext } from "./FavoriteContext";
import ProductButton from "./ProductButton";
import EmptyFavorite from "./EmptyFavorite";
import './FavoritePage.css';

function FavoritesPage() {
    const { favoriteItems, removeFromFavorite, resetFavorite } = useContext(FavoriteContext);
    const navigate = useNavigate();

    const handleImageClick = (page) => {
        navigate(`/product/${page.id}`);
    };

    if (favoriteItems.length === 0) {
        return <EmptyFavorite />;
    }

    return (
        <>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th className="item-display">Category</th>
                            <th className="item-display">Type</th>
                            <th className="item-display">Status</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {favoriteItems.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <div className="first-column">
                                        <button 
                                            onClick={() => removeFromFavorite(item.id)}
                                            aria-label={`Remove ${item.name} from favorites`}
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>

                                        <div className="product-image">
                                            <img 
                                                onClick={() => handleImageClick(item)}
                                                style={{ cursor: 'pointer' }}
                                                aria-label={`View details for ${item.name}`}
                                                src={item.image}
                                                alt={item.name}
                                            />
                                        </div>

                                        <div className="product-name-container">
                                            <p className="product-name">{item.name}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="item-display">
                                    <div className="item-category">
                                        <p>{item.categoryDisplay}</p>
                                    </div>
                                </td>
                                <td className="item-display">{item.type}</td>
                                <td className="item-display">
                                    <p className="status">In stock</p>
                                </td>
                                <td>
                                    <p className="table-item-price">${item.price}.00</p>
                                </td>
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
                <button onClick={() => resetFavorite()}>
                    Reset Favorites
                </button>
            </div>
        </>
    );
}

export default FavoritesPage;