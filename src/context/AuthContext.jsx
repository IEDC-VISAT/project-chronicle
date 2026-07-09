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

  // Restore session from stored tokens on mount
  useEffect(() => {
    const token = localStorage.getItem('chronicle_access_token');
    const stored = localStorage.getItem('chronicle_current_user');
    if (token && stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem('chronicle_current_user');
        localStorage.removeItem('chronicle_access_token');
        localStorage.removeItem('chronicle_refresh_token');
      }
    }
    setLoading(false);
  }, []);

  // Signup function — calls Django /api/auth/register/
  const signup = async (name, email, password) => {
    try {
      const data = await api.register(name, email, password);
      return { success: true, message: 'Account created successfully! Please log in.' };
    } catch (err) {
      const msg = err.email?.[0] || err.password?.[0] || err.error || 'Registration failed';
      return { success: false, message: msg };
    }
  };

  // Login function — calls Django /api/auth/login/
  const login = async (email, password) => {
    try {
      const data = await api.login(email, password);
      const { tokens, user: userData } = data;

      localStorage.setItem('chronicle_access_token', tokens.access);
      localStorage.setItem('chronicle_refresh_token', tokens.refresh);

      const userSession = {
        id: userData.id,
        name: userData.first_name || userData.username,
        email: userData.email,
        createdAt: userData.date_joined,
      };
      localStorage.setItem('chronicle_current_user', JSON.stringify(userSession));
      setUser(userSession);

      return { success: true, user: userSession };
    } catch (err) {
      return { success: false, message: err.error || 'Invalid email or password' };
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem('chronicle_access_token');
    localStorage.removeItem('chronicle_refresh_token');
    localStorage.removeItem('chronicle_current_user');
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
