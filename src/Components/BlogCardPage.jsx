import React from 'react'
import { blogcard } from "./blogcard"
import "./BlogCardPage.css";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import phoneImage from "./blogsImages/phone-image.webp"

function BlogCardPage () {

    const navigate = useNavigate();

    const { id } = useParams();
    const getCard = blogcard.find(item => item.id === parseInt(id));

    const handlePreviousButton = () => {
        navigate(-1)
    }

    if (!getCard) {
        return <h1>No page found</h1>
    }


    return (

        <>
        <div className='blog-card-page-container'>
            <img src={getCard.image} alt={getCard.category} className='card-page-image' />

            <p className="blog-card-page-date"><i className="fa-solid fa-calendar-week"></i> {getCard.date}</p>
            <h1>{getCard.cardTitle}</h1>

            <div className='first-paragraph-container'>
                <p>
                    Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little children, and ships named “Enterprise.”

                    The game’s not big enough unless it scares you a little. Wait a minute – you’ve been declared dead. You can’t give orders around here. I’ll alert the crew. What? We’re not at all alike! Flair is what marks the difference between artistry and mere competence.
                </p>
            </div>

            <div className='phone-image-container'>
                <img className='phone-image' src={phoneImage} alt="" />
            </div>

            <div className='lorem-header'>
                <h2>
                    Lorem ipsum dolor sit amet
                </h2>
            </div>

            <div  className='second-paragraph-container'>
                <p>
                    Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little children, and ships named “Enterprise.”

                    Did you come here for something in particular or just general Riker-bashing? And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little children, and ships named “Enterprise.”

                    Lorem ipsum dolor sit amet.
                    At vero eos et accusamus et iusto odio.
                    Excepteur sint occaecat cupidatat non proident.
                    And blowing into maximum warp speed, you appeared for an instant to be in two places at once. We have a saboteur aboard. We know you’re dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf.

                    Could someone survive inside a transporter buffer for 75 years? Fate. It protects fools, little children, and ships named “Enterprise.”
                </p>
            </div>
        </div>

        <div className='back-to-blog-btn'>
            <button onClick={handlePreviousButton}><i className="fa-solid fa-less-than"></i> Back to blog</button>
        </div>

        </>


    )
}

export default BlogCardPage;