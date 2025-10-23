import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate, useLocation, } from 'react-router';
import { DataContext } from '../Contexts/DataContext';

const ProtectedRoute = ({ children }) => {
  
  const { userInfo, loading } = useContext(AuthContext);
  const location = useLocation()
  location.state = location.pathname;

  if(loading){
    return <div className='w-full h-[90vh] flex justify-center items-center'><span className="loading scale-150 loading-infinity loading-xl"></span></div>
  }

  if (userInfo) {
    return children;
  }

  return <Navigate to="/Auth/Login" state={{ from: location.pathname }}/>;
};

export default ProtectedRoute;
