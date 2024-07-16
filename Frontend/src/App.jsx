import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Header from "./Components/Header";
import PrivateRoutes from "./Components/PrivateRoutes";
import Adminsignin from "./Pages/Adminsignin";
import Adminhome from "./Pages/Adminhome";
import Edituserdata from "./Pages/Edituserdata";
import Addnewuser from "./Pages/Addnewuser";


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route element={<Header/>}>
        <Route  path="/"  element={<Home/>} />
        <Route  path="/about"  element={<About/>} />
        <Route  path="/sign-in"  element={<Signin/>} />
        <Route  path="/sign-up"  element={<Signup/>} />
        <Route element={<PrivateRoutes/>} ><Route  path="/profile"  element={<Profile/>} /></Route>
        </Route>
        <Route  path="/admin-signin"  element={<Adminsignin/>} />
        <Route  path="/admin-home"  element={<Adminhome/>} />
        <Route  path="/edit-userdata/:id"  element={<Edituserdata/>} />
        <Route  path="/add-newuser"  element={<Addnewuser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
