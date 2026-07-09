import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useApi from '../hooks/useApi';
import { useBookmarks } from '../hooks/useBookmarks';

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { data: opportunities, loading } = useApi('/jobs/');

  if (loading) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="retro-card text-center py-12">
          <p className="font-sans text-lg text-retro-brown animate-pulse">Loading...</p>
        </div>
      </main>
    );
  }

  const opportunity = opportunities.find(opp => opp.id === parseInt(id));

  if (!opportunity) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="retro-card text-center py-12">
          <h2 className="retro-heading text-3xl mb-4">Opportunity Not Found</h2>
          <p className="font-sans mb-6">The opportunity you're looking for doesn't exist.</p>
          <Link to="/archive" className="retro-btn-primary inline-block">
            RETURN TO ARCHIVE
          </Link>
        </div>
      </main>
    );
  }

  const bookmarked = isBookmarked(opportunity.id, 'opportunities');
  // API uses apply_link (snake_case), support both
  const applyLink = opportunity.apply_link || opportunity.applyLink;
  const postedDate = opportunity.posted_date || opportunity.postedDate;

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)} className="retro-btn mb-6">
        ← BACK
      </button>

      <article className="retro-card">
        {/* Header */}
        <div className="border-b-4 border-retro-black pb-4 mb-6">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`inline-block px-3 py-1 text-xs font-sans font-bold border-2 border-retro-black ${
              opportunity.type === 'Internship' ? 'bg-retro-blue text-white' : 'bg-retro-brown text-white'
            }`}>
              {opportunity.type.toUpperCase()}
            </span>
            {opportunity.urgent && (
              <span className="inline-block px-3 py-1 text-xs font-sans font-bold border-2 border-retro-black bg-retro-red text-white">
                BREAKING
              </span>
            )}
          </div>

          <h1 className="retro-heading text-4xl mb-4">{opportunity.title}</h1>

          <div className="font-sans text-lg space-y-2">
            <p className="font-bold text-xl">{opportunity.company}</p>
            <p className="text-retro-brown">📍 {opportunity.location}</p>
            <p className="text-retro-brown">🏷️ {opportunity.domain}</p>
            <p className="text-sm text-retro-brown italic">Published: {postedDate}</p>
          </div>
        </div>

        {/* Description */}
        <section className="mb-6">
          <h2 className="retro-heading text-2xl mb-3 border-b-2 border-retro-black pb-2">
            Position Overview
          </h2>
          <p className="font-sans leading-relaxed text-justify">{opportunity.description}</p>
        </section>

        {/* Requirements */}
        <section className="mb-6">
          <h2 className="retro-heading text-2xl mb-3 border-b-2 border-retro-black pb-2">
            Requirements
          </h2>
          <ul className="font-sans space-y-2 list-none pl-0">
            {(opportunity.requirements || []).map((req, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">▪</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Responsibilities */}
        <section className="mb-6">
          <h2 className="retro-heading text-2xl mb-3 border-b-2 border-retro-black pb-2">
            Responsibilities
          </h2>
          <ul className="font-sans space-y-2 list-none pl-0">
            {(opportunity.responsibilities || []).map((resp, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">▪</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Action Buttons */}
        <div className="border-t-4 border-retro-black pt-6 flex flex-wrap gap-4">
          {applyLink && (
            <a
              href={applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn-primary flex-1 text-center no-underline"
            >
              APPLY NOW →
            </a>
          )}
          <button
            onClick={() => toggleBookmark(opportunity.id, 'opportunities')}
            className={`retro-btn px-6 ${bookmarked ? 'bg-retro-blue text-white' : ''}`}
          >
            {bookmarked ? '★ BOOKMARKED' : '☆ SAVE TO BOOKMARKS'}
          </button>
        </div>
      </article>

      {/* Related Opportunities */}
      <section className="mt-8">
        <h2 className="retro-heading text-2xl mb-4 border-b-4 border-retro-black pb-2">
          More from {opportunity.domain}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {opportunities
            .filter(opp => opp.domain === opportunity.domain && opp.id !== opportunity.id)
            .slice(0, 2)
            .map(opp => (
              <Link
                key={opp.id}
                to={`/job/${opp.id}`}
                className="retro-card hover:bg-retro-beige transition-colors no-underline"
              >
                <h3 className="retro-heading text-lg mb-2">{opp.title}</h3>
                <p className="font-sans text-sm text-retro-brown">{opp.company}</p>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}

export default JobDetails;
