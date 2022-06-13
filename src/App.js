import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import RequiredAuth from "./RequiredAuth";



function App() {
  const navigate=useNavigate();
//  this is sophisticated way of writing code.

  const {isAuth}=useSelector((state)=>state.auth)


  useEffect(() => {
    if(isAuth)
    {
      navigate("/")
    }
  
    
  }, [navigate,isAuth])
  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
        <RequiredAuth>
        <Home />
        </RequiredAuth>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
