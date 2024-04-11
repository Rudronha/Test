import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Add from "../img/addAvatar.png";
import Logo from "../img/squrelogo.png";
import { postRegisterData } from "../apiCalls";

const Register = () =>{
  const [data, setData] = useState({
		username: "",
		email: "",
		password: "",
	});
  const [profilePhoto, setProfilePhoto] = useState(null);
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		  setData({ ...data, [input.name]: input.value });
	};
  
  const handlePhotoChange = async(event) => {
    const file = event.target.files[0];
    console.log(file);
    setProfilePhoto(file);
  };

	const handleSubmit = async (e) => {

		e.preventDefault();
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("profilePhoto", profilePhoto);

    postRegisterData(formData,setError,navigate);
	};
    return (
        <div className="formContainer">
      <div className="formWrapper">
        <span className="logo"><img src={Logo} alt=""/>ChatHub</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required 
              type="text" 
              placeholder="username" 
              name="username"
							onChange={handleChange}
							value={data.username} 
          />
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
          <input
            style={{display:"none"}} 
            type="file" 
            id="file" 
            name="profilePhoto"
            onChange={handlePhotoChange}
          />
          <label htmlFor="file">
            <img src={profilePhoto?URL.createObjectURL(profilePhoto):Add} alt=""/>
            <span>Add an avatar</span>
          </label>
          {error && <div>{error}</div>}
          <button type="submit">Sign up</button>
        </form>
        <p>You do have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
    )
}
export default Register;