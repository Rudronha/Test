import React, { useState } from "react";
import Profile from "../img/user.png";
import { format } from "timeago.js";
import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import { AuthContext } from "../context/AuthContext";
import { onMassageDelete } from "../apiCalls";

var Photo=null;

const Message = ({owner,messages,friend}) => {
  const [ Delete ,setDelete ] = useState(false);
  const { proPhoto } = useContext(AuthContext);
  const { DeleteMessage } = useContext(MessageContext);
  const onMassageDel = ()=>{
    onMassageDelete(messages._id);
    DeleteMessage(messages.text);
    setDelete(false);
  }

  if(owner){
    Photo=proPhoto;
  }
  else{
    Photo=friend?.profilePhoto;
  }

  return (
    <div className={owner? "message owner" :"message"}>
      <div className="messageInfo">
        <img
          src={Photo?(`http://localhost:3000/assets/avtar/${Photo}`):Profile}
          alt=""
        />
        <span>{format(messages.createdAt)}</span>
      </div>
      <div className="messageContent">
        {Delete&&owner?(<div className="delete" onClick={onMassageDel}>Delete</div>):(<></>)}
        <p onClick={()=>setDelete(prevValue => !prevValue)}>{messages.text}</p>        
      </div>
    </div>
  );
};

export default Message;
