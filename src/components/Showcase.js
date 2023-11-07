import React from 'react';
import './stylesheets/Showcase.scss'
import ManSuit from '../assets/images/man-in-suit.svg';
import BlueDesign from '../assets/images/blue-design.svg';
import WhiteLines from '../assets/images/white-lines.svg';

const Showcase = () => {
  return (
    <section class="showcase">
        <div className="container">
            <div>
                
                <h1>We Provide The Best Business
                    Solutions
                </h1>

                <p>
                    Establish your vision and value proposition and turn them into testable prototypes.
                </p>
                    
                <a href="login.html" className="button">Get Consulting<i className="fa-regular fa-arrow-up-right"></i></a>
                    
                <a href="login.html" className="button button-transparent">Learn More<i className="fa-regular fa-arrow-up-right"></i></a>
            </div>

            <div className="image-container">
                <img src= {ManSuit} alt="man in suit" />
                <img src= {BlueDesign} className="blue-design" alt="" />
            </div>

        </div>
        
        <img src= {WhiteLines} className="white-lines" alt="" />
    </section>
  )
}

export default Showcase