import React from 'react';
import '../css/Services.css';
import STATIC_HEADING from "./Static_Heading_At_Start";
import SERVICES_LIST from "./Services_List";
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import { Element } from 'react-scroll';



const SERVICES = () => {
    return (
        <React.Fragment>
            <Element id='Services' name='Services'>
                <div className="container-fluid">
                    <div className="container space_between_heading">
                        <div className="row pt-5 pb-5">
                            <div className="col-md-12 pb-3">
                                <STATIC_HEADING title={"What We Offer"} details={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. At velit unde cupiditate recusandae, neque dicta nisi omnis voluptates."}/>
                            </div>

                            <div className="container">
                                <div className="row mt-5">
                                    <div className="col-md-6 mt-5 overflow-hidden">
                                        <AnimatedOnScroll animationIn="fadeInRight" animationOut="fadeOut" animationInDuration={2000}>
                                        <SERVICES_LIST src={require("../images/responsive.png")} title={"Responsive"} details={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."} />
                                        </AnimatedOnScroll>
                                    </div>
                                    <div className="col-md-6 mt-5 overflow-hidden">
                                        <AnimatedOnScroll animationIn="fadeInDown" animationOut="fadeOut" animationInDuration={2000}>
                                        <SERVICES_LIST src={require("../images/redesign.png")} title={"Redesigned"} details={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."} />
                                        </AnimatedOnScroll>
                                    </div>
                                    <div className="col-md-6 mt-5 overflow-hidden">
                                        <AnimatedOnScroll animationIn="fadeInLeft" animationOut="fadeOut" animationInDuration={2000}>
                                        <SERVICES_LIST src={require("../images/favorite.png")} title={"Favorited"} details={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."} />
                                        </AnimatedOnScroll>
                                    </div>
                                    <div className="col-md-6 mt-5 overflow-hidden">
                                        <AnimatedOnScroll animationIn="fadeInUp" animationOut="fadeOut" animationInDuration={2000}>
                                        <SERVICES_LIST src={require("../images/question.png")} title={"Questions"} details={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."} />
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

export default SERVICES;
