import React from 'react'
import './stylesheets/Footer.scss'

const Footer = () => {
  return (
  <footer>
        
    <div className="container">

        <p>&copy; 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>

        <div className="social-media">

            <a href="https://www.facebook.com/" target= "_blank"><i className="fa-brands fa-facebook"></i></a>


            <a href="https://twitter.com/?lang=en" target= "_blank"><i className="fa-brands fa-x-twitter"></i></a>


            <a href="https://www.instagram.com/" target= "_blank"><i className="fa-brands fa-instagram"></i></a>


            <a href="https://www.linkedin.com/" target= "_blank"><i className="fa-brands fa-linkedin"></i></a>

            
        </div>

    </div>

  </footer>
  )
}

export default Footer