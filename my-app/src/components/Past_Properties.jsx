import React from 'react';
import '../css/About_Us.css';
import '../css/Services.css';
import {PAST_PICTURE} from './Picture_Slide_In';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import { Element } from 'react-scroll';



const PAST = () => {
    return (
        <React.Fragment>
            <Element id='Past' name='Past'>
            <div className="container-fluid">
                <div className="container space_between_heading">
                    <div className="row pt-5 pb-5">
                        <div className="col-md-6">
                            <div className="">
                                <h2>Past Properties</h2>
                            </div>
                        
                        </div>
                        
                        <div className="row pb-5">
                                <div className="col-lg-8 my-auto overflow-hidden" align='right'>
                                    <AnimatedOnScroll animationIn="fadeInLeft" animationOut="fadeOut" animationInDuration={2000}>
                                    <PAST_PICTURE src={require("../images/h1.jpeg")}/>
                                    </AnimatedOnScroll>
                                </div>

                                <div className="col-lg-4 my-auto overflow-hidden">
                                    <div className="row v-100 w-100 pb-2 m-0">
                                    <AnimatedOnScroll animationIn="fadeInDown" animationOut="fadeOut" animationInDuration={2000}>
                                        <PAST_PICTURE src={require("../images/h2.jpeg")}/>
                                    </AnimatedOnScroll>
                                    </div>
                                    <div className="row v-100 w-100 pb-2 m-0">
                                    <AnimatedOnScroll animationIn="fadeInRight" animationOut="fadeOut" animationInDuration={2000}>
                                        <PAST_PICTURE src={require("../images/h3.jpeg")}/>
                                    </AnimatedOnScroll>
                                    </div>
                                    <div className="row v-100 w-100 m-0">
                                    <AnimatedOnScroll animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={2000}>
                                        <PAST_PICTURE  className="shadow" src={require("../images/h4.jpeg")}/>
                                    </AnimatedOnScroll>
                                    </div>
                                </div>
                        </div>
                        
                        
            
                    </div>
                </div>
            </div>
            </Element>
        </React.Fragment>
    );
};

export default PAST;
