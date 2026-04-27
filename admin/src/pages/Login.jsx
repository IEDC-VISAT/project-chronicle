import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (login(username, password)) {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Use admin / admin123');
    }
  };

  return (
    <div className="min-h-screen bg-admin-grey flex items-center justify-center p-4">
      <div className="admin-card w-full max-w-md">
        <div className="bg-admin-blue text-white p-4 -m-4 mb-4 border-b-2 border-admin-black">
          <h1 className="font-bold text-2xl">Chronicle'26</h1>
          <p className="text-sm">Admin Control Panel</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-bold mb-2 text-sm">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="admin-input"
              placeholder="admin"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-bold mb-2 text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="admin-input"
              placeholder="admin123"
              required
            />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-admin-red text-white border-2 border-admin-black">
              {error}
            </div>
          )}

          <button type="submit" className="admin-btn-primary w-full">
            LOGIN
          </button>
        </form>

        <div className="mt-4 p-3 bg-admin-white border-2 border-admin-black">
          <p className="text-xs text-admin-dark">
            <strong>Default Credentials:</strong><br />
            Username: admin<br />
            Password: admin123
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
