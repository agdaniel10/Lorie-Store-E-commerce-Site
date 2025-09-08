import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from './data/Products';
import "./Search.css"


function Search () {

    const [input, setInput] = useState('')
    const [click, setClick] = useState(false)

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleClearInput = () => {
        setInput('')
    }

    const filteredProducts = products.filter((item) => 
        item.name.toLowerCase().includes(input.toLocaleLowerCase())
    );

    const handleSearchedItemDetails = (page) => {
        navigate(`/product/${page.id}`)
    }

    const handleClick = () => [
        setClick(!click)
    ]


    return (

        <div className="search-container">

            <div className= {`search-delete-container ${input ? 'open' : ''}`}>
                <input 
                type="text" 
                value={input}
                onChange={(e) => handleInputChange(e)}
                className="search-input" 
                placeholder="Search for products..." 
                />
                <button onClick={handleClearInput}><i className="fa-solid fa-x"></i></button>
            </div>


            {input && (
                <div className="search-results">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <>

                            <div 
                            className="filtered-product-general-div" 
                            onClick={() => handleSearchedItemDetails(product)}
                            style={{ cursor: 'pointer'}}
                            >
                                <div className="filtered-image">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className="filtered-image-details">
                                    <h4 className="product-name">{product.name}</h4>
                                    <p key={index} className="product-decription ">{product.description}</p>
                                </div>
                            </div>
                            </>

                        ))
                    ): (
                        <p>No product found</p>
                    )}
                </div>
            )}

        </div>
    )
}

export default Search;