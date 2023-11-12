import React from 'react'
import './stylesheets/Features.scss';
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className="features">
        
        <div className="container">

            <div className="title">

                <p className="describing-text">Features</p>

                <h2>Our Accounting is
                    trusted by thousand
                    of companies
                </h2>

                <div className="btn-box">
                    <Link to="*" className="button">Learn More<i className="fa-regular fa-arrow-up-right"></i></Link>
                </div>

            </div>

            <div className="information">

                <div className="buis">
                    <i className="fa-regular fa-handshake"></i>
                    <h3>Business Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="start">
                    <i className="fa-regular fa-lightbulb-on"></i>
                    <h3>Startup Business</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="fin">
                    <i className="fa-solid fa-chart-mixed-up-circle-dollar"></i>
                    <h3>Financial Advice</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="risk">
                    <i className="fa-regular fa-box-open-full"></i>
                    <h3>Risk Management</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>

            </div>

        </div>

    </section>
  )
}

export default Features