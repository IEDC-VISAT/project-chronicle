import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Header() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-admin-white border-b-4 border-admin-black p-4 flex justify-between items-center">
      <div>
        <h2 className="font-bold text-xl">Content Management System</h2>
        <p className="text-sm text-admin-dark">Manage all Chronicle'26 data</p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="font-bold text-sm">Admin User</p>
          <p className="text-xs text-admin-dark">admin@chronicle26.com</p>
        </div>
        <button
          onClick={handleLogout}
          className="admin-btn-danger"
        >
          LOGOUT
        </button>
      </div>
    </header>
  );
}

export default Header;
