import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = () => {
  const signedIn = useAuth();

  return signedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
