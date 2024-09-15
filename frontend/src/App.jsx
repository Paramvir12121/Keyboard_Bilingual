import React, { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Outlet } from 'react-router-dom'; // Import Outlet
import './App.css';
import Cookies from 'js-cookie';

export const Context = React.createContext();

export function App() {
  const [signedIn, setSignedIn] = useState(() => {
    const cookieValue = Cookies.get('signedIn');
    if (cookieValue === undefined) {
      Cookies.set('signedIn', 'false');
      return false;
    }
    return cookieValue === 'true';
  });

  return (
    <>
    <div className="content-wrap">
    <Context.Provider value={[signedIn, setSignedIn]}>
      <Header /> 
      <div className="app-outlet">
        <Outlet /> 
      </div>   
      <Footer />
      </Context.Provider>
      </div>
    </>
  )
}


