import React from 'react';
import { Link } from 'react-router-dom';
import { useBookmarks } from '../hooks/useBookmarks';

function OpportunityCard({ opportunity, showUrgent = false }) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(opportunity.id, 'opportunities');

  return (
    <div className="retro-card relative">
      {showUrgent && opportunity.urgent && (
        <div className="absolute top-0 right-0 bg-retro-red text-white px-3 py-1 font-sans text-xs font-bold border-2 border-retro-black transform translate-x-2 -translate-y-2">
          BREAKING
        </div>
      )}
      
      <div className="mb-3">
        <span className={`inline-block px-2 py-1 text-xs font-sans font-bold border-2 border-retro-black ${
          opportunity.type === 'Internship' ? 'bg-retro-blue text-white' : 'bg-retro-brown text-white'
        }`}>
          {opportunity.type.toUpperCase()}
        </span>
      </div>

      <h3 className="retro-heading text-xl mb-2">
        {opportunity.title}
      </h3>

      <div className="font-sans text-sm mb-3 space-y-1">
        <p className="font-bold">{opportunity.company}</p>
        <p className="text-retro-brown">📍 {opportunity.location}</p>
        <p className="text-retro-brown">🏷️ {opportunity.domain}</p>
        <p className="text-xs text-retro-brown italic">Posted: {opportunity.postedDate}</p>
      </div>

      <div className="flex gap-2 mt-4">
        <Link to={`/job/${opportunity.id}`} className="retro-btn-primary flex-1 text-center no-underline">
          VIEW DETAILS
        </Link>
        <button
          onClick={() => toggleBookmark(opportunity.id, 'opportunities')}
          className={`retro-btn px-3 ${bookmarked ? 'bg-retro-blue text-white' : ''}`}
          title={bookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
          {bookmarked ? '★' : '☆'}
        </button>
      </div>
    </div>
  );
}

export default OpportunityCard;
