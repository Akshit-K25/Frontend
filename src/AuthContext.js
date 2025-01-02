import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true);
      try {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          const normalizedUser = normalizeUserData(parsedUser);
          console.log('[AuthContext] Restored user session:', normalizedUser);
          setUser(normalizedUser);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('[AuthContext] Error restoring session:', error);
        sessionStorage.removeItem('user');
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const normalizeUserData = (userData) => {
    if (!userData) return null;

    const normalizedRole = normalizeRole(userData.role, userData.roles);
    const normalizedRoles = normalizeRoles(userData.roles);

    return {
      ...userData,
      role: normalizedRole,
      roles: normalizedRoles,
    };
  };

  const normalizeRole = (role, roles) => {
    if (role && typeof role === 'string') {
      return role.toUpperCase().trim();
    }
    if (roles && Array.isArray(roles) && roles.length > 0) {
      return roles[0].toUpperCase().trim();
    }
    return 'USER';
  };

  const normalizeRoles = (roles) => {
    if (!roles) return ['USER'];
    if (typeof roles === 'string') return [roles.toUpperCase().trim()];
    if (Array.isArray(roles)) {
      return roles.map(role => role.toUpperCase().trim());
    }
    return ['USER'];
  };

  const login = async (userData) => {
    try {
        // Ensure we get the role from the database
        const normalizedUser = {
            ...userData,
            role: userData.role?.toUpperCase() || 'USER',
            roles: [userData.role?.toUpperCase() || 'USER']
        };
        
        console.log('[AuthContext] Logging in user:', normalizedUser);
        
        if (userData.token) {
            sessionStorage.setItem('token', userData.token);
        }
        
        setUser(normalizedUser);
        setIsAuthenticated(true);
        sessionStorage.setItem('user', JSON.stringify(normalizedUser));
        
        return normalizedUser;
    } catch (error) {
        console.error('[AuthContext] Login error:', error);
        throw new Error('Failed to process login');
    }
  };

  const logout = async () => {
    try {
      console.log('[AuthContext] Logging out user');
      sessionStorage.removeItem('user');
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('[AuthContext] Logout error:', error);
      throw new Error('Failed to process logout');
    }
  };

  const updateUser = (updates) => {
    try {
      const updatedUser = { ...user, ...updates };
      const normalizedUser = normalizeUserData(updatedUser);
      console.log('[AuthContext] Updating user:', normalizedUser);
      
      setUser(normalizedUser);
      sessionStorage.setItem('user', JSON.stringify(normalizedUser));
      
      return normalizedUser;
    } catch (error) {
      console.error('[AuthContext] Update user error:', error);
      throw new Error('Failed to update user');
    }
  };

  const hasRole = (requiredRole) => {
    if (!user || !user.roles) return false;
    return user.roles.includes(requiredRole.toUpperCase().trim());
  };

  const contextValue = {
    isAuthenticated,
    isLoading,
    user,
    login,
    logout,
    updateUser,
    hasRole,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;