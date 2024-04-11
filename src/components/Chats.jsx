import Profile from "../img/user.png";
import React,{ useEffect, useState } from "react";
import { getUser } from "../apiCalls";

const Chats = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser);
    getUser(friendId,setUser);
  }, [conversation._id]);


  return (
    <div className="chats">
        <div className="userChat" >
          <img src={user?.profilePhoto?(`http://localhost:3000/assets/avtar/${user.profilePhoto}`):Profile} alt="" />
          <div className="userChatInfo">
            <span className="conversationName">{user?.username}</span>
          </div>
        </div>
    </div>
  );
};

export default Chats;
