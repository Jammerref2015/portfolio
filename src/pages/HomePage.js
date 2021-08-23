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
            Random placeholder text. Random placeholder text. Random placeholder
            text. Random placeholder text. Random placeholder text.Random
            placeholder text.Random placeholder text.Random placeholder text.
          </p>
          <div className="icons">
            <Link className="icon-holder" target="_blank">
            <a
                href="https://www.instagram.com/adey1981/"
                target="_blank"
                rel="noreferrer"
              >
              <FontAwesomeIcon icon={faInstagram} className="icon ig" />
            </a>
            </Link>
            <Link className="icon-holder" target="_blank">
              <a
                href="https://github.com/Jammerref2015"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="icon gh" />
              </a>
            </Link>
            <Link className="icon-holder" target="_blank">
              <a
                href="https://www.linkedin.com/in/adrian-looney/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="icon li" />
              </a>
            </Link>
          </div>
        </header>
      </div>
    );
}

export default HomePage;