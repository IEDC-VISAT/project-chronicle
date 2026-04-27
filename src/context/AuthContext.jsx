import React, { createContext, useContext, useState, useEffect } from 'react';

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

  // Check for existing session on mount
  useEffect(() => {
    const currentUser = localStorage.getItem('chronicle_current_user');
    if (currentUser) {
      try {
        setUser(JSON.parse(currentUser));
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('chronicle_current_user');
      }
    }
    setLoading(false);
  }, []);

  // Signup function
  const signup = async (name, email, password) => {
    try {
      // Get existing users
      const usersData = localStorage.getItem('chronicle_users');
      const users = usersData ? JSON.parse(usersData) : [];

      // Check if email already exists
      const existingUser = users.find(u => u.email.toLowerCase() === email.toLowerCase());
      if (existingUser) {
        throw new Error('User with this email already exists');
      }

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password, // In production, this would be hashed
        createdAt: new Date().toISOString()
      };

      // Add to users array
      users.push(newUser);
      localStorage.setItem('chronicle_users', JSON.stringify(users));

      return { success: true, message: 'Account created successfully!' };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      // Get users from localStorage
      const usersData = localStorage.getItem('chronicle_users');
      const users = usersData ? JSON.parse(usersData) : [];

      // Find user with matching credentials
      const user = users.find(
        u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
      );

      if (!user) {
        throw new Error('Invalid email or password');
      }

      // Create user session (exclude password from session)
      const userSession = {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt
      };

      // Save current user
      localStorage.setItem('chronicle_current_user', JSON.stringify(userSession));
      setUser(userSession);

      return { success: true, user: userSession };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('chronicle_current_user');
    setUser(null);
  };

  // Check if user is authenticated
  const isAuthenticated = () => {
    return user !== null;
  };

  const value = {
    user,
    loading,
    signup,
    login,
    logout,
    isAuthenticated
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
