import React, { useContext,useEffect, useState } from "react";
import axios from "axios";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ConversationsContext } from "../context/ConversationsContext";
import { AuthContext } from "../context/AuthContext";
import Profile from "../img/user.png";
import HomeLogo from "../img/squrelogo.png"

const Chat = ({imptoSocket}) => {
  const [ user, setUser ] = useState(null);
  const { username, id } = useContext(AuthContext);
  const { currentChat } = useContext(ConversationsContext);
 
  useEffect(() => {
    // console.log(currentUser);
     if(currentChat.members){
     const friendId = currentChat.members.find((m) => m !== id);
     //console.log(friendId);
     
     const getUser = async () => { 
       try {
         const res = await axios(`http://localhost:8000/api/users?userId=${friendId}`);
         setUser(res.data);
       } catch (err) {
         console.log(err);
       }
     };
    getUser();
     }
   }, [currentChat]);
   console.log(currentChat);
  return (
    <div className="chat">
      
      {currentChat.members?(
        <>
          <div className="chatInfo">
            <span><img src={Profile} alt=""/><div className="friend_name">{user?.username}</div></span>
            <div className="chatIcons">
          
            </div>
          </div>
          <Messages/>
          <Input imptoSocket={imptoSocket}/>
        </>
      ):(
        <div className="Home_messages">
          <div className="homelogo">
            <img src={HomeLogo} alt=""/>
          </div>
          <div className="content">
          <h1>Welcome to Chat-Hub</h1> 
          <p>Hi! {username} send and receive messages to your friends</p>
          <p>Thanks for joining us</p>
          </div>    
        </div>
      )} 
    </div>
  );
};

export default Chat;
