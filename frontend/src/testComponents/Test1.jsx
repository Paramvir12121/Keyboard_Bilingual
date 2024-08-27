import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import KeyboardTrainer from './KeyboardTrainer';
import ToastComponent from '../components/common/ToastComponent';

const Test1 = () => {

  

  return (
    <div>
      <ToastComponent toastTitle="Test1 Title" toastMessage="Test1 Message" />  
      
    </div>
  );
};


export default Test1;
