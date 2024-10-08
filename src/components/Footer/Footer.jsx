import React, { useState } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer-container">
            <h2 className="footer-title">Get In Touch</h2>
            <p className="footer-subtitle">I’d love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to drop a message.</p>
            
            <div className="social-icons">
                <a href="mailto:tomislav.lovrencic1999@gmail.com" className="social-icon" aria-label="Email">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href="https://linkedin.com/in/tomislav-lovrencic" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/TomislavLovrencic" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://instagram.com/tomislavlovrencic" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://twitter.com/tomislavlovrencic" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>
            <div className="footer-extra">
                <p className="footer-handcrafted">
                    Handcrafted with <span className="heart-emoji">❤️</span> by Tomislav Lovrenčić
                </p>
            </div>
        </footer>
    );
};

export default Footer;
