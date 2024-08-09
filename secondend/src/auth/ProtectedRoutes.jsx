import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import ROUTES from '../Routes';

const ProtectedRoute = () => {
  const signedIn = useAuth();

  return signedIn ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
};

export default ProtectedRoute;
