import React from 'react';
import './stylesheets/Header.scss';
import HeaderLogo from '../assets/images/Logo.svg';
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
        
        <div className="container">
            <img src= {HeaderLogo} alt="Logo" />
            <div className="menu">

                <i className="fa-solid fa-bars menu-icon"></i>

                <div className="top-menu">

                    <div className="contact-information">

                        <div className="content-box">
                            <i className="fa-regular fa-phone-volume"></i>
                            +46 (8) 121 470 50
                        </div>

                        <div className="content-box">
                            <i className="fa-regular fa-envelope"></i>
                            info@crito.com
                        </div>

                        <div className="content-box last">
                            <i className="fa-regular fa-location-dot"></i>
                            Sveavägen 31, 111 34 STOCKHOLM
                        </div>

                    </div>

                    <div className="social-media">

                            <Link to="https://www.facebook.com/" target= "_blank"><i className="fa-brands fa-facebook"></i></Link>


                            <Link to="https://twitter.com/?lang=en" target= "_blank"><i className="fa-brands fa-x-twitter"></i></Link>


                            <Link to="https://www.instagram.com/" target= "_blank"><i className="fa-brands fa-instagram"></i></Link>


                            <Link to="https://www.linkedin.com/" target= "_blank"><i className="fa-brands fa-linkedin"></i></Link>
                    </div>

                </div>

                <div className="bottom-container">

                    <nav>
                        <div>
                            <Link to="/" className="active">Home</Link>
                        </div>

                        <div>
                            <Link to="/services">Service</Link>
                        </div>

                        <div>
                            <Link to="/news">News</Link>
                        </div>

                        <div>
                            <Link to="/contacts">Contact</Link>
                        </div>
                    </nav>

                    <Link to="/login" className="button">Login<i className="fa-regular fa-arrow-up-right"></i></Link>

                </div>

            </div>

        </div>

    </header>
  )
}

export default Header