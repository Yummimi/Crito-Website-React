import React from 'react';
import './stylesheets/Links.scss';
import Logo2 from '../assets/images/Logo2.svg';
import { Link } from "react-router-dom";


const Links = () => {
  return (
    <section className="links">

        <div className="container">

            <div>

                <img src={Logo2} alt="" />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>

            </div>

            <div>

                <h3>Company</h3>
                <Link to="#">About</Link>
                <Link to="#">Features</Link>
                <Link to="#">Work</Link>
                <Link to="#">Career</Link>

            </div>

            <div>

                <h3>Help</h3>
                <Link to="#">Customer Support</Link>
                <Link to="#">Delivery Details</Link>
                <Link to="#">Terms & Conditions</Link>
                <Link to="#">Privacy Policy</Link>

            </div>

            <div>

                <h3>Resources</h3>
                <Link to="#">Free eBooks</Link>
                <Link to="#">Development Tutorial</Link>
                <Link to="#">How to - Blog</Link>
                <Link to="#">Youtube Playlist</Link>

            </div>

            <div>

                <h3>Link</h3>
                <Link to="#">Free eBooks</Link>
                <Link to="#">Development Tutorial</Link>
                <Link to="#">How to - Blog</Link>
                <Link to="#">Youtube Playlist</Link>

            </div>

        </div>

    </section>
  )
}

export default Links