import React, { useContext, useEffect, useState }  from "react"
import Back from "../img/back_arrow.png"
import userProfile from "../img/user.png";
import edituser from "../img/pencil.png";
import submit from "../img/check.png";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { redirect } from "react-router-dom";
const Profile = () => {
    const {id,setProfile,username, update,setUpdate} = useContext(AuthContext);
    const [data, setData] = useState(username);

    const handleChange = ({ currentTarget: input }) => {
		setData(input.value);
	};
   
    const onUpdate=async()=>{
        await axios.put(`http://localhost:8000/api/users/${id}`, {
            userId: id,
            username:data,
          }).then(res => {
            localStorage.setItem("token", res.data.data);
            setUpdate(false);
            window.location = "/";
          });
    };
    return(
        <>
        <div className='navbar'>
        <div className="profile"><img src={Back} alt=""  onClick={()=>setProfile(false)} />Profile</div>
        </div>
        <div className="main_profile">
            <img src={userProfile} alt=""/>
            <div className="user_profile_info">
                <span>Your name</span>
                {update?(
                    <div className="username">
                        <div className="update">
                            <input 
                                type="text"
                                name="email"
                                onChange={handleChange}
                                value={data}
                            />
                         </div>
                        <img src={submit} alt="" onClick={onUpdate}/>
                    </div>
                ):(
                    <div className="username"><div className="olduser">{username}</div><img src={edituser}  alt="" onClick={()=>setUpdate(true)}/></div>
                )}
            </div>
        </div>
        </>
    );
};

export default Profile;