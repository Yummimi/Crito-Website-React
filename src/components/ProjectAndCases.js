import React from 'react'
import './stylesheets/ProjectAndCases.scss';
import GrowYourBusiness from '../assets/images/grow-your-business.png';
import ResponsiveWebsite from '../assets/images/responsive-website.png';
import Results from '../assets/images/better-results.png';
import BusinessInsight from '../assets/images/business-insight.png';
import { Link } from "react-router-dom";

const ProjectAndCases = () => {
  return (
    <section className="project-and-cases">

        <div className="container">

            <div className="title">

                <p className="describing-text">Project & Case Studies</p>
                <h2>Let’s Looks Our Global Projects</h2>

            </div>

            <div className="content-box">

                <Link to="#">

                    <img src={GrowYourBusiness} alt="hands holding a newspaper" />

                    <h3>Grow your business</h3>
                    <p>Read More<i className="fa-regular fa-arrow-up-right"></i></p>

                </Link>

                <Link to="#">

                    <img src={ResponsiveWebsite} alt="a close up of some objects on top of a table" />

                    <h3>Why your client needs a responsive website</h3>
                    <p>Read More<i className="fa-regular fa-arrow-up-right"></i></p>

                </Link>

                <Link to="#">

                    <img src={Results} alt="a notebook on top of a desk" />

                    <h3>Educate your employees to get better results</h3>
                    <p>Read More<i className="fa-regular fa-arrow-up-right"></i></p>

                </Link>

                <Link to="#">

                    <img src={BusinessInsight} alt="a close up of a laptop on a desk" />

                    <h3>Business Insights is a important piece of your business</h3>
                    <p>Read More<i className="fa-regular fa-arrow-up-right"></i></p>

                </Link>

            </div>

            <div className="btn-box">

                <Link to="#" className="button button-black">All Recent Projects<i className="fa-regular fa-arrow-up-right"></i></Link>

            </div>

        </div>

    </section>
  )
}

export default ProjectAndCases