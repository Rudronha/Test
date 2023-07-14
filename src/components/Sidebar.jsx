import React,{ useContext } from "react";
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"
import { AuthContext } from '../context/AuthContext'
import { ConversationsContext } from "../context/ConversationsContext";
import Profile from "./Profile";

const Sidebar = ({users}) => {
  const { id, profile } = useContext(AuthContext);
  const { conversations,setCurrentChat } = useContext(ConversationsContext);
  

  return (
    <div className="sidebar">
      {profile?(
        <Profile/>
      ):
      (
      <>
      <Navbar/>
        <Search users={users}/>
        {conversations.map(c => (
        <div onClick={()=>setCurrentChat(c)} key={c._id}>
          <Chats conversation={c} currentUser={id} key={c._id}/> 
        </div>
        ))}
      </>  
      )}
      
    </div>
  );
};

export default Sidebar;
