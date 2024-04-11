import { Route, Routes } from "react-router-dom";
import Leading from "./pages/Leading";
import About from "./pages/About";
import Contect from "./pages/Contect";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss"

function App() {
 
  const user = localStorage.getItem("token")
  
  
  return (
    <Routes>
      {user && <Route path="/" exact element={<Home/>}/>}
      <Route path="/" exact element={<Leading/>}/>
      <Route path="/about" exact element={<About/>}/>
      <Route path="/contect" exact element={<Contect/>}/>
      <Route path="/register" exact element={<Register/>}/>
      <Route path="/login" exact element={<Login/>}/>   
    </Routes>
  );
}

export default App;