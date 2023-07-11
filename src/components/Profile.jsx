import React, { useContext, useState }  from "react"
import Back from "../img/back_arrow.png"
import userProfile from "../img/user.png";
import edituser from "../img/pencil.png";
import submit from "../img/check.png";
import { AuthContext } from "../context/AuthContext";
const Profile = () => {
    const {setProfile} = useContext(AuthContext);
    const [ update,setUpdate ] = useState(false);
    const [data, setData] = useState("Harsh");

    const handleChange = ({ currentTarget: input }) => {
		setData(input.value);
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
                        <img src={submit} alt=""/>
                    </div>
                ):(
                    <div className="username"><div className="olduser">Harsh</div><img src={edituser}  alt="" onClick={()=>setUpdate(true)}/></div>
                )}
            </div>
        </div>
        </>
    );
};

export default Profile;