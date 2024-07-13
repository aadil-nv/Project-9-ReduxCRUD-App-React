import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
BrowserRouter;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/"  element={<Home/>} />
        <Route  path="/about"  element={<About/>} />
        <Route  path="/profile"  element={<Profile/>} />
        <Route  path="/sign-in"  element={<Signin/>} />
        <Route  path="/sign-up"  element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
