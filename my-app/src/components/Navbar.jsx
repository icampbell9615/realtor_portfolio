import React from 'react';
import '../css/NAVBAR.css';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.Link;



const NAVBAR = () => {

    return (
        <nav className="navbar navbar-default navbar-expand-lg bg-dark navbar-dark sticky-top mx-auto">
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <ScrollLink to="Home" spy={true} smooth={true} duration={800} className='nav-item nav-link ScrollLink text-white' activeClass="active">
                        Home
                    </ScrollLink>
                    <ScrollLink to="Services" spy={true} smooth={true} duration={800} className='nav-item nav-link ScrollLink text-white' activeClass="active">
                        Services
                    </ScrollLink>
                    <ScrollLink to="AboutUs" spy={true} smooth={true} duration={800} className='nav-item nav-link ScrollLink text-white' activeClass="active">
                        About Us
                    </ScrollLink>
                    <ScrollLink to="Past" spy={true} smooth={true} duration={800} className='nav-link ScrollLink text-white' activeClass="active">
                        Past Properties
                    </ScrollLink>
                    <ScrollLink to="CONTACT" spy={true} smooth={true} duration={800} className='nav-link ScrollLink text-white' activeClass="active">
                        Contact
                    </ScrollLink>
                </div>
            </div>
        </nav>

    );
};

export default NAVBAR;
