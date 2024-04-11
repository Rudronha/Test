import {createContext, useEffect, useState} from "react";
import axios from "axios";
import img from "../img/user.png";

export const AuthContext = createContext();
const user = localStorage.getItem("token");
axios.interceptors.request.use(
  config=>{
    config.headers.Authorization = user;
    return config;
  },
  error =>{
    return Promise.reject(error);
  }
);

export const AuthContextProvider = ({children})=> {
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);
  const [ profile, setProfile ] = useState(false);
  const [ update,setUpdate ] = useState(false);
  const [ proPhoto,setProPhoto ] = useState(null);
  
  useEffect(() => {
      //console.log(localStorage.getItem("token"));
      axios.get('http://localhost:8000/api/users/profile',{ headers: { "authorization":localStorage.getItem("token")}}).then(response => {
      console.log(response.data);
      setProPhoto(response.data.profilePhoto);
      setId(response.data._id);
      setUsername(response.data.username);
    });
  }, [update]);
  return (
    <AuthContext.Provider value={{ username, setUsername, id , setId, profile, setProfile,update,setUpdate,proPhoto,setProPhoto}}>
      {children}
    </AuthContext.Provider>
  );
}