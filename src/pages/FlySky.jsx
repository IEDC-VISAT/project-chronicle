import React, { useState } from 'react';
import { studyAbroadCountries, internationalInternships, applicationSteps } from '../data/flysky';
import { universities } from '../data/universities';
import { useBookmarks } from '../hooks/useBookmarks';

function FlySky() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [activeTab, setActiveTab] = useState('study');
  const [universityFilters, setUniversityFilters] = useState({
    program: '',
    ranking: '',
    acceptance: ''
  });
  const { isBookmarked, toggleBookmark } = useBookmarks();

  const getFilteredUniversities = (countryId) => {
    if (!countryId || !universities[countryId]) return [];
    
    let filtered = universities[countryId];

    if (universityFilters.program) {
      filtered = filtered.filter(uni =>
        uni.programs.some(p => p.toLowerCase().includes(universityFilters.program.toLowerCase()))
      );
    }

    if (universityFilters.ranking) {
      const rankNum = parseInt(universityFilters.ranking);
      filtered = filtered.filter(uni => {
        const uniRank = parseInt(uni.ranking.match(/\d+/)[0]);
        return uniRank <= rankNum;
      });
    }

    if (universityFilters.acceptance) {
      const acceptNum = parseInt(universityFilters.acceptance);
      filtered = filtered.filter(uni => {
        const uniAccept = parseInt(uni.acceptance);
        return uniAccept >= acceptNum;
      });
    }

    return filtered;
  };

  const clearUniversityFilters = () => {
    setUniversityFilters({ program: '', ranking: '', acceptance: '' });
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="retro-card mb-6 text-center">
        <h1 className="retro-heading text-5xl mb-3">✈️ FlySky</h1>
        <p className="font-serif italic text-lg text-retro-brown mb-4">
          "Your Gateway to Global Opportunities"
        </p>
        <p className="font-sans max-w-2xl mx-auto">
          Comprehensive guide for studying abroad and securing international internships. Plan your journey to global success.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab('study')}
          className={`retro-btn ${activeTab === 'study' ? 'bg-retro-black text-white' : ''}`}
        >
          📚 STUDY ABROAD
        </button>
        <button
          onClick={() => setActiveTab('internships')}
          className={`retro-btn ${activeTab === 'internships' ? 'bg-retro-black text-white' : ''}`}
        >
          💼 INTERNATIONAL INTERNSHIPS
        </button>
        <button
          onClick={() => setActiveTab('guide')}
          className={`retro-btn ${activeTab === 'guide' ? 'bg-retro-black text-white' : ''}`}
        >
          📋 APPLICATION GUIDE
        </button>
      </div>

      {/* Study Abroad Tab */}
      {activeTab === 'study' && (
        <>
          <div className="border-b-4 border-retro-black mb-4 pb-2">
            <h2 className="retro-heading text-3xl">Study Abroad Destinations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {studyAbroadCountries.map(country => {
              const countryBookmarked = isBookmarked(country.id, 'countries');
              return (
                <div
                  key={country.id}
                  className="retro-card relative"
                >
                  <button
                    onClick={() => toggleBookmark(country.id, 'countries')}
                    className={`absolute top-2 right-2 retro-btn px-2 py-1 text-xs ${countryBookmarked ? 'bg-retro-blue text-white' : ''}`}
                    title={countryBookmarked ? 'Remove bookmark' : 'Add bookmark'}
                  >
                    {countryBookmarked ? '★' : '☆'}
                  </button>
                  <div className="text-center mb-3">
                    <span className="text-5xl">{country.flag}</span>
                  </div>
                  <h3 className="retro-heading text-xl text-center mb-2">{country.name}</h3>
                  <p className="font-sans text-sm text-center text-retro-brown mb-3">
                    {country.description}
                  </p>
                  <button
                    onClick={() => setSelectedCountry(selectedCountry?.id === country.id ? null : country)}
                    className="retro-btn w-full"
                  >
                    {selectedCountry?.id === country.id ? 'HIDE DETAILS' : 'VIEW DETAILS'}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Country Details */}
          {selectedCountry && (
            <div className="retro-card mb-6 bg-retro-beige">
              <div className="text-center mb-4">
                <span className="text-6xl">{selectedCountry.flag}</span>
                <h2 className="retro-heading text-3xl mt-2">{selectedCountry.name}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Requirements */}
                <div>
                  <h3 className="retro-heading text-xl mb-3 border-b-2 border-retro-black pb-2">
                    📋 Requirements
                  </h3>
                  <ul className="font-sans text-sm space-y-2 list-none pl-0">
                    {selectedCountry.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">▪</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exams */}
                <div>
                  <h3 className="retro-heading text-xl mb-3 border-b-2 border-retro-black pb-2">
                    📝 Required Exams
                  </h3>
                  <div className="space-y-2">
                    {selectedCountry.exams.map((exam, index) => (
                      <div key={index} className="border-2 border-retro-black p-2 bg-retro-white">
                        <p className="font-sans text-sm font-bold">{exam.name}</p>
                        <p className="font-sans text-xs text-retro-brown">
                          {exam.type} • Score: {exam.score}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cost Overview */}
                <div>
                  <h3 className="retro-heading text-xl mb-3 border-b-2 border-retro-black pb-2">
                    💰 Cost Overview
                  </h3>
                  <div className="font-sans text-sm space-y-2">
                    <p><strong>Tuition:</strong> {selectedCountry.costOverview.tuition}</p>
                    <p><strong>Living Expenses:</strong> {selectedCountry.costOverview.living}</p>
                    <p className="pt-2 border-t-2 border-retro-black">
                      <strong>Total Estimated:</strong> {selectedCountry.costOverview.total}
                    </p>
                  </div>
                </div>

                {/* Popular Programs */}
                <div>
                  <h3 className="retro-heading text-xl mb-3 border-b-2 border-retro-black pb-2">
                    🎓 Popular Programs
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCountry.popularPrograms.map((program, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 text-xs font-sans border-2 border-retro-black bg-retro-blue text-white"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 p-3 border-2 border-retro-black bg-retro-white">
                    <p className="font-sans text-sm">
                      <strong>Work Rights:</strong> {selectedCountry.workRights}
                    </p>
                  </div>
                </div>
              </div>

              {/* Universities Section */}
              <div className="mt-6">
                <div className="border-b-4 border-retro-black mb-4 pb-2">
                  <h2 className="retro-heading text-2xl">🏛️ Top Universities in {selectedCountry.name}</h2>
                </div>

                {/* University Filters */}
                <div className="retro-card mb-4 bg-retro-grey">
                  <h3 className="font-sans font-bold mb-3">Filter Universities:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                    <div>
                      <label className="font-sans text-xs font-bold block mb-1">Program</label>
                      <input
                        type="text"
                        placeholder="e.g., Computer Science"
                        value={universityFilters.program}
                        onChange={(e) => setUniversityFilters(prev => ({ ...prev, program: e.target.value }))}
                        className="retro-input w-full text-sm"
                      />
                    </div>
                    <div>
                      <label className="font-sans text-xs font-bold block mb-1">Max Ranking</label>
                      <select
                        value={universityFilters.ranking}
                        onChange={(e) => setUniversityFilters(prev => ({ ...prev, ranking: e.target.value }))}
                        className="retro-input w-full text-sm"
                      >
                        <option value="">All Rankings</option>
                        <option value="50">Top 50</option>
                        <option value="100">Top 100</option>
                        <option value="200">Top 200</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-sans text-xs font-bold block mb-1">Min Acceptance Rate</label>
                      <select
                        value={universityFilters.acceptance}
                        onChange={(e) => setUniversityFilters(prev => ({ ...prev, acceptance: e.target.value }))}
                        className="retro-input w-full text-sm"
                      >
                        <option value="">All Rates</option>
                        <option value="30">30%+</option>
                        <option value="40">40%+</option>
                        <option value="50">50%+</option>
                      </select>
                    </div>
                  </div>
                  {(universityFilters.program || universityFilters.ranking || universityFilters.acceptance) && (
                    <button onClick={clearUniversityFilters} className="retro-btn text-xs">
                      CLEAR FILTERS
                    </button>
                  )}
                </div>

                {/* University List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {getFilteredUniversities(selectedCountry.id).map(uni => {
                    const uniBookmarked = isBookmarked(uni.id, 'universities');
                    return (
                      <div key={uni.id} className="retro-card relative">
                        <button
                          onClick={() => toggleBookmark(uni.id, 'universities')}
                          className={`absolute top-2 right-2 retro-btn px-2 py-1 text-xs ${uniBookmarked ? 'bg-retro-blue text-white' : ''}`}
                          title={uniBookmarked ? 'Remove bookmark' : 'Add bookmark'}
                        >
                          {uniBookmarked ? '★' : '☆'}
                        </button>
                        
                        <h3 className="retro-heading text-lg mb-2 pr-8">{uni.name}</h3>
                        <p className="font-sans text-sm text-retro-brown mb-3">
                          📍 {uni.location} • {uni.ranking}
                        </p>

                        <div className="grid grid-cols-2 gap-2 mb-3">
                          <div className="border-2 border-retro-black p-2 bg-retro-beige">
                            <p className="font-sans text-xs text-retro-brown">Tuition</p>
                            <p className="font-sans text-xs font-bold">{uni.tuition}</p>
                          </div>
                          <div className="border-2 border-retro-black p-2 bg-retro-beige">
                            <p className="font-sans text-xs text-retro-brown">Acceptance</p>
                            <p className="font-sans text-xs font-bold">{uni.acceptance}</p>
                          </div>
                        </div>

                        <div className="mb-3">
                          <p className="font-sans text-xs font-bold mb-1">Popular Programs:</p>
                          <div className="flex flex-wrap gap-1">
                            {uni.programs.slice(0, 3).map((prog, idx) => (
                              <span key={idx} className="inline-block px-2 py-1 text-xs font-sans border-1 border-retro-black bg-retro-white">
                                {prog}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mb-3 p-2 border-2 border-retro-black bg-retro-white">
                          <p className="font-sans text-xs mb-1"><strong>Requirements:</strong></p>
                          <p className="font-sans text-xs">
                            {Object.entries(uni.requirements).map(([key, value]) => 
                              `${key.toUpperCase()}: ${value}`
                            ).join(' • ')}
                          </p>
                        </div>

                        <p className="font-sans text-xs text-retro-brown mb-2">
                          <strong>Deadline:</strong> {uni.applicationDeadline}
                        </p>

                        <a
                          href={uni.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="retro-btn-primary w-full text-center block no-underline text-xs"
                        >
                          VISIT WEBSITE →
                        </a>
                      </div>
                    );
                  })}
                </div>

                {getFilteredUniversities(selectedCountry.id).length === 0 && (
                  <div className="retro-card text-center py-8">
                    <p className="font-sans text-retro-brown">
                      No universities match your filters. Try adjusting your criteria.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* International Internships Tab */}
      {activeTab === 'internships' && (
        <>
          <div className="border-b-4 border-retro-black mb-4 pb-2">
            <h2 className="retro-heading text-3xl">International Internship Programs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internationalInternships.map(internship => {
              const internshipBookmarked = isBookmarked(internship.id, 'internships');
              return (
                <div key={internship.id} className="retro-card relative">
                  <button
                    onClick={() => toggleBookmark(internship.id, 'internships')}
                    className={`absolute top-2 right-2 retro-btn px-2 py-1 text-xs ${internshipBookmarked ? 'bg-retro-blue text-white' : ''}`}
                    title={internshipBookmarked ? 'Remove bookmark' : 'Add bookmark'}
                  >
                    {internshipBookmarked ? '★' : '☆'}
                  </button>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="retro-heading text-xl pr-8">{internship.name}</h3>
                    <span className="inline-block px-2 py-1 text-xs font-sans font-bold border-2 border-retro-black bg-retro-blue text-white">
                      {internship.type}
                    </span>
                  </div>

                <p className="font-sans text-sm font-bold mb-2">{internship.organization}</p>
                <p className="font-sans text-sm mb-3">{internship.description}</p>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="border-2 border-retro-black p-2 bg-retro-beige">
                    <p className="font-sans text-xs text-retro-brown">Duration</p>
                    <p className="font-sans text-sm font-bold">{internship.duration}</p>
                  </div>
                  <div className="border-2 border-retro-black p-2 bg-retro-beige">
                    <p className="font-sans text-xs text-retro-brown">Stipend</p>
                    <p className="font-sans text-sm font-bold">{internship.stipend}</p>
                  </div>
                </div>

                <div className="mb-3 p-3 border-2 border-retro-black bg-retro-white">
                  <p className="font-sans text-xs text-retro-brown mb-1">Eligibility</p>
                  <p className="font-sans text-sm">{internship.eligibility}</p>
                </div>

                <div className="mb-3 p-3 border-2 border-retro-black bg-retro-white">
                  <p className="font-sans text-xs text-retro-brown mb-1">Application Period</p>
                  <p className="font-sans text-sm font-bold">{internship.applicationPeriod}</p>
                </div>

                <a
                  href={internship.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-btn-primary w-full text-center block no-underline"
                >
                  VISIT WEBSITE →
                </a>
              </div>
            );
          })}
          </div>
        </>
      )}

      {/* Application Guide Tab */}
      {activeTab === 'guide' && (
        <>
          <div className="border-b-4 border-retro-black mb-4 pb-2">
            <h2 className="retro-heading text-3xl">Step-by-Step Application Guide</h2>
          </div>

          <div className="space-y-4">
            {applicationSteps.map(step => (
              <div key={step.step} className="retro-card">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border-2 border-retro-black bg-retro-blue text-white flex items-center justify-center font-serif text-xl font-bold">
                      {step.step}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="retro-heading text-xl">{step.title}</h3>
                      <span className="inline-block px-2 py-1 text-xs font-sans border-1 border-retro-black bg-retro-grey">
                        {step.timeline}
                      </span>
                    </div>

                    <p className="font-sans text-sm mb-3">{step.description}</p>

                    <div className="bg-retro-beige border-2 border-retro-black p-3">
                      <h4 className="font-sans text-sm font-bold mb-2">Tasks:</h4>
                      <ul className="font-sans text-sm space-y-1 list-none pl-0">
                        {step.tasks.map((task, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2">☐</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="retro-card mt-6 text-center bg-retro-blue text-white">
            <h3 className="retro-heading text-2xl mb-3">Ready to Start Your Journey?</h3>
            <p className="font-sans mb-4">
              Begin with research and planning. Stay organized and track your progress through each step.
            </p>
          </div>
        </>
      )}

      {/* Footer */}
      <div className="retro-card mt-8 text-center bg-retro-grey">
        <p className="font-sans text-sm text-retro-brown">
          💡 Pro Tip: Start your application process at least 12-18 months before your intended start date
        </p>
      </div>
    </main>
  );
}

export default FlySky;
