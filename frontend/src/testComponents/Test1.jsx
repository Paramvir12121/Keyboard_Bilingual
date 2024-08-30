import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import KeyboardTrainer from './KeyboardTrainer';
import ToastComponent from '../components/common/ToastComponent';
import { TopBar } from '../figma/topbar/main';
import { Cta } from '../figma/cta/main';


const Test1 = () => {

  

  return (
    <div>
      <ToastComponent toastTitle="Test1 Title" toastMessage="Test1 Message" /> 
      <TopBar />
      <Cta />

      
    </div>
  );
};


export default Test1;
