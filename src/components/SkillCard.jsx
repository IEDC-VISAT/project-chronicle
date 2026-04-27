import React from 'react';
import { Link } from 'react-router-dom';
import { useBookmarks } from '../hooks/useBookmarks';

function SkillCard({ skill }) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(skill.id, 'skills');

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-600';
      case 'Intermediate':
        return 'bg-yellow-600';
      case 'Advanced':
        return 'bg-retro-red';
      default:
        return 'bg-retro-brown';
    }
  };

  return (
    <div className="retro-card relative">
      {skill.trending && (
        <div className="absolute top-0 right-0 bg-retro-red text-white px-2 py-1 text-xs font-sans font-bold border-2 border-retro-black transform translate-x-2 -translate-y-2">
          🔥 TRENDING
        </div>
      )}
      
      {skill.editorsPick && !skill.trending && (
        <div className="absolute top-0 right-0 bg-retro-blue text-white px-2 py-1 text-xs font-sans font-bold border-2 border-retro-black transform translate-x-2 -translate-y-2">
          ⭐ EDITOR'S PICK
        </div>
      )}

      <div className="mb-3">
        <span className={`inline-block px-2 py-1 text-xs font-sans font-bold text-white border-2 border-retro-black ${getDifficultyColor(skill.difficulty)}`}>
          {skill.difficulty.toUpperCase()}
        </span>
      </div>

      <h3 className="retro-heading text-xl mb-2">{skill.name}</h3>
      
      <p className="font-sans text-sm text-retro-brown mb-3">
        {skill.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {skill.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block px-2 py-1 text-xs font-sans border-1 border-retro-black bg-retro-beige"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        <Link
          to={`/skill/${skill.id}`}
          className="retro-btn-primary flex-1 text-center no-underline"
        >
          LEARN MORE →
        </Link>
        <button
          onClick={() => toggleBookmark(skill.id, 'skills')}
          className={`retro-btn px-3 ${bookmarked ? 'bg-retro-blue text-white' : ''}`}
          title={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
          {bookmarked ? '★' : '☆'}
        </button>
      </div>
    </div>
  );
}

export default SkillCard;
