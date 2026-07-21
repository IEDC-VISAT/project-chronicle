import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/api';

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Restore session on mount
  useEffect(() => {
    const stored = localStorage.getItem('chronicle_current_user');
    if (stored) {
      try {
        const sessionUser = JSON.parse(stored);
        setUser({
          id: sessionUser.id,
          name: sessionUser.first_name || sessionUser.email.split('@')[0],
          email: sessionUser.email,
          createdAt: sessionUser.date_joined,
        });
      } catch {
        localStorage.removeItem('chronicle_current_user');
      }
    }
    setLoading(false);
  }, []);

  // Signup function — uses Local Storage api
  const signup = async (name, email, password) => {
    try {
      await api.register(name, email, password);
      return { success: true, message: 'Account created successfully! Please log in.' };
    } catch (err) {
      const msg = err.email?.[0] || err.password?.[0] || err.error || 'Registration failed';
      return { success: false, message: msg };
    }
  };

  // Login function — uses Local Storage api
  const login = async (email, password) => {
    try {
      const data = await api.login(email, password);
      const userData = data.user;
      
      const userSession = {
        id: userData.id,
        name: userData.first_name || userData.email.split('@')[0],
        email: userData.email,
        createdAt: userData.date_joined,
      };
      
      setUser(userSession);
      return { success: true, user: userSession };
    } catch (err) {
      return { success: false, message: err.error || 'Invalid email or password' };
    }
  };

  // Logout
  const logout = async () => {
    await api.logout();
    setUser(null);
  };

  const isAuthenticated = () => user !== null;

  const value = { user, loading, signup, login, logout, isAuthenticated };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
