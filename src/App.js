
import "./index.css"
import React, {useState, useEffect, createContext} from "react";
import Entry from "./components/Entry";
import {Route, Routes, Navigate} from "react-router-dom";
import About from "./components/About";
import Notfound from "./components/Notfound";
import Details from "./components/Details";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Dashboard from "./components/Dashboard";
import SectionHook from "./components/SectionHook";
import Protected from "./components/Protected";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const logIn = () => {
    setIsLoggedIn(true);
  };
  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Entry />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/details/:id" element={<Details />}/>
        <Route path="/login" element={<LoginPage logIn = {logIn}/>}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="*" element={<Notfound />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        {/* <Route path='/dashboard' element={<Protected isLoggedIn={isLoggedIn}><Dashboard logOut = {logOut}/></Protected>}/> */}
        <Route path="/hook-data" element={<SectionHook />}/>
      </Routes>
    </div>
  );
}

export default App;



/*
        <Route path='/dashboard'
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Dashboard logOut = {logOut}/>
            </Protected>
          }
        />
        */
