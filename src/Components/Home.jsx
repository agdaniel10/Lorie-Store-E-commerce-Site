import React, { useState } from "react";
import sectionImage from "./Images/heroImage.webp";
import caps from "./Images/caps.webp"
import jackets from "./Images/jackets.webp"
import bags from "./Images/Bags.webp"
import Jewelries from "./Images/jewelries.webp"
import suitesSec from "./Images/suites-sec.webp"
import shoes from "./Images/shoes.webp"
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Home.css'

// ----- brands ----
import armani from "./Images/armani.webp"
import nike from "./Images/Nike.webp"
import cartier from "./Images/cartier.webp"
import chanel from "./Images/chenel.webp"
import balenciaga from "./Images/balenciaga.webp"
import luis from "./Images/luis.webp"
import prada from "./Images/prada.webp"
import fendi from "./Images/prada.webp"

import truck from "./Images/trucktruck.jpg"
import rolex from "./Images/rolex.webp"
import hermes from "./Images/hermes.webp"

import office from "./Images/office-1.webp"

import { products, categories } from "./data/Products.jsx";
import ProductCard from "./ProductCard";
import BlogCard from "./BlogCard.jsx";


function Home() {

    const [selectedCategory, setSelectedCategory] = useState('all')

    // Filter products based on selected category
    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory)

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId)
    }

    return (
        <>
            <section>
                <div className="SectionContainer">
                    <img src={sectionImage} alt="Hero banner" />
                </div>
            </section>

            {/* // -----Main section div---- */}

            <section className="MainSection">
                <div className="MainSectionContainer">
                    <div className="cartegories-btns">
                        <div className="Single-btns">
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    className={selectedCategory === category.id ? 'active' : ''}
                                    onClick={() => handleCategoryClick(category.id)}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>

                        <div className="seeall-btn">
                            <button 
                                className={selectedCategory === 'all' ? 'active' : ''}
                                onClick={() => handleCategoryClick('all')}
                            >
                                See All
                            </button>
                        </div>
                    </div>
                </div>

                <div className="Cards-Container">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}

                    {filteredProducts.length === 0 && (
                        <div className="no-products">
                            <p>No products found in this category.</p>
                        </div>
                    )}
                </div>

                {/* -------- Popular Categories Section -------- */}

                <div className="Popular-Categories-Section">
                    <div className="second-popular-categories">
                        <h3>POPULAR CARTEGORIES</h3>
                        <div className="popular-items">
                            <div className="popular-single-items">
                                <img src={caps} alt="Caps" />
                                <div className="category-info">
                                    <div class="category-name">Jewelries</div>
                                    <div class="category-count">(2) items Available</div>
                                </div>
                            </div>

                            <div className="popular-single-items">
                                <img src={jackets} alt="jackets" />
                                <div className="category-info">
                                    <div class="category-name">Jewelries</div>
                                    <div class="category-count">(5) items Available</div>
                                </div>
                            </div>

                            <div className="popular-single-items">
                                <img src={shoes} alt="shoes image" />
                                <div className="category-info">
                                    <div class="category-name">Jewelries</div>
                                    <div class="category-count">(6) items Available</div>
                                </div>
                            </div>

                            <div className="popular-single-items">
                                <img src={bags} alt="bags" />
                                <div className="category-info">
                                    <div class="category-name">Jewelries</div>
                                    <div class="category-count">(1) items Available</div>
                                </div>
                            </div>

                            <div className="popular-single-items">
                                <img src={suitesSec} alt="" />
                                <div className="category-info">
                                    <div class="category-name">Jewelries</div>
                                    <div class="category-count">(6) items Available</div>
                                </div>
                            </div>

                            <div className="popular-single-items">
                                <img src={Jewelries} alt="jackets" />
                                <div className="category-info">
                                    <div class="category-name">Jewelries</div>
                                    <div class="category-count">(2) items Available</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shop-by-brand">
                    <div className="second-shop-by-brand">
                        <div className="shop-view">
                            <p>SHOP BY BRANDS</p>
                            <button>View All</button>
                        </div>

                        {/* <div className="brand-general-div-wrapper"> */}
                        <div className="brand-general-div">
                            <div className="brand-image"><img src={nike} alt="armani" /></div>
                            <div className="brand-image"><img src={armani} alt="armani" /></div>
                            <div className="brand-image"><img src={cartier} alt="armani" /></div>
                            <div className="brand-image"><img src={balenciaga} alt="armani" /></div>
                            <div className="brand-image"><img src={prada} alt="armani" /></div>
                            <div className="brand-image"><img src={chanel} alt="armani" /></div>
                            <div className="brand-image"><img src={luis} alt="armani" /></div>
                            <div className="brand-image"><img src={fendi} alt="armani" /></div>
                            <div className="brand-image"><img src={rolex} alt="armani" /></div>
                            <div className="brand-image"><img src={hermes} alt="armani" /></div>
                        </div>
                        {/* </div> */}

                        <div className="logistics">
                            <div className="logistics-element">
                                <img src={truck} alt="" />
                                <div className="logistics-info">
                                    <p className="bold">Free Delivery</p>
                                    <p>Free shipping over $100</p>
                                </div>
                            </div>

                            <div className="logistics-element">
                                <img src={truck} alt="" />
                                <div className="logistics-info">
                                    <p className="bold">Free Return</p>
                                    <p>Free shipping over $100</p>
                                </div>
                            </div>

                            <div className="logistics-element">
                                <img src={truck} alt="" />
                                <div className="logistics-info">
                                    <p className="bold">Customer Support</p>
                                    <p>Friendly 24/7 customer support</p>
                                </div>
                            </div>

                            <div className="logistics-element">
                                <img src={truck} alt="" />
                                <div className="logistics-info">
                                    <p className="bold">Money Back Guarantee</p>
                                    <p>Quality checked by our team</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* --------------Blogs div--------- */}


                <div className="latest-view">
                    <h3>LATEST BLOGS</h3>
                    <button>View All</button>
                </div>

                <div className="Blog-container">
                    <BlogCard />
                </div>
            </section>
    </>
    )
}

export default Home;

