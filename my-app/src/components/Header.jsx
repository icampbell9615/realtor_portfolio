import React from 'react';
import '../css/Header.css';
import NavBar from "./Navbar";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Element } from 'react-scroll';


const Header = () => {
    return (
        <React.Fragment>
       <Element id='Home' name='Home'>
                <NavBar className="row justify-content-center navbar_index"/>
      <div className="hero-text">
                    <h1 style={{fontSize:"350%"}}>Kevin Campbell</h1>
                    <h3 style={{fontSize:"150%"}}>Charlotte's Finest Properties</h3>
                </div>
                <div className="bg">
                <Carousel responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 1
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 1
                        }
                    }} infinite autoPlay autoPlaySpeed={2000} removeArrowOnDeviceType={"mobile"}
                              sliderClass=""
                              slidesToSlide={1}
                              swipeable  className="carousel_">

                        <img className="" src={require("../images/1.jpg")} style={{
                            height: '100%',
                            margin: 'auto',
                            width: '100%'
                        }} alt=""/>
                        <img className="" src={require("../images/2.jpg")} style={{
                            display: 'block',
                            height: '100%',
                            margin: 'auto',
                            width: '100%'
                        }} alt=""/>
                        <img className="" src={require("../images/3.jpg")} style={{
                            display: 'block',
                            height: '100%',
                            margin: 'auto',
                            width: '100%'
                        }} alt=""/>
                        <img className="" src={require("../images/4.jpg")} style={{
                            display: 'block',
                            height: '100%',
                            margin: 'auto',
                            width: '100%'
                        }} alt=""/>
                        <img className="" src={require("../images/5.jpg")} style={{
                            display: 'block',
                            height: '100%',
                            margin: 'auto',
                            width: '100%'
                        }} alt=""/>
                        {/*<img className="" src={require("../images/house5.jpg")} style={{*/}
                        {/*    display: 'block',*/}
                        {/*    height: '100%',*/}
                        {/*    margin: 'auto',*/}
                        {/*    width: '100%'*/}
                        {/*}} alt=""/>*/}
                        {/*<img className="" src={require("../images/house6.jpg")} style={{*/}
                        {/*    display: 'block',*/}
                        {/*    height: '100%',*/}
                        {/*    margin: 'auto',*/}
                        {/*    width: '100%'*/}
                        {/*}} alt=""/>*/}
                        {/*<img className="" src={require("../images/house7.jpg")} style={{*/}
                        {/*    display: 'block',*/}
                        {/*    height: '100%',*/}
                        {/*    margin: 'auto',*/}
                        {/*    width: '100%'*/}
                        {/*}} alt=""/>*/}
                        {/*<img className="" src={require("../images/house8.jpg")} style={{*/}
                        {/*    display: 'block',*/}
                        {/*    height: '100%',*/}
                        {/*    margin: 'auto',*/}
                        {/*    width: '100%'*/}
                        {/*}} alt=""/>*/}
                    </Carousel>
                </div>
            </Element>
               
        </React.Fragment>

    );
};

export default Header;