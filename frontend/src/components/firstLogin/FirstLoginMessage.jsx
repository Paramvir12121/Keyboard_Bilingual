import React from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../Routes';

const FirstLoginMessage = () => {
  const navigate = useNavigate();



  return (
    <div className="first-login-message" style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to Keyboard Bilingual!</h1>
      <p>
        Enhance your typing skills by learning a new keyboard layout without losing proficiency in your current one.
      </p>
      <p>
        Let's get started by selecting your current keyboard layout and the one you'd like to learn.
      </p>
      <button onClick={() => {navigate(ROUTES.SETUP_PAGE)}} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Start Setup
      </button>
      <p> </p>
       <p>
        Or... Dive right in and start typing!
      </p>
    </div>
  );
};

export default FirstLoginMessage;
