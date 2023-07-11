import { useEffect, useContext, useState, useRef } from "react";
import Message from "./Message";
import { ConversationsContext } from '../context/ConversationsContext';
import axios from "axios"
import { AuthContext } from "../context/AuthContext";
import { MessageContext } from "../context/MessageContext";

const Messages = () => {
  const { id } = useContext(AuthContext);
  const { messages } = useContext(MessageContext);
  //console.log(currentChat);
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="messages">
          {messages.map(m=>(
            <div ref={scrollRef}>
            <Message owner={id === m.sender} messages={m} key={m._id}/>
            </div>
          ))} 
    </div>
  );
};

export default Messages;
