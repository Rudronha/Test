import React from "react";
import Logo from "../img/squrelogo.png";
import userLogo from "../img/userold.png";
import add from "../img/pin.png";
import mail from "../img/email.png";
import phone from "../img/telephone.png";
import "./Contect.css";
import { Link } from "react-router-dom";
const Contect = ()=>{
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
                        <h1>Contact Us</h1>
                    </div>
                    <div className="content">
                        <span className="line">
                            <div><img src={add} alt="" style={{width:50,height:50}}/></div>
                            <p className="para"><p className="hd">Address</p>20215 Ganga road harsh Vihar, Merrut ,Uttar Pardesh, India</p>
                        </span>
                        <span className="line">
                            <div><img src={phone} alt="" style={{width:50,height:50}}/></div>
                            <p className="para"><p className="hd">Phone</p>1800-2018-3289-436</p>
                        </span>
                        <span className="line">
                            <div><img src={mail} alt="" style={{width:50,height:50}}/></div>
                            <p className="para"><p className="hd">Email</p>example_loop_hol2000786@email.com</p>
                        </span>
                        
                    </div>
                </div>
                <div className="form">
                    <div className="title"><h2>Send Message</h2></div>
                    <form className="form-content">
                        <div className="field"><input type="text" placeholder="Full Name" className="input-t"/></div>
                        <div className="field"><input type="email" placeholder="Email" className="input-t"/></div>
                        <div className="field"><textarea type="textarea" placeholder="Type Your Message" className="input-a"/></div>
                        <div className="button">Send</div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contect;