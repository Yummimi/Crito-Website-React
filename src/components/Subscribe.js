import React from 'react';
import './stylesheets/Subscribe.scss';
import GreyLine from '../assets/images/grey-line.svg';

const Subscribe = () => {
  return (
    <section className="subscribe">

        <div className="container">
            
            <h2>Get News Updates By Signup</h2>

            <form action="" name="subscribe">

                <label for="email" hidden>Email:</label>
                <input type="email" id="email" name="email" placeholder="username@domain.com" className="form-layout" />
                <label for="email" hidden>Subscribe</label>
                <button className="button">Subscribe<i className="fa-regular fa-arrow-up-right"></i></button>

            </form>

        </div>

        <img src={GreyLine} alt="" className="grey-line" />

    </section>
  )
}

export default Subscribe