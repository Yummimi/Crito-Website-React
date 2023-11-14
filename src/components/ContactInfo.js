import React from 'react';
import './stylesheets/ContactInfo.scss';

const ContactInfo = () => {
  return (
    <section className="contact-info">

        <div className="container">

            <div>
                <div>
                    <div>
                        <i className="fa-regular fa-location-dot"></i>
                    </div>

                    <div>
                        <h3>Visit us</h3>
                        <p>Sveavägen 31</p>
                        <p>111 34 STOCKHOLM</p>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <i className="fa-regular fa-phone-volume"></i>
                    </div>
                    
                    <div>
                        <h3>Call us</h3>
                        <p>+46 (8) 121 470 50</p>
                        <p>+46 (8) 121 470 51</p>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <i className="fa-regular fa-envelope"></i>
                    </div>

                    <div>
                        <h3>Email us</h3>
                        <p>info@crito.com</p>
                        <p>support@crito.com</p>
                    </div>
                </div>
            </div>

        </div>

    </section>
  )
}

export default ContactInfo