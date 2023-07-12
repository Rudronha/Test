import React from "react";
import background from "../img/img2.jpg";
import Logo from "../img/squrelogo.png";
import userLogo from "../img/userold.png";
import { Link } from "react-router-dom";
const Leading = ()=>{
    return(
        <div className="lading">
            <div className="lading_navbar">
                <img src={Logo} alt=""/>
                <h1>ChatHub</h1>
                <div className="menu">
                    <Link to="/" style={{color: 'inherit', textDecoration: 'none' }}><div className="icon">Home</div></Link>
                    <Link to="/about" style={{ color: 'inherit',textDecoration: 'none' }}><div className="icon">About Us</div></Link>
                    <Link to="/contect" style={{color: 'inherit', textDecoration: 'none' }}><div className="icon">Contact</div></Link>
                    <div className="userlogo">
                        <img src={userLogo} alt=""/>
                        <Link to="/login" style={{color: 'inherit', textDecoration: 'none' }}><div className="icon">Login</div></Link>
                    </div>
                </div>
            </div>
            <div className="block">
                <div className="sitinfo">
                <h1>ChatHub</h1>
                <p>Chat-Hub is a real-time messaging application that allows users to exchange text messages. It offers a user-friendly interface and cross-platform compatibility for seamless communication.</p>
                <Link to="/register" style={{color: 'inherit', textDecoration: 'none' }}>
                    <div className="register">
                        <span>Regester</span>
                    </div>
                </Link>
                
                </div>
                <div className="back_img">
                    <img src={background} alt=""/>
                </div>  
            </div>
        </div>
    )
};

export default Leading;