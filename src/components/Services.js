import React from 'react'
import './stylesheets/Services.scss';
import { Link } from "react-router-dom"

const Services = () => {
  return (
    <section className="services">

        <div className="container">

            <div className="title">

                <p className="describing-text">Our Services</p>
                <h2>We Provide The Best Service For Consulting</h2>

            </div>

            <div className="boxes">

                <Link to="#" className="box1">
                    
                    <div className="box">

                        <div>

                            <h3>Business Advice</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            
                            <div className="arrow-box">
                                <i className="fa-regular fa-arrow-right"></i>
                            </div>
        
                        </div>

                    </div>
                </Link>

                <Link to="#" className="box2">

                    <div className="box">

                        <div>

                            <h3>Startup Business</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                            
                            <div className="arrow-box">
                                <i className="fa-regular fa-arrow-right"></i>
                            </div>
        
                        </div>

                    </div>
                </Link>

                <Link to="#" className="box3">

                    <div className="box">

                        <div>

                            <h3>Financial Advice</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>

                            <div className="arrow-box">
                                <i className="fa-regular fa-arrow-right"></i>
                            </div>
        
                        </div>

                    </div>
                </Link>

                <Link to="#" className="box4">

                    <div className="box">

                        <div>

                            <h3>Risk Management</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>

                            <div className="arrow-box">
                                <i className="fa-regular fa-arrow-right"></i>
                            </div>
        
                        </div>

                    </div>
                </Link>

            </div>

            <div className="btn-box">
                <Link to="/services" className="button button-transparent">Browse Services<i className="fa-regular fa-arrow-up-right"></i></Link>
            </div>

        </div>

    </section>
  )
}

export default Services