import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import KeyboardTrainer from './KeyboardTrainer';
import ToastComponent from '../components/common/ToastComponent';



const Test1 = () => {
  const [pressedKey, setPressedKey] = useState(null);
  useEffect(() => {
    const handleKeyDown = (event) => {
      setPressedKey(event.key);
    };
    window.addEventListener('keydown', handleKeyDown);
    console.log("Pressed Key: ",pressedKey)
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    
  }, [pressedKey]);
  

  return (
    <div>
      <ToastComponent toastTitle="Test1 Title" toastMessage="Test1 Message" /> 
     

      
    </div>
  );
};


export default Test1;
