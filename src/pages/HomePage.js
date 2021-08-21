import React from 'react';
import {faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
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
                        <FontAwesomeIcon icon={faInstagram} className="icon ig" />
                    </Link> 
                    <Link className="icon-holder">
                    <a href="https://www.apple.com" target="_blank"><FontAwesomeIcon icon={faGithub} className="icon gh"/>
                        </a>
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li" />
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;