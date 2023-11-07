import React from 'react'
import './stylesheets/Header.scss'
import HeaderLogo from '../assets/images/Logo.svg'

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

                            <a href="https://www.facebook.com/" target= "_blank"><i className="fa-brands fa-facebook"></i></a>


                            <a href="https://twitter.com/?lang=en" target= "_blank"><i className="fa-brands fa-x-twitter"></i></a>


                            <a href="https://www.instagram.com/" target= "_blank"><i className="fa-brands fa-instagram"></i></a>


                            <a href="https://www.linkedin.com/" target= "_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>

                </div>

                <div className="bottom-container">

                    <nav>
                        <div>
                            <a href="index.html" className="active">Home</a>
                        </div>

                        <div>
                            <a href="#">Service</a>
                        </div>

                        <div>
                            <a href="#">News</a>
                        </div>

                        <div>
                            <a href="contact.html">Contact</a>
                        </div>
                    </nav>

                    <a href="login.html" className="button">Login<i className="fa-regular fa-arrow-up-right"></i></a>

                </div>

            </div>

        </div>

    </header>
  )
}

export default Header