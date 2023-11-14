import React from 'react'
import './stylesheets/LetsConnect.scss';
import WhiteLines from '../assets/images/white-lines.svg';

const LetsConnect = () => {
  return (
    <section className="lets-connect">

        <div className="container">
            <h1>Let's Connect</h1>
        </div>
        
        <img src={WhiteLines} className="white-lines" alt="" />

    </section>
  )
}

export default LetsConnect