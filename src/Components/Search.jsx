import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from './data/Products';
import "./Search.css"

function Search({ isVisible, onClose }) { // Add onClose prop
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    if (!isVisible) return null;

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleClearInput = () => {
        setInput('')
    }

    const filteredProducts = products.filter((item) => 
        item.name.toLowerCase().includes(input.toLowerCase())
    );

    const handleSearchedItemDetails = (page) => {
        navigate(`/product/${page.id}`)
        onClose() // Fixed: was "onclose()" - JavaScript is case sensitive
    }

    return (
        <div className="search-container">

            <div className={`search-delete-container ${input ? 'open' : ''}`}>
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => handleInputChange(e)}
                    className="search-input" 
                    placeholder="Search for products..." 
                    autoFocus // Automatically focus when search opens
                />
                <button onClick={handleClearInput}>
                    <i className="fa-solid fa-x"></i>
                </button>
            </div>

            {input && (
                <div className="search-results">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => ( // Removed index parameter since we're not using it properly
                            <div 
                                key={product.id} // Use product.id as key instead of index
                                className="filtered-product-general-div" 
                                onClick={() => handleSearchedItemDetails(product)}
                                style={{ cursor: 'pointer'}}
                            >
                                <div className="filtered-image">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className="filtered-image-details">
                                    <h4 className="product-name">{product.name}</h4>
                                    <p className="product-description">{product.description}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No product found</p>
                    )}
                </div>
            )}
        </div>
    )
}

export default Search;