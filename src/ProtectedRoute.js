import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ requiresAdmin, children }) => {
  const { isAuthenticated, isLoading, user } = useAuth();

  // Add debug logging
  console.log('Protected Route Check:', {
    isAuthenticated,
    isLoading,
    userRole: user?.role,
    requiresAdmin
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    console.log('User not authenticated, redirecting to login');
    return <Navigate to="/login" replace />;
  }

  if (requiresAdmin) {
    const userRole = (user?.role || '').toUpperCase();
    console.log('Admin check:', { userRole, isAdmin: userRole === 'ADMIN' });
    
    if (userRole !== 'ADMIN') {
      console.log('User is not admin, redirecting to home');
      return <Navigate to="/" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;