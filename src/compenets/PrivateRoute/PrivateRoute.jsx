import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const authToken = localStorage.getItem('a1b2c3'); //guardar un dato random para local storeg
  const isAuthenticated = authToken === 'l0g1n'; // autenticador de si esta logeado o no

  return isAuthenticated ? children : <Navigate to="/" state={{ from: location }} replace />; // metodo para asegurar la privacidad de las paginas
};
