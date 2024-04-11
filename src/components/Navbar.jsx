import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import userProfile from "../img/user.png";


const Navbar = () => {
  const {username,setProfile,proPhoto} = useContext(AuthContext);
  const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};
  
  return (
    <div className='navbar'>
      <span className="logo">ChatHub</span>
      <div className="user">
          <img src={proPhoto?(`http://localhost:3000/assets/avtar/${proPhoto}`):userProfile} alt=""  onClick={()=>setProfile(true)} />
        <div className="logout">
        <span>{username}</span>
        <button onClick={handleLogout}>logout</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;