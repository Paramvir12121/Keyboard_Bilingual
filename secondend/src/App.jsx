import React, { useState } from "react";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Outlet } from 'react-router-dom'; // Import Outlet
import './App.css';

export const Context = React.createContext();

function App() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <>
    <Context.Provider value={{ signedIn, setSignedIn }}>
      <Header />    
      <p>{signedIn ? "Signed In " : "Signed Out"}</p>
       <Outlet /> 
      <Footer />
      </Context.Provider>
    </>
  )
}


