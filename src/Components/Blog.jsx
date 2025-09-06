import "./Blog.css";
import BlogCard from "./BlogCard.jsx";

function Blog() {

    return (
        <div className="blog-container">
            <h1>Our blogs</h1>

            <div className="blog-page-card-container">
                <BlogCard /> 
            </div>

        </div>
    )
}

export default Blog;