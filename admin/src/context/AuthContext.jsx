import React, { createContext, useContext, useState, useEffect } from 'react';
import adminApi from '../utils/api';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('chronicle_admin_access_token');
    const storedUser = localStorage.getItem('chronicle_admin_user');
    if (token && storedUser) {
      try {
        setIsAuthenticated(true);
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem('chronicle_admin_access_token');
        localStorage.removeItem('chronicle_admin_user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      const data = await adminApi.login(username, password);
      localStorage.setItem('chronicle_admin_access_token', data.tokens.access);
      localStorage.setItem('chronicle_admin_refresh_token', data.tokens.refresh);
      localStorage.setItem('chronicle_admin_user', JSON.stringify(data.user));
      setIsAuthenticated(true);
      setUser(data.user);
      return true;
    } catch (err) {
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('chronicle_admin_access_token');
    localStorage.removeItem('chronicle_admin_refresh_token');
    localStorage.removeItem('chronicle_admin_user');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
