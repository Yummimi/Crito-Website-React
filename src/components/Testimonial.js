import React from 'react';
import './stylesheets/Testimonial.scss';
import Cassandra from '../assets/images/cassandra.svg';
import Amanda from '../assets/images/amanda.svg';
import Jack from '../assets/images/jack.svg';
import { Link } from "react-router-dom";



const Testimonial = () => {
  return (
    <section className= "bg-yellow">
        <section className="testimonial">
    
            <div className="container">

                <div className="title-box">

                    <p className="describing-text">Testimonial</p>
                    <h2>What Our Client Says</h2>

                </div>

                <div className="content-box">

                    <div className="review">

                        <div className="icons first">

                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>

                        </div>

                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>

                        <div className="user">

                            <img src={Cassandra} />

                            <div className="text">
                                <h3>Cassandra Warren</h3>
                                <p>Business Manager, Dorfus</p>
                            </div>

                        </div>

                    </div>

                    <div className="review">

                        <div className="icons">

                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>

                        </div>

                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>

                        <div className="user">

                            <img src={Amanda} />

                            <div className="text">

                                <h3>Amanda Tulling</h3>
                                <p>Senior Developer, Square</p>

                            </div>

                        </div>

                    </div>

                    <div className="review">

                        <div className="icons">

                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>

                        </div>

                        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>

                        <div className="user">

                            <img src={Jack} className="jack" />

                            <div className="text">

                                <h3>Jack McDogglas</h3>
                                <p>Key Account Manager, Gobona</p>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="btn-box">

                    <Link to="/reviews" className="button button-black">All Reviews<i className="fa-regular fa-arrow-up-right"></i></Link>
                </div>

            </div>

        </section>
    </section>
  )
}

export default Testimonial