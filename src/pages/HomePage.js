import React from 'react';
import {faInstagram, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {Link} from 'react-router-dom';
import { ExternalLink } from 'react-external-link';

function HomePage() {

    // const githubLink = () => {
    //     window.location.href = "https://github.com/Jammerref2015";
    //     return null;
    //   }

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
            
            <ExternalLink href="https://www.instagram.com/adey1981/" className="icon-holder">
                <FontAwesomeIcon icon={faInstagram} className="icon ig" />
            </ ExternalLink>
           
            <ExternalLink href="https://github.com/Jammerref2015" className="icon-holder">
                <FontAwesomeIcon icon={faGithub} className="icon gh" />
            </ ExternalLink>

            <ExternalLink href="https://www.linkedin.com/in/adrian-looney/" className="icon-holder">
                <FontAwesomeIcon icon={faLinkedin} className="icon li" />
            </ ExternalLink>
          </div>
        </header>
      </div>
    );
}

export default HomePage;