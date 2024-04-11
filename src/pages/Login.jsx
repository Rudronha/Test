import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/squrelogo.png";
import { postLoginData } from "../apiCalls";
const Login = () =>{
  	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		postLoginData(data,setError);
	};


    return (
        <div className="formContainer">
      <div className="formWrapper">
		
        <span className="logo"><img src={Logo} alt=""/>ChatHub</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input 
              required 
              type="email" 
              placeholder="email" 
              name="email"
			  onChange={handleChange}
			  value={data.email}
			/>
          <input 
            required 
            type="password" 
            placeholder="password"
            name="password"
			onChange={handleChange}
			value={data.password}
          />
          {error && <div>{error}</div>}
          <button type="submit">Sign in</button>
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
    )
}
export default Login;