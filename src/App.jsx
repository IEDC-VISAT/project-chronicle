import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import JobDetails from './pages/JobDetails';
import Bookmarks from './pages/Bookmarks';
import Bulletin from './pages/Bulletin';
import SkillCorner from './pages/SkillCorner';
import SkillDetail from './pages/SkillDetail';
import Roadmap from './pages/Roadmap';
import Toolkit from './pages/Toolkit';
import FlySky from './pages/FlySky';

function AppContent() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routes */}
      <Route
        path="/archive"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-retro-beige">
              <Header />
              <Dashboard />
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/job/:id"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-retro-beige">
              <Header />
              <JobDetails />
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/skill-corner"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-retro-beige">
              <Header />
              <SkillCorner />
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/skill/:id"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-retro-beige">
              <Header />
              <SkillDetail />
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/roadmap"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-retro-beige">
              <Header />
              <Roadmap />
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/toolkit"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-retro-beige">
              <Header />
              <Toolkit />
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/flysky"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-retro-beige">
              <Header />
              <FlySky />
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/bookmarks"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-retro-beige">
              <Header />
              <Bookmarks />
            </div>
          </ProtectedRoute>
        }
      />
      <Route
        path="/bulletin"
        element={
          <ProtectedRoute>
            <div className="min-h-screen bg-retro-beige">
              <Header />
              <Bulletin />
            </div>
          </ProtectedRoute>
        }
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
        <ThemeToggle />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
