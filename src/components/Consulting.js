import React from 'react'
import './stylesheets/Consulting.scss';
import Consult from '../assets/images/Consulting.png';

const Consulting = () => {
  return (
    <section className="consulting">

        <div className="container">

            <div className="text-box">
                
                <p className="describing-text">Why Choose Us</p>
                <h2>Why We Are The Best Business Consulting Agency</h2>

                <div className="icon-and-text">

                    <div className="icon-box">

                        <i className="fa-regular fa-thumbs-up"></i>
                        <i className="fa-sharp fa-regular fa-book-sparkles"></i>
                        <i className="fa-sharp fa-regular fa-starship-freighter"></i>
                        <i className="fa-regular fa-head-side-brain"></i>
    
                    </div>
    
                    <div className="text">
    
                        <h3>Process Excellence</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
        
                        <h3>Strategic Planning</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
        
                        <h3>Experience Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
        
                        <h3>Artificial Inteligence </h3>
                        <p className="last">Lorem, ipsum dolor sit amet consectetur.</p>
    
                    </div>

                </div>

            </div>

            <div className="picture-box">

                <div className="grey-box"></div>
                <img src={Consult} alt="Two women sitting and talking in an office" />

            </div>
            
        </div>

    </section>
  )
}

export default Consulting