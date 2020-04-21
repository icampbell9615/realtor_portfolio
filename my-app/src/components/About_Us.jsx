import React from 'react';
import '../css/About_Us.css';
import '../css/Services.css';
import {PICTURE} from './Picture_Slide_In';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import { Element } from 'react-scroll';



const ABOUT_US = () => {
    return (
        <React.Fragment>
            <Element id='AboutUs' name='AboutUs'>
            <div className="container-fluid">
                <div className="container space_between_heading">
                    <div className="row pt-5 pb-5">
                        <div className="col-md-6 mx-auto my-auto">
                            <div className="">
                                <h2>About Us</h2>
                            </div>
                            <div className="text-justify pt-3 overflow-hidden">
                                <AnimatedOnScroll animationIn="zoomIn" animationOut="fadeOut" animationInDuration={2000}>
                                Kevin Campbell is a realtor from Charlotte currently contracting houses. He has made a name for himself by providing styles that are current. The goal is to have a house that you will enjoy for as long as you want and be glad to come home to it. He is happy to help you with your house.
                                </AnimatedOnScroll>
                            </div>
                        </div>


                        <div className="col-md-6 overflow-hidden">
                        <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeOut" animationInDuration={2000}>
                            <PICTURE src={require("../images/About_us.svg")}/>
                        </AnimatedOnScroll>
                        </div>




                    </div>
                </div>
            </div>
            </Element>
        </React.Fragment>
    );
};

export default ABOUT_US;
