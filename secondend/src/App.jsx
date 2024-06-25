import React, { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Outlet } from 'react-router-dom'; // Import Outlet
import './App.css';

export const Context = React.createContext();

export function App() {
  const [signedIn, setSignedIn] = useState(() => {
    if (localStorage.getItem('signedIn') === null) {
      localStorage.setItem('signedIn', 'false');
    }
    return localStorage.getItem('signedIn') === 'true';
  });



  return (
    <>
    <Context.Provider value={[signedIn, setSignedIn]}>
      <Header />    
        <p>{signedIn ? "Signed In " : "Signed Out"}</p>
        <Outlet /> 
      <Footer />
      </Context.Provider>
    </>
  )
}


