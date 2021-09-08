import React from 'react';
// import about from '../img/about.jpg'
// import testImage from '../img/About_2-min.jpg'
import testImage from '../img/about.gif'

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={testImage} alt="About me photo." />
            </div>
            <div className="about-info">
                <h4>I am a<span> Junior Web Developer</span></h4>
                <p className="about-text">
                    Hello, my name is Adrian Looney. I am a Junior Web Developer. I am passionate about learning and I've many 
                    years as a student. I am continuously learning every day as the world of web development is big, there 
                    are always new things to learn! What makes me tick? Its websites with beautiful UX.(As well as good coffee, craft beer). In my free time, 
                    I play guitar, learning French as I've always wanted to speak a second language. I'm a big movie buff. 
                    I love to volunteer at film festivals.  I am also a roller derby referee, a sport that has brought me to 
                    various places around the UK, Europe, and Scandinavia. 
                </p>
                <p className="about-text">
                    This is version 1.0 of my portfolio site. I created it using ReactJS / Sass with some help from Photoshop. The color scheme and 
                    font are based on the cover of a very popular music record released in 1997 by the British band called Radiohead.  
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Country</p>
                    </div>
                    <div className="right-section">
                        <p>: Adrian Looney</p>
                        <p>: Irish</p>
                        <p>: English(Fluent), French(A2)</p>
                        <p>: Ireland</p>
                    </div>
                    
                </div>
                <button className="btn">Download CV</button>
            </div>
        </div>
    )
};

export default ImageSection;