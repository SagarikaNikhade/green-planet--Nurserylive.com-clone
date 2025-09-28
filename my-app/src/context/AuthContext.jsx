import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../Redux/AuthReducer/action';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.authReducer);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Check if user is authenticated using Redux state
        if (auth.isAuthenticated) {
          // Verify token with backend
          await dispatch(getCurrentUser());
        }
      } catch (error) {
        console.log('Auth initialization error:', error);
      } finally {
        setIsInitialized(true);
      }
    };

    initializeAuth();
  }, [dispatch, auth.isAuthenticated]);

  const value = {
    isAuthenticated: auth.isAuthenticated || false,
    user: auth.user || null,
    token: auth.token || null,
    isLoading: auth.isLoading || false,
    isInitialized
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
