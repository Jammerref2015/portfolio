import React from 'react';
import about from '../img/about.jpg'

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am <span> Superman</span></h4>
                <p className="about-text">
                    Lots of placeholder text right here. Lots of placeholder text right here. Lots of placeholder text right here.
                    Lots of placeholder text right here. Lots of placeholder text right here. Lots of placeholder text right here.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p>: Adrian Looney</p>
                        <p>: 39</p>
                        <p>: Irish</p>
                        <p>: English</p>
                        <p>: Needs to go here? Maybe?</p>
                        <p>: Ireland</p>
                    </div>
                    
                </div>
                <button className="btn">Download CV</button>
            </div>
        </div>
    )
};

export default ImageSection;