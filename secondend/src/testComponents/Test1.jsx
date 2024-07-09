import React from 'react'
import KeyPress from './KeyPress';
import TypingGame from './TypingGame';
import './Test1.css';
import ColemakKeyboard from '../components/keyboard/ColemakKeyboard';

const Test1 = () => {
  return (
    <div className='App'> 
       
      <TypingGame />
      <KeyPress />
      <ColemakKeyboard />
      </div>
  )
}

export default Test1