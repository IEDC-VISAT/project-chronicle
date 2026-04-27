import React from 'react';

function RoadmapStep({ step, isCompleted, onToggleComplete }) {
  return (
    <div className="retro-card mb-4">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className={`w-12 h-12 border-2 border-retro-black flex items-center justify-center font-serif text-xl font-bold ${
            isCompleted ? 'bg-retro-blue text-white' : 'bg-retro-grey'
          }`}>
            {step.id}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="retro-heading text-xl mb-1">{step.title}</h3>
              <p className="font-sans text-sm text-retro-brown italic">
                Duration: {step.duration}
              </p>
            </div>
            <button
              onClick={() => onToggleComplete(step.id)}
              className={`retro-btn text-xs ${isCompleted ? 'bg-retro-blue text-white' : ''}`}
            >
              {isCompleted ? '✓ COMPLETED' : 'MARK COMPLETE'}
            </button>
          </div>

          <p className="font-sans text-sm mb-3">{step.description}</p>

          {/* Skills */}
          <div className="mb-3">
            <h4 className="font-sans text-sm font-bold mb-2 border-b-1 border-retro-black pb-1">
              Skills to Learn:
            </h4>
            <ul className="font-sans text-sm space-y-1 list-none pl-0">
              {step.skills.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">▪</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="mb-3">
            <h4 className="font-sans text-sm font-bold mb-2 border-b-1 border-retro-black pb-1">
              Recommended Resources:
            </h4>
            <ul className="font-sans text-sm space-y-1 list-none pl-0">
              {step.resources.map((resource, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">📚</span>
                  <span>{resource}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-sans text-sm font-bold mb-2 border-b-1 border-retro-black pb-1">
              Suggested Projects:
            </h4>
            <ul className="font-sans text-sm space-y-1 list-none pl-0">
              {step.projects.map((project, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">🔨</span>
                  <span>{project}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoadmapStep;
