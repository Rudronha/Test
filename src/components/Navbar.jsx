import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import Profile from "../img/user.png";
const Navbar = () => {
  const {username,id,setProfile} = useContext(AuthContext);
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
  
  return (
    <div className='navbar'>
      <span className="logo">ChatHub</span>
      <div className="user">
          <img src={Profile} alt=""  onClick={()=>setProfile(true)} />
        <div className="logout">
        <span>{username}</span>
        <button onClick={handleLogout}>logout</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;