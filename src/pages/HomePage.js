import React from 'react';
import {faFacebook, faYoutube, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Adrian Looney</span>
                </h1>
                <p className="h-sub-text"> 
                    Random placeholder text. Random placeholder text. Random placeholder text. Random placeholder text.
                    Random placeholder text.Random placeholder text.Random placeholder text.Random placeholder text.
                </p>
                <div className="icons">
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt" />
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;