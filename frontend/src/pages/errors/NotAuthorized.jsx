import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../Routes';

const NotAuthorized = () => {
  return (
    <>
      <div>You are not authorized to be here.</div>
      <Link to={ROUTES.LOGIN}>Login</Link>
    </>
  );
};

export default NotAuthorized;
