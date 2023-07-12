import React from "react";
import Logo from "../img/squrelogo.png";
import userLogo from "../img/userold.png"
import "./About.css";
import In from "../img/inta-lg.png";
import Fb from "../img/fb-lg.png";
import Tw from "../img/twit-lg.png";
import Alg from "../img/about_lg.jpg";
import { Link } from "react-router-dom";
const About = ()=>{
    return(
        <div className="lading">
            <div className="lading_navbar">
                <img src={Logo} alt=""/>
                <h1>ChatHub</h1>
                <div className="menu">
                    <div className="icon"><Link to="/" style={{color: 'inherit', textDecoration: 'none' }}>Home</Link></div>
                    <div className="icon"><Link to="/about" style={{color: 'inherit', textDecoration: 'none' }}>About Us</Link></div>
                    <div className="icon"><Link to="/contect" style={{color: 'inherit', textDecoration: 'none' }}>Contact</Link></div>
                    <div className="userlogo">
                        <img src={userLogo} alt=""/>
                        <div className="icon"><Link to="/login" style={{color: 'inherit', textDecoration: 'none' }}>Login</Link></div>
                    </div>
                </div>
            </div>
        <div className="section">
            <div className="container">
                <div className="content-section">
                    <div className="title">
                        <h1>About-Us</h1>
                    </div>
                    <div className="content">
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem neque 
                            quae commodi,perferendis sequi libero, nesciunt hic possimus quos et, aspernatur
                            omnis aut sit voluptate debitis ullam laborum culpa rem.
                        </p>
                        <div className="button">
                            <span>Read More</span>
                        </div>
                    </div>
                    <div className="social">
                        <div className="icon"><img src={Fb} style={{width:25,height:25}} alt=""/></div>
                        <div className="icon"><img src={In} style={{width:25,height:25}} alt=""/></div>
                        <div className="icon"><img src={Tw} style={{width:25,height:25}} alt=""/></div>
                    </div>
                </div>
                <div className="image-section">
                    <img src={Alg} alt="" style={{width:400,height:300,position:"relative",top:100,left:50}}/>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;