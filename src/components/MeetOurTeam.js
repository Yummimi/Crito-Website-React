import React from 'react';
import './stylesheets/MeetOurTeam.scss';
import Kristine from '../assets/images/kristine.png';
import Mark from '../assets/images/mark.png';
import Kimberly from '../assets/images/kimberly.png';
import Justin from '../assets/images/justin.png';
import { Link } from "react-router-dom";



const MeetOurTeam = () => {
  return (
    <section className="bg-yellow">
        <section className="meet-our-team">

            <div className="container">

                <p className="describing-text">Meet Our Team</p>

                <div className="title-box">

                    <h2>Experience Team Members</h2>

                    <div className="btn-box">

                        <Link to="/team" className="button button-transparent">Browse Team<i className="fa-regular fa-arrow-up-right"></i></Link>

                    </div>

                </div>

                <div className="content-box">

                    <div>

                        <img src={Kristine} />
                        <h3>Kristine Palmer</h3>
                        <p>Chef Operation Officer</p>

                    </div>

                    <div>

                        <img src={Mark} />
                        <h3>Mark Aubri</h3>
                        <p>Senior Consultant</p>

                    </div>

                    <div>

                        <img src={Kimberly} />
                        <h3>Kimberly Hansen</h3>
                        <p>Senior Consultant</p>

                    </div>

                    <div>

                        <img src={Justin} />
                        <h3>Justin Willoman</h3>
                        <p>Senior Tech Consultant</p>

                    </div>

                </div>

                <div className="icons">

                    <Link to="#"><i className="fa-solid fa-circle"></i></Link>
                    <Link to="#"><i className="fa-solid fa-circle"></i></Link>
                    <Link to="#"><i className="fa-solid fa-circle"></i></Link>
                    <Link to="#"><i className="fa-solid fa-circle"></i></Link>
                    <Link to="#"><i className="fa-solid fa-circle"></i></Link>

                </div>

                <div className="btn-box">

                    <Link to="/team" className="button button-transparent">Browse Team<i className="fa-regular fa-arrow-up-right"></i></Link>

                </div>

            </div>

        </section>
    </section>
  )
}

export default MeetOurTeam