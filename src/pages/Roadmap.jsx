import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useApi from '../hooks/useApi';
import RoadmapStep from '../components/RoadmapStep';
import { useBookmarks } from '../hooks/useBookmarks';

function Roadmap() {
  const { data: roadmaps, loading } = useApi('/roadmaps/');
  const [selectedRoleIdx, setSelectedRoleIdx] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const { isBookmarked, toggleBookmark } = useBookmarks();

  const selectedRoadmap = roadmaps[selectedRoleIdx] || null;
  const selectedRole = selectedRoadmap?.role || '';

  useEffect(() => {
    if (!selectedRole) return;
    const stored = localStorage.getItem(`roadmap_${selectedRole}`);
    setCompletedSteps(stored ? JSON.parse(stored) : []);
  }, [selectedRole]);

  const handleToggleComplete = (stepId) => {
    setCompletedSteps(prev => {
      const newCompleted = prev.includes(stepId)
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId];
      localStorage.setItem(`roadmap_${selectedRole}`, JSON.stringify(newCompleted));
      return newCompleted;
    });
  };

  if (loading) {
    return (
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="retro-card text-center py-12">
          <p className="font-sans text-lg text-retro-brown animate-pulse">Loading roadmaps...</p>
        </div>
      </main>
    );
  }

  const steps = selectedRoadmap?.steps || [];
  const progress = steps.length > 0 ? (completedSteps.length / steps.length) * 100 : 0;
  const roleBookmarked = isBookmarked(selectedRole, 'roadmaps');

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="retro-card mb-6 text-center">
        <h1 className="retro-heading text-5xl mb-3">🗺️ Career Roadmap</h1>
        <p className="font-serif italic text-lg text-retro-brown mb-4">
          "Your Blueprint to Success"
        </p>
        <p className="font-sans max-w-2xl mx-auto">
          Follow structured, step-by-step paths to achieve your dream career. Track your progress and stay motivated.
        </p>
      </div>

      {/* Role Selection */}
      <div className="retro-card mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="retro-heading text-xl">Select Your Target Role</h2>
          <button
            onClick={() => toggleBookmark(selectedRole, 'roadmaps')}
            className={`retro-btn ${roleBookmarked ? 'bg-retro-blue text-white' : ''}`}
          >
            {roleBookmarked ? '★ BOOKMARKED' : '☆ BOOKMARK ROLE'}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {roadmaps.map((roadmap, idx) => (
            <button
              key={roadmap.id}
              onClick={() => setSelectedRoleIdx(idx)}
              className={`retro-btn text-left ${idx === selectedRoleIdx ? 'bg-retro-black text-white' : ''}`}
            >
              {roadmap.role}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Tracker */}
      {selectedRoadmap && (
        <>
          <div className="retro-card mb-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="retro-heading text-xl">Your Progress</h2>
              <span className="font-sans font-bold text-lg">
                {completedSteps.length} / {steps.length} Steps
              </span>
            </div>
            <div className="w-full h-8 border-2 border-retro-black bg-retro-white">
              <div
                className="h-full bg-retro-blue border-r-2 border-retro-black transition-all duration-300"
                style={{ width: `${progress}%` }}
              >
                {progress > 0 && (
                  <span className="flex items-center justify-center h-full font-sans text-sm font-bold text-white">
                    {Math.round(progress)}%
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Roadmap Description */}
          <div className="retro-card mb-6 bg-retro-beige">
            <h2 className="retro-heading text-2xl mb-3">{selectedRoadmap.role}</h2>
            <p className="font-sans leading-relaxed">{selectedRoadmap.description}</p>
          </div>

          {/* Roadmap Steps */}
          <div className="border-b-4 border-retro-black mb-4 pb-2">
            <h2 className="retro-heading text-2xl">Step-by-Step Path</h2>
          </div>

          <div className="space-y-4">
            {steps.map(step => (
              <RoadmapStep
                key={step.id}
                step={step}
                isCompleted={completedSteps.includes(step.id)}
                onToggleComplete={handleToggleComplete}
              />
            ))}
          </div>

          {/* Completion Message */}
          {steps.length > 0 && completedSteps.length === steps.length && (
            <div className="retro-card mt-6 text-center bg-retro-blue text-white border-4 border-retro-black">
              <h2 className="retro-heading text-3xl mb-3">🎉 Congratulations!</h2>
              <p className="font-sans text-lg mb-4">
                You've completed the {selectedRole} roadmap! Keep building projects and applying for opportunities.
              </p>
              <button onClick={() => setCompletedSteps([])} className="retro-btn bg-white text-retro-black">
                RESET PROGRESS
              </button>
            </div>
          )}
        </>
      )}

      {/* Footer */}
      <div className="retro-card mt-8 text-center bg-retro-grey">
        <p className="font-sans text-sm text-retro-brown">
          💡 Remember: This is a guideline. Adapt the roadmap to your pace and circumstances.
        </p>
      </div>
    </main>
  );
}

export default Roadmap;
