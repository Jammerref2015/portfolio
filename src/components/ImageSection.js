import React from 'react';
// import about from '../img/about.jpg'
import testImage from '../img/About_2-min.jpg'

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={testImage} alt="About me photo." />
            </div>
            <div className="about-info">
                <h4>I am a<span> Junior Web Developer</span></h4>
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
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p>: Adrian Looney</p>
                        <p>: 40</p>
                        <p>: Irish</p>
                        <p>: English</p>
                        <p>: Ireland</p>
                    </div>
                    
                </div>
                <button className="btn">Download CV</button>
            </div>
        </div>
    )
};

export default ImageSection;