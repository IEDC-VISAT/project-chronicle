import React, { useState } from 'react';
import useApi from '../hooks/useApi';
import { useBookmarks } from '../hooks/useBookmarks';

function FlySky() {
  const { data: countries, loading: loadingCountries } = useApi('/flysky/countries/');
  const { data: universities, loading: loadingUnis } = useApi('/flysky/universities/');
  const { data: internships, loading: loadingInternships } = useApi('/flysky/internships/');

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [activeTab, setActiveTab] = useState('study');
  const [programFilter, setProgramFilter] = useState('');
  const { isBookmarked, toggleBookmark } = useBookmarks();

  const loading = loadingCountries || loadingUnis || loadingInternships;

  const getCountryUniversities = (countryName) => {
    let filtered = universities.filter(u => u.country === countryName);
    if (programFilter) {
      filtered = filtered.filter(u =>
        u.program.toLowerCase().includes(programFilter.toLowerCase())
      );
    }
    return filtered;
  };

  const applicationSteps = [
    { step: 1, title: 'Research & Choose', desc: 'Research universities, programs, costs, and visa requirements. Shortlist 5-8 universities.' },
    { step: 2, title: 'Prepare Documents', desc: 'Gather transcripts, letters of recommendation, SOP, resume, and language test scores.' },
    { step: 3, title: 'Take Required Tests', desc: 'Register for TOEFL/IELTS, GRE/GMAT as required. Allow time for retakes if needed.' },
    { step: 4, title: 'Submit Applications', desc: 'Apply to universities before deadlines. Pay application fees and submit all documents.' },
    { step: 5, title: 'Apply for Visa', desc: 'Upon acceptance, apply for student visa at the embassy. Book appointment early.' },
    { step: 6, title: 'Prepare for Departure', desc: 'Arrange accommodation, travel insurance, bank accounts, and orientation programs.' },
  ];

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
        <button onClick={() => setActiveTab('study')} className={`retro-btn ${activeTab === 'study' ? 'bg-retro-black text-white' : ''}`}>
          📚 STUDY ABROAD
        </button>
        <button onClick={() => setActiveTab('internships')} className={`retro-btn ${activeTab === 'internships' ? 'bg-retro-black text-white' : ''}`}>
          💼 INTERNATIONAL INTERNSHIPS
        </button>
        <button onClick={() => setActiveTab('guide')} className={`retro-btn ${activeTab === 'guide' ? 'bg-retro-black text-white' : ''}`}>
          📋 APPLICATION GUIDE
        </button>
      </div>

      {loading ? (
        <div className="retro-card text-center py-12">
          <p className="font-sans text-lg text-retro-brown animate-pulse">Loading FlySky data...</p>
        </div>
      ) : (
        <>
          {/* ── Study Abroad Tab ── */}
          {activeTab === 'study' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Country List */}
              <aside className="lg:col-span-1">
                <div className="border-b-4 border-retro-black mb-4 pb-2">
                  <h2 className="retro-heading text-2xl">Destinations</h2>
                </div>
                <div className="space-y-3">
                  {countries.map(country => (
                    <button
                      key={country.id}
                      onClick={() => setSelectedCountry(country)}
                      className={`retro-card w-full text-left transition-colors ${
                        selectedCountry?.id === country.id ? 'bg-retro-black text-white' : 'hover:bg-retro-beige'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{country.flag}</span>
                        <div>
                          <h3 className="retro-heading text-lg">{country.name}</h3>
                          <p className={`font-sans text-xs ${selectedCountry?.id === country.id ? 'text-gray-300' : 'text-retro-brown'}`}>
                            Click to explore
                          </p>
                        </div>
                        <button
                          onClick={(e) => { e.stopPropagation(); toggleBookmark(country.id, 'flysky'); }}
                          className="ml-auto text-lg"
                        >
                          {isBookmarked(country.id, 'flysky') ? '★' : '☆'}
                        </button>
                      </div>
                    </button>
                  ))}
                </div>
              </aside>

              {/* Country Details */}
              <section className="lg:col-span-2">
                {!selectedCountry ? (
                  <div className="retro-card text-center py-12">
                    <p className="font-sans text-lg text-retro-brown">
                      👈 Select a destination to explore study abroad details
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="retro-card">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-5xl">{selectedCountry.flag}</span>
                        <div>
                          <h2 className="retro-heading text-3xl">{selectedCountry.name}</h2>
                          <p className="font-sans text-retro-brown">{selectedCountry.description}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h3 className="retro-heading text-xl mb-2">📋 Requirements</h3>
                        <ul className="font-sans space-y-1">
                          {(selectedCountry.requirements || []).map((req, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2">▪</span><span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {(selectedCountry.scholarships || []).length > 0 && (
                        <div className="mb-4">
                          <h3 className="retro-heading text-xl mb-2">🎓 Scholarships</h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedCountry.scholarships.map((s, i) => (
                              <span key={i} className="px-3 py-1 bg-retro-beige border-2 border-retro-black font-sans text-sm">{s}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Universities */}
                    <div>
                      <div className="border-b-4 border-retro-black mb-4 pb-2 flex items-center justify-between">
                        <h3 className="retro-heading text-2xl">🏛️ Universities in {selectedCountry.name}</h3>
                      </div>
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="Filter by program..."
                          value={programFilter}
                          onChange={e => setProgramFilter(e.target.value)}
                          className="retro-input w-full"
                        />
                      </div>
                      <div className="space-y-3">
                        {getCountryUniversities(selectedCountry.name).map(uni => (
                          <div key={uni.id} className="retro-card">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="retro-heading text-xl">{uni.name}</h4>
                              {uni.ranking && <span className="font-sans text-sm text-retro-brown">Rank #{uni.ranking}</span>}
                            </div>
                            <p className="font-sans text-sm mb-2">{uni.description}</p>
                            <div className="flex flex-wrap gap-4 font-sans text-xs text-retro-brown">
                              <span>💰 {uni.tuition}</span>
                              <span>📊 Accept: {uni.acceptance_rate}</span>
                              <span>📚 {uni.program}</span>
                            </div>
                          </div>
                        ))}
                        {getCountryUniversities(selectedCountry.name).length === 0 && (
                          <div className="retro-card text-center py-6">
                            <p className="font-sans text-retro-brown">No universities found for this filter.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </section>
            </div>
          )}

          {/* ── International Internships Tab ── */}
          {activeTab === 'internships' && (
            <div>
              <div className="border-b-4 border-retro-black mb-6 pb-2">
                <h2 className="retro-heading text-3xl">International Internship Opportunities</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {internships.map(internship => (
                  <div key={internship.id} className="retro-card">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="retro-heading text-xl mb-1">{internship.title}</h3>
                        <p className="font-sans font-bold">{internship.company}</p>
                      </div>
                      <span className="inline-block px-2 py-1 text-xs font-sans border-2 border-retro-black bg-retro-blue text-white">
                        {internship.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3 font-sans text-sm text-retro-brown mb-3">
                      <span>📍 {internship.location}</span>
                      <span>⏱️ {internship.duration}</span>
                      <span>💰 {internship.stipend}</span>
                    </div>
                    <p className="font-sans text-sm mb-3">{internship.description}</p>
                    {(internship.requirements || []).length > 0 && (
                      <div>
                        <p className="font-sans text-xs font-bold mb-1">Requirements:</p>
                        <ul className="font-sans text-xs space-y-1">
                          {internship.requirements.map((r, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-1">▪</span><span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Application Guide Tab ── */}
          {activeTab === 'guide' && (
            <div>
              <div className="border-b-4 border-retro-black mb-6 pb-2">
                <h2 className="retro-heading text-3xl">Step-by-Step Application Guide</h2>
              </div>
              <div className="space-y-4">
                {applicationSteps.map(step => (
                  <div key={step.step} className="retro-card flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 border-4 border-retro-black bg-retro-blue text-white flex items-center justify-center font-bold text-xl">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="retro-heading text-xl mb-1">{step.title}</h3>
                      <p className="font-sans text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* Footer */}
      <div className="retro-card mt-8 text-center bg-retro-grey">
        <p className="font-sans text-sm text-retro-brown">
          💡 Tip: Start your application process at least 12-18 months before your intended start date
        </p>
      </div>
    </main>
  );
}

export default FlySky;
