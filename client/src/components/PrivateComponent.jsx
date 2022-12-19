import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

const PrivateComponent = () => {
  const { auth } = useStateContext();
  return auth ? <Outlet /> : <Navigate to='/' />;
}

export default PrivateComponent