import React from 'react';
import "./Contact.css"

function Contact() {

    return (
        <>
        <div className="Contact-container">

            <div className="Contact-mission-statement">
                <h1>Our Mission</h1>
                <p>At Cartella, we are dedicated to bringing innovative solutions that help businesses and individuals succeed. Our mission is to create exceptional products and experiences that empower our users and foster meaningful connections.</p>
            </div>

            <div className="Contact-us">
                <div className="contact-head"><h1>Contact Us</h1></div>
                <div className="Contact-number-form">
                    <div className="contacts">
                        <p>We're here to help! Reach out to us with any questions or concerns, and we’ll get back to you as soon as possible.</p>
                        <p><span>Email</span>: unogwuagada@gmail.com</p>
                        <p><span>Phone</span>: +234 7048556715</p>
                        <p><span>Address</span>: 123 Business Rd, City, Country</p>
                    </div>

                    <div className="Contact-forms">
                        <p>Full Name</p>
                        <input type="text" className="form-style" />
                        <p>Email Address</p>
                        <input type="text" className="form-style" />
                        <p>Message</p>
                        <div className="message-input">
                            <input type="text" className="form-style" />
                            <button>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;