import React from 'react'
import './stylesheets/CompanyLogo.scss';
import Paperz from '../assets/images/paperz.svg';
import Dorfus from '../assets/images/dorfus.svg';
import Martino from '../assets/images/martino.svg';
import Square from '../assets/images/square.svg';
import Gobona from '../assets/images/gobona.svg';

const CompanyLogo = () => {
  return (
    <section className="company-logo">

        <div className="container">

            <img className="paperz" src={Paperz} alt="Paperz leading paper company" />

            <img className="dorfus" src={Dorfus} alt="Dorfus" />

            <img className="martino" src={Martino} alt="Martino colors of your life" />

            <img className="square" src={Square} alt="Square real estate solution" />

            <img className="gobona"src={Gobona} alt="Gobona your trusted currier" />

        </div>

    </section>
  )
}

export default CompanyLogo