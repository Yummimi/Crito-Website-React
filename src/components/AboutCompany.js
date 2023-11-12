import React from 'react'
import './stylesheets/AboutCompany.scss';
import Founder from '../assets/images/founder.png';
import { Link } from "react-router-dom"

const AboutCompany = () => {
  return (
    <section className="about-company">

        <div className="container">

            <div className="founder">

                <img src={Founder} alt="woman standing in a hallway holding a tablet" />

                <div className="blue-box">

                    <h3>Samantha Brown, <span>Founder</span></h3>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>

                </div>

            </div>

            <div className="info">

                <p className="describing-text">About Company</p>

                <h2>We Are Business Consulting & Credit Repair Experts</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.
                    <br />
                    <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>

                <div className="button-box">

                    <Link to="*" className="button button-black">Learn More<i className="fa-regular fa-arrow-up-right"></i></Link>

                    <Link to="*" className="button button-circle"><i className="fa-solid fa-play"></i>Intro Video</Link>

                </div>

            </div>

        </div>

    </section>
  )
}

export default AboutCompany