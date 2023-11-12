import React from 'react';
import './stylesheets/Footer.scss';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
  <footer>
        
    <div className="container">

        <p>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>

        <div className="social-media">

            <Link to="https://www.facebook.com/" target= "_blank"><i className="fa-brands fa-facebook"></i></Link>


            <Link to="https://twitter.com/?lang=en" target= "_blank"><i className="fa-brands fa-x-twitter"></i></Link>


            <Link to="https://www.instagram.com/" target= "_blank"><i className="fa-brands fa-instagram"></i></Link>


            <Link to="https://www.linkedin.com/" target= "_blank"><i className="fa-brands fa-linkedin"></i></Link>

            
        </div>

    </div>

  </footer>
  )
}

export default Footer