import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(email, password);

    if (result.success) {
      navigate('/archive');
    } else {
      setError(result.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-retro-beige flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-6">
          <h1 className="retro-heading text-5xl mb-2">Chronicle'26</h1>
          <p className="font-serif italic text-lg text-retro-brown">
            "Documenting Your Next Opportunity"
          </p>
        </div>

        {/* Login Box */}
        <div className="retro-card">
          <div className="border-b-2 border-retro-black pb-3 mb-4">
            <h2 className="retro-heading text-2xl">Login</h2>
            <p className="font-sans text-sm text-retro-brown">
              Access your Chronicle account
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-sans font-bold mb-2 text-sm">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="retro-input"
                placeholder="your.email@example.com"
                required
                disabled={loading}
              />
            </div>

            <div className="mb-4">
              <label className="block font-sans font-bold mb-2 text-sm">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="retro-input"
                placeholder="Enter your password"
                required
                disabled={loading}
              />
            </div>

            {error && (
              <div className="mb-4 p-3 bg-retro-red text-white border-2 border-retro-black">
                <p className="font-sans text-sm">⚠ {error}</p>
              </div>
            )}

            <button
              type="submit"
              className="retro-btn-primary w-full mb-3"
              disabled={loading}
            >
              {loading ? 'AUTHENTICATING...' : 'LOGIN'}
            </button>

            <div className="text-center">
              <p className="font-sans text-sm text-retro-brown">
                Don't have an account?{' '}
                <Link
                  to="/signup"
                  className="text-retro-blue underline font-bold"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Demo Credentials */}
        <div className="retro-card mt-4 bg-retro-grey">
          <p className="font-sans text-xs text-retro-brown">
            <strong>Demo:</strong> Create an account or use any registered email
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
