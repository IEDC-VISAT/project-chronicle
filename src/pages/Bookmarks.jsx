import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useApi from '../hooks/useApi';
import { useBookmarks } from '../hooks/useBookmarks';
import OpportunityCard from '../components/OpportunityCard';
import SkillCard from '../components/SkillCard';

function Bookmarks() {
  const { getBookmarksByType, getAllBookmarksCount } = useBookmarks();
  const [activeTab, setActiveTab] = useState('opportunities');

  const { data: opportunities } = useApi('/jobs/');
  const { data: skills } = useApi('/skills/');
  const { data: countries } = useApi('/flysky/countries/');
  const { data: internships } = useApi('/flysky/internships/');
  const { data: universities } = useApi('/flysky/universities/');
  const { data: roadmaps } = useApi('/roadmaps/');
  
  const bookmarkedOpportunities = opportunities.filter(opp => 
    getBookmarksByType('opportunities').includes(opp.id)
  );

  const bookmarkedSkills = skills.filter(skill =>
    getBookmarksByType('skills').includes(skill.id)
  );

  const bookmarkedCountries = countries.filter(country =>
    getBookmarksByType('countries').includes(country.id)
  );

  const bookmarkedInternships = internships.filter(internship =>
    getBookmarksByType('internships').includes(internship.id)
  );

  const bookmarkedRoadmaps = roadmaps
    .map(r => r.role)
    .filter(role => getBookmarksByType('roadmaps').includes(role));

  const bookmarkedUniversities = universities.filter(uni =>
    getBookmarksByType('universities').includes(uni.id)
  );

  const totalBookmarks = getAllBookmarksCount();

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="retro-card mb-6">
        <h1 className="retro-heading text-4xl mb-2 text-center">Your Bookmarks</h1>
        <p className="font-sans text-center text-retro-brown mb-4">
          All your saved items in one place
        </p>
        <p className="font-sans text-center font-bold">
          {totalBookmarks} Total Bookmarks
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab('opportunities')}
          className={`retro-btn ${activeTab === 'opportunities' ? 'bg-retro-black text-white' : ''}`}
        >
          💼 JOBS ({bookmarkedOpportunities.length})
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`retro-btn ${activeTab === 'skills' ? 'bg-retro-black text-white' : ''}`}
        >
          📘 SKILLS ({bookmarkedSkills.length})
        </button>
        <button
          onClick={() => setActiveTab('countries')}
          className={`retro-btn ${activeTab === 'countries' ? 'bg-retro-black text-white' : ''}`}
        >
          🌍 COUNTRIES ({bookmarkedCountries.length})
        </button>
        <button
          onClick={() => setActiveTab('universities')}
          className={`retro-btn ${activeTab === 'universities' ? 'bg-retro-black text-white' : ''}`}
        >
          🏛️ UNIVERSITIES ({bookmarkedUniversities.length})
        </button>
        <button
          onClick={() => setActiveTab('internships')}
          className={`retro-btn ${activeTab === 'internships' ? 'bg-retro-black text-white' : ''}`}
        >
          ✈️ INTERNSHIPS ({bookmarkedInternships.length})
        </button>
        <button
          onClick={() => setActiveTab('roadmaps')}
          className={`retro-btn ${activeTab === 'roadmaps' ? 'bg-retro-black text-white' : ''}`}
        >
          🗺️ ROADMAPS ({bookmarkedRoadmaps.length})
        </button>
      </div>

      {/* Opportunities Tab */}
      {activeTab === 'opportunities' && (
        <>
          {bookmarkedOpportunities.length === 0 ? (
            <div className="retro-card text-center py-12">
              <div className="text-6xl mb-4">💼</div>
              <h2 className="retro-heading text-2xl mb-4">No Job Bookmarks</h2>
              <p className="font-sans text-lg text-retro-brown mb-6">
                Browse opportunities and save the ones that interest you.
              </p>
              <Link to="/archive" className="retro-btn-primary inline-block">
                BROWSE ARCHIVE
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookmarkedOpportunities.map(opp => (
                <OpportunityCard key={opp.id} opportunity={opp} />
              ))}
            </div>
          )}
        </>
      )}

      {/* Skills Tab */}
      {activeTab === 'skills' && (
        <>
          {bookmarkedSkills.length === 0 ? (
            <div className="retro-card text-center py-12">
              <div className="text-6xl mb-4">📘</div>
              <h2 className="retro-heading text-2xl mb-4">No Skill Bookmarks</h2>
              <p className="font-sans text-lg text-retro-brown mb-6">
                Explore skills and bookmark the ones you want to learn.
              </p>
              <Link to="/skill-corner" className="retro-btn-primary inline-block">
                EXPLORE SKILLS
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookmarkedSkills.map(skill => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          )}
        </>
      )}

      {/* Countries Tab */}
      {activeTab === 'countries' && (
        <>
          {bookmarkedCountries.length === 0 ? (
            <div className="retro-card text-center py-12">
              <div className="text-6xl mb-4">🌍</div>
              <h2 className="retro-heading text-2xl mb-4">No Country Bookmarks</h2>
              <p className="font-sans text-lg text-retro-brown mb-6">
                Explore study abroad destinations and save your favorites.
              </p>
              <Link to="/flysky" className="retro-btn-primary inline-block">
                EXPLORE FLYSKY
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bookmarkedCountries.map(country => (
                <Link
                  key={country.id}
                  to="/flysky"
                  className="retro-card hover:bg-retro-beige transition-colors no-underline"
                >
                  <div className="text-center mb-3">
                    <span className="text-5xl">{country.flag}</span>
                  </div>
                  <h3 className="retro-heading text-xl text-center mb-2">{country.name}</h3>
                  <p className="font-sans text-sm text-center text-retro-brown">
                    {country.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </>
      )}

      {/* Internships Tab */}
      {activeTab === 'internships' && (
        <>
          {bookmarkedInternships.length === 0 ? (
            <div className="retro-card text-center py-12">
              <div className="text-6xl mb-4">✈️</div>
              <h2 className="retro-heading text-2xl mb-4">No Internship Bookmarks</h2>
              <p className="font-sans text-lg text-retro-brown mb-6">
                Discover international internship programs and save them.
              </p>
              <Link to="/flysky" className="retro-btn-primary inline-block">
                EXPLORE INTERNSHIPS
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bookmarkedInternships.map(internship => (
                <div key={internship.id} className="retro-card">
                  <h3 className="retro-heading text-xl mb-2">{internship.name}</h3>
                  <p className="font-sans text-sm font-bold mb-2">{internship.organization}</p>
                  <p className="font-sans text-sm text-retro-brown mb-3">
                    {internship.duration} • {internship.stipend}
                  </p>
                  <Link to="/flysky" className="retro-btn-primary w-full text-center block no-underline">
                    VIEW DETAILS
                  </Link>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Roadmaps Tab */}
      {activeTab === 'roadmaps' && (
        <>
          {bookmarkedRoadmaps.length === 0 ? (
            <div className="retro-card text-center py-12">
              <div className="text-6xl mb-4">🗺️</div>
              <h2 className="retro-heading text-2xl mb-4">No Roadmap Bookmarks</h2>
              <p className="font-sans text-lg text-retro-brown mb-6">
                Explore career roadmaps and bookmark your target roles.
              </p>
              <Link to="/roadmap" className="retro-btn-primary inline-block">
                EXPLORE ROADMAPS
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookmarkedRoadmaps.map(role => (
                <Link
                  key={role}
                  to="/roadmap"
                  className="retro-card hover:bg-retro-beige transition-colors no-underline"
                >
                  <h3 className="retro-heading text-xl mb-2">{role}</h3>
                  <p className="font-sans text-sm text-retro-brown">
                    View complete career roadmap
                  </p>
                </Link>
              ))}
            </div>
          )}
        </>
      )}

      {/* Universities Tab */}
      {activeTab === 'universities' && (
        <>
          {bookmarkedUniversities.length === 0 ? (
            <div className="retro-card text-center py-12">
              <div className="text-6xl mb-4">🏛️</div>
              <h2 className="retro-heading text-2xl mb-4">No University Bookmarks</h2>
              <p className="font-sans text-lg text-retro-brown mb-6">
                Browse universities in study abroad countries and save your favorites.
              </p>
              <Link to="/flysky" className="retro-btn-primary inline-block">
                EXPLORE UNIVERSITIES
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bookmarkedUniversities.map(uni => (
                <div key={uni.id} className="retro-card">
                  <h3 className="retro-heading text-lg mb-2">{uni.name}</h3>
                  <p className="font-sans text-sm text-retro-brown mb-3">
                    📍 {uni.country} {uni.ranking ? `• Rank #${uni.ranking}` : ''}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="border-2 border-retro-black p-2 bg-retro-beige">
                      <p className="font-sans text-xs text-retro-brown">Tuition</p>
                      <p className="font-sans text-xs font-bold">{uni.tuition}</p>
                    </div>
                    <div className="border-2 border-retro-black p-2 bg-retro-beige">
                      <p className="font-sans text-xs text-retro-brown">Acceptance</p>
                      <p className="font-sans text-xs font-bold">{uni.acceptance_rate}</p>
                    </div>
                  </div>
                  <Link to="/flysky" className="retro-btn-primary w-full text-center block no-underline text-sm">
                    VIEW DETAILS →
                  </Link>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </main>
  );
}

export default Bookmarks;
