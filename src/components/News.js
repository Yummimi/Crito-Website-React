import React from 'react';
import './stylesheets/News.scss';
import Mars25 from '../assets/images/25-mar.png';
import Mars17 from '../assets/images/17-mar.png';
import Mars13 from '../assets/images/13-mar.png';
import { Link } from "react-router-dom";



const News = () => {
  return (
    <section className="news">

        <div className="container">

            <p className="describing-text">Article & News</p>

        <div className="title-box">

        <h2>Get Every Single Articles & News</h2>

        <div className="btn-box">

            <Link to="/news" className="button button-transparent">Browse Articles<i className="fa-regular fa-arrow-up-right"></i></Link>

        </div>

        </div>

            <div className="content-box">

                <div>

                    <div className="image-container">

                        <img src={Mars25} alt="Lady sitting in an office and smiling" />

                        <div className="date">25<p>Mar</p></div>

                    </div>
                    
                    <p>Business</p>

                    <h3>How To Use Digitalization In The Classroom</h3>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>

            </div>

                <div>

                    <div className="image-container">

                        <img src={Mars17} alt="computer screen showing chat-gpt" />

                        <div className="date">17<p>Mar</p></div>

                    </div>

                    <p>Business</p>

                    <h3>How To Implement Chat GPT In Your Projects</h3>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>

                </div>

                <div>

                    <div className="image-container">

                        <img src={Mars13} alt="a few books and a phone on a table" />

                        <div className="date">13<p>Mar</p></div>

                    </div>

                    <p>Business</p>

                    <h3>The Guide To Support Modern CSS Design</h3>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    
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

                <Link to="/news" className="button button-transparent">Browse Article<i className="fa-regular fa-arrow-up-right"></i></Link>

            </div> 


        </div>
    
    </section>
  )
}

export default News