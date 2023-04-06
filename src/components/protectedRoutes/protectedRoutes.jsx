import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { TokenContext } from '../../context/userContext';

const ProtectedRoutes = ({ children }) => {
  const { token } = useContext(TokenContext);

  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoutes;
