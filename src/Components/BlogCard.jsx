import React from "react";
import './BlogCard.css'
import { blogcard } from "./blogcard";
import { useNavigate } from "react-router-dom";

function BlogCard () {


    const navigate = useNavigate()

    const handlecardnavigation = (id) => {
        navigate(`/blogcard/${id}`)
    }
    return (

        <>
            {blogcard.map((item) => (
                <div className="card-blog" key={item.id}>
                    <div className="card-space">
                        <img 
                            src={item.image} 
                            alt={item.category} 
                            onClick={() => handlecardnavigation(item.id)}
                            style={{ cursor: 'pointer'}}
                        />
                        <div className="lifestyle">
                            <p className="card-category">{item.category}</p>
                            <p className="card-date"><i className="fa-solid fa-calendar-week"></i> {item.date}</p>
                        </div>

                        <p 
                            className="card-title" 
                            onClick={() => handlecardnavigation(item.id)}
                            style={{ cursor: 'pointer'}}
                        >
                            {item.cardTitle}
                        </p>
                    </div>
                </div>
            ))}

        </>
    )
}

export default BlogCard;