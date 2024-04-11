import { useEffect, useContext, useRef } from "react";
import Message from "./Message";
import { AuthContext } from "../context/AuthContext";
import { MessageContext } from "../context/MessageContext";

const Messages = ({friend}) => {
  const { id } = useContext(AuthContext);
  const { messages } = useContext(MessageContext);
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="messages">
          {messages.map(m=>(
            <div ref={scrollRef}>
            <Message owner={id === m.sender} messages={m} friend={friend} key={m._id}/>
            </div>
          ))} 
    </div>
  );
};

export default Messages;
