import React from 'react';
import '../css/SERVICES.css';
import STATICHEADING from "./STATICHEADINGATSTART";
// import SERVICESLIST from "./SERVICESLIST";
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import { Element } from 'react-scroll';
import {PICTURE} from './PICTURESLIDEIN';


const CONTACT = () => {
    return (
        <React.Fragment>
            <Element id='CONTACT' name='CONTACT'>
                <div className="container-fluid">
                    <div className="container space_between_heading">
                        <div className="row pt-5 pb-5">
                            <div className="col-md-12 pb-3">
                                <STATICHEADING title={"Contact Us"} details={""}/>
                            </div>
                            <div className="col-md-6 pb-3 mx-auto my-auto">
                                <h6><i className="fa fa-user-o  pl-1 pr-3"/>Kevin Campbell</h6>
                                <h6><i className="fa fa-home  pl-1 pr-3"/>North Carolina </h6>
                                <h6><i className="fa fa-phone  pl-1 pr-3"/>+1345578587 </h6>
                                <h6><i className="fa fa-envelope-o  pl-1 pr-3"/>s@gmail.com </h6>
                            </div>
                            <div className="col-md-6 pb-5 overflow-hidden">
                                <AnimatedOnScroll animationIn="fadeIn" animationOut="fadeOut" animationInDuration={2000}>
                                    <PICTURE src={require("../images/contact2.svg")}/>
                                </AnimatedOnScroll>
                            </div>

                        </div>
                    </div>
                </div>
            </Element>
        </React.Fragment>
    );
};

export default CONTACT;