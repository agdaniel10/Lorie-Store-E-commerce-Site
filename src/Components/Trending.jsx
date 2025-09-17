import { products } from "./data/Products";
import './Trending.css'
import ProductCard from "./ProductCard";

function Trending() {

    return (
        <div className="Container-Trending">
            <h3>TRENDING PRODUCTS</h3>
            <div className="product-container">
                {products.map((product) => (
                    <ProductCard  key={product.id} product={product}/>
                ))}
            </div>
        </div>
    )
}

export default Trending;