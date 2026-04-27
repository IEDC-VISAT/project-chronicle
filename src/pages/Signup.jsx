import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    const result = await signup(name, email, password);

    if (result.success) {
      // Show success and redirect to login
      alert(result.message + ' Please login to continue.');
      navigate('/login');
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

        {/* Signup Box */}
        <div className="retro-card">
          <div className="border-b-2 border-retro-black pb-3 mb-4">
            <h2 className="retro-heading text-2xl">Create Account</h2>
            <p className="font-sans text-sm text-retro-brown">
              Join Chronicle'26 today
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-sans font-bold mb-2 text-sm">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="retro-input"
                placeholder="John Doe"
                required
                disabled={loading}
              />
            </div>

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
                placeholder="At least 6 characters"
                required
                disabled={loading}
                minLength={6}
              />
            </div>

            <div className="mb-4">
              <label className="block font-sans font-bold mb-2 text-sm">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="retro-input"
                placeholder="Re-enter your password"
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
              {loading ? 'CREATING ACCOUNT...' : 'SIGN UP'}
            </button>

            <div className="text-center">
              <p className="font-sans text-sm text-retro-brown">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="text-retro-blue underline font-bold"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Info Box */}
        <div className="retro-card mt-4 bg-retro-grey">
          <p className="font-sans text-xs text-retro-brown">
            <strong>Note:</strong> Your data is stored locally in your browser. This is a demo authentication system.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
