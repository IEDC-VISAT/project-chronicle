import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import JobDetails from './pages/JobDetails';
import Bookmarks from './pages/Bookmarks';
import Bulletin from './pages/Bulletin';
import SkillCorner from './pages/SkillCorner';
import SkillDetail from './pages/SkillDetail';
import Roadmap from './pages/Roadmap';
import Toolkit from './pages/Toolkit';
import FlySky from './pages/FlySky';

const withHeader = (Page) => (
  <div className="min-h-screen bg-retro-beige">
    <Header />
    <Page />
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/"            element={<Landing />} />
        <Route path="/archive"     element={withHeader(Dashboard)} />
        <Route path="/job/:id"     element={withHeader(JobDetails)} />
        <Route path="/skill-corner" element={withHeader(SkillCorner)} />
        <Route path="/skill/:id"   element={withHeader(SkillDetail)} />
        <Route path="/roadmap"     element={withHeader(Roadmap)} />
        <Route path="/toolkit"     element={withHeader(Toolkit)} />
        <Route path="/flysky"      element={withHeader(FlySky)} />
        <Route path="/bookmarks"   element={withHeader(Bookmarks)} />
        <Route path="/bulletin"    element={withHeader(Bulletin)} />
        <Route path="*"            element={<Navigate to="/" replace />} />
      </Routes>
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;
