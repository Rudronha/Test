import React, { useContext,useEffect, useState } from "react";
import More from "../img/more2.png";
import Messages from "./Messages";
import Input from "./Input";
import { ConversationsContext } from "../context/ConversationsContext";
import { AuthContext } from "../context/AuthContext";
import Profile from "../img/user.png";
import HomeLogo from "../img/squrelogo.png"

import { getUser,onChatDelete } from "../apiCalls";

const Chat = ({imptoSocket}) => {
  const [ user, setUser ] = useState(null);
  const [ menubar, setMenubar ] = useState(false);
  const { username, id } = useContext(AuthContext);
  const { currentChat,setCurrentChat,DeleteConversation } = useContext(ConversationsContext);
 
  useEffect(() => {
    if(currentChat.members){
      const friendId = currentChat.members.find((m) => m !== id);
      getUser(friendId,setUser);
    }
  },[currentChat]);
  const onDelete = ()=>{ 
    onChatDelete(currentChat._id);
    setCurrentChat([]);
    setMenubar(false);
    DeleteConversation(currentChat._id);  
  }
   

  return (
    <div className="chat">
      
      {currentChat.members?(
        <>
          <div className="chatInfo">
            <span><img src={user?.profilePhoto?(`REACT_APP_PUBLIC_FOLDERavtar/${user.profilePhoto}`):Profile} alt=""/><div className="friend_name">{user?.username}</div></span>
            <div className="chatIcons"onClick={()=>{setMenubar(!menubar)}}>
              <img src={More} alt=""/>
            </div>
            {menubar?(
              <div className="menubar">
                <ul>
                  <li className="list" onClick={()=>{setCurrentChat([]);setMenubar(false)}}>Close Chat</li>
                  <li className="list" onClick={onDelete}>Delete Chat</li>
                </ul>
              </div>
            ):(<></>)}
          </div>
          <Messages friend={user}/>
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
