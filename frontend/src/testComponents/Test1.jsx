import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import KeyboardTrainer from './KeyboardTrainer';

const qwertyLayout = {
  'q': 'q', 'w': 'w', 'e': 'e', 'r': 'r', 't': 't', 'y': 'y', 'u': 'u', 'i': 'i', 'o': 'o', 'p': 'p',
  'a': 'a', 's': 's', 'd': 'd', 'f': 'f', 'g': 'g', 'h': 'h', 'j': 'j', 'k': 'k', 'l': 'l', ';': ';',
  'z': 'z', 'x': 'x', 'c': 'c', 'v': 'v', 'b': 'b', 'n': 'n', 'm': 'm', ',': ',', '.': '.', '/': '/',
  '[': '[', ']': ']', '\\': '\\', '`': '`', '-': '-', '=': '=', '1': '1', '2': '2', '3': '3', '4': '4',
  '5': '5', '6': '6', '7': '7', '8': '8', '9': '9', '0': '0'
};

const colemakLayout = {
  'q': 'q', 'w': 'w', 'f': 'e', 'p': 'r', 'g': 't', 'j': 'y', 'l': 'u', 'u': 'i', 'y': 'o', ';': 'p',
  'a': 'a', 'r': 's', 's': 'd', 't': 'f', 'd': 'g', 'h': 'h', 'n': 'j', 'e': 'k', 'i': 'l', 'o': ';',
  'z': 'z', 'x': 'x', 'c': 'c', 'v': 'v', 'b': 'b', 'k': 'n', 'm': 'm', ',': ',', '.': '.', '/': '/',
  '[': '[', ']': ']', '\\': '\\', '`': '`', '-': '-', '=': '=', '1': '1', '2': '2', '3': '3', '4': '4',
  '5': '5', '6': '6', '7': '7', '8': '8', '9': '9', '0': '0'
};

const dvorakLayout = {
  '\'': 'q', ',': 'w', '.': 'e', 'p': 'r', 'y': 't', 'f': 'y', 'g': 'u', 'c': 'i', 'r': 'o', 'l': 'p',
  'a': 'a', 'o': 's', 'e': 'd', 'u': 'f', 'i': 'g', 'd': 'h', 'h': 'j', 't': 'k', 'n': 'l', 's': ';',
  ';': 'z', 'q': 'x', 'j': 'c', 'k': 'v', 'x': 'b', 'b': 'n', 'm': 'm', 'w': ',', 'v': '.', 'z': '/',
  '[': '[', ']': ']', '\\': '\\', '`': '`', '-': '-', '=': '=', '1': '1', '2': '2', '3': '3', '4': '4',
  '5': '5', '6': '6', '7': '7', '8': '8', '9': '9', '0': '0'
};

// Add other layouts as needed



const Test1 = () => {

  

  return (
    <div>
      <h1>Keyboard Layout Trainer</h1>
      {/* Example: Train Colemak on QWERTY base */}
      <KeyboardTrainer baseLayout={qwertyLayout} targetLayout={colemakLayout} />

      {/* Example: Train Dvorak on Colemak base */}
      <KeyboardTrainer baseLayout={colemakLayout} targetLayout={dvorakLayout} />

      {/* You can create more trainers for different base and target layouts */}
    </div>
  );
};


export default Test1;
