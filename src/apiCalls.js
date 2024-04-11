import axios from "axios";

export const postLoginData = async (data,setError) => {
    try{
        const url = "http://localhost:8000/api/auth";
        const { data: res } = await axios.post(url, data);
        localStorage.setItem("token", res.data);
        window.location = "/";
    } catch (error) {
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            setError(error.response.data.message);
        }
    }
};

export const postRegisterData = async(formData,setError,navigate)=>{
    try {
        const url = "http://localhost:8000/api/users";
        //add const {data: res} = 
        await axios.post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        navigate("/login");
    } catch (error) {
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            setError(error.response.data.message);
        }
    }
};

export const getUserList = async(setAllUsers)=>{
    axios.get(`http://localhost:8000/api/users/usersList`).then(res => {
        setAllUsers(res.data);
    });
};

export const getUser = async (friendId,setUser) => { 
    try {
      const res = await axios.get(`http://localhost:8000/api/users/?userId=${friendId}`);
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

export const onChatDelete = (currentChatID)=>{
    axios.delete(`http://localhost:8000/api/conversations/${currentChatID}`); 
};
 
export const onMassageDelete = (messageId)=>{
    axios.delete(`http://localhost:8000/api/messages/${messageId}`);
};
