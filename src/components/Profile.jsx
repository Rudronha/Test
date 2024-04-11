import React, { useContext, useState }  from "react"
import Back from "../img/back_arrow.png"
import userProfile from "../img/user.png";
import edituser from "../img/pencil.png";
import submit from "../img/check.png";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Profile = () => {
    const {id,setProfile,username, update,setUpdate,proPhoto } = useContext(AuthContext);
    const [data, setData] = useState(username);
    const [profilePhoto, setProfilePhoto] = useState(proPhoto?proPhoto:null);
    const handleChange = ({ currentTarget: input }) => {
		setData(input.value);
	};
    const handlePhotoChange = async(event) => {
        const file = event.target.files[0];
        setProfilePhoto(file.name);
    };
      
    const onProfileUpdate=async()=>{
        await axios.put(`http://localhost:8000/api/users/${id}`, {
            userId: id,
            username:data,
          }).then(res => {
            localStorage.setItem("token", res.data.data);
            setUpdate(false);
            window.location = "/";
          });
    };

    const upProfilePhoto=async()=>{
       await axios.put(`http://localhost:8000/api/users/profilePhoto/${id}`, {
            userId: id,
            profilePhoto:profilePhoto,
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
            <input
            style={{display:"none"}} 
            type="file" 
            id="file" 
            name="profilePhoto"
            onChange={handlePhotoChange}
            />
            <label htmlFor="file">
            <img src={profilePhoto?(`http://localhost:3000/assets/avtar/${profilePhoto}`):userProfile} alt=""/>
            <button style={{color:"gray",cursor:"pointer"}} onClick={upProfilePhoto}>c</button>
            </label>
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
                        <img src={submit} alt="" onClick={onProfileUpdate}/>
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