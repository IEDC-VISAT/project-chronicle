import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <div className="min-h-screen bg-retro-beige">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/archive" element={<Dashboard />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/skill-corner" element={<SkillCorner />} />
        <Route path="/skill/:id" element={<SkillDetail />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/toolkit" element={<Toolkit />} />
        <Route path="/flysky" element={<FlySky />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/bulletin" element={<Bulletin />} />
      </Routes>
    </div>
  );
}

export default App;
