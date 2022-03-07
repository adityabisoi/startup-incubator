import React from "react";
import "./AboutUs.css";
import { Image, Button } from 'semantic-ui-react'

const AboutUs = () => {
    return (
        <div className="container">
                <div className="header">
                   LET'S GET TO KNOW EACH OTHER
                </div>
                <div className="para_right">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div className="mid_box">
                    <div className="left">
                        <div className="sub_header">
                            Our Vision
                        </div>
                        <div className="para1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        </div>
                        <div className="para2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu  
                        </div>
                        <div className="para3">
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  
                        </div>
                        <Button className="join_us" color="orange">
                            Join Us
                        </Button>
                    </div>
                    <div className="right">
                        <Image src='Images/aboutus.png'  />
                    </div>
                </div>
                <div className="bottom_box">
                    <div className="bottom_header">
                        Meet the minds behind Startup Incubator
                    </div>
                    <div className="mid" >
                        <div  className="card1">
                            <div className="name1">
                                John
                            </div>
                            <div className="position1">
                                Developer
                            </div>
                            <div className="image1">
                                <Image src='Images/face.png' />
                            </div>
                        </div>
                        <div className="card2">
                            <div className="name2">
                                John
                            </div>
                            <div className="position2">
                                Developer
                            </div>
                            <div className="image2">
                                <Image src='Images/face.png' />
                            </div>
                        </div>
                        <div className="card3">
                            <div className="name3">
                                John
                            </div>
                            <div className="position3">
                                Developer
                            </div>
                            <div className="image3">
                                <Image src='Images/face.png' />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default AboutUs;