import React from 'react';
import '../css/HEADER.css';
import '../css/ABOUTUS.css';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
// import Fade from 'react-reveal/Fade';

const PICTURE = (props) => {
    return (
        <React.Fragment>
                <div className="justify-content-center topPadding" style={{height: "100%", width: "100%"}}>
                    <AnimatedOnScroll animationIn="fadeInRight" animationOut="fadeOut" animationInDuration={2000} >
                        <img src={props.src} style={{width:"80%", height: "80%"}} className="mx-auto d-block" alt="img"/>
                    </AnimatedOnScroll>
                </div>
        </React.Fragment>


    );
};

const PASTPICTURE = (props) => {
    return (
        <React.Fragment>
                <div className="justify-content-center topPadding" style={{height: "100%", width: "100%"}}>
                
                        <img src={props.src} style={{width:"100%", height: "100%"}} className="mx-auto d-block shadow rounded" alt="img"/>
                    
                </div>
        </React.Fragment>


    );
};
export {PICTURE, PASTPICTURE}
