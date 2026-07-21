import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import useApi from '../hooks/useApi';
import OpportunityCard from '../components/OpportunityCard';

function Landing() {
  const { user } = useAuth();
  const { data: opportunities } = useApi('/jobs/');
  const featuredOpportunities = opportunities.filter(opp => opp.urgent).slice(0, 3);
  const latestOpportunities = opportunities.slice(0, 6);

  return (
    <div className="min-h-screen bg-retro-beige">
      {user && (
        <header className="bg-retro-white border-b-4 border-retro-black">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="text-center">
              <Link to="/" className="no-underline">
                <h1 className="retro-heading text-5xl md:text-6xl mb-2 tracking-tight">
                  Chronicle'26
                </h1>
              </Link>
              <p className="font-serif italic text-lg text-retro-brown">
                "Documenting Your Next Opportunity"
              </p>
            </div>
          </div>
        </header>
      )}
      
      <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="retro-card mb-8 text-center">
        <h2 className="retro-heading text-4xl mb-4">Welcome to Chronicle'26</h2>
        <p className="font-sans text-lg mb-4 max-w-2xl mx-auto">
          Your trusted source for internship and job opportunities. Browse our archive of carefully curated positions from leading companies across various industries.
        </p>
        {user ? (
          <Link to="/archive" className="retro-btn-primary inline-block">
            EXPLORE ARCHIVE
          </Link>
        ) : (
          <div className="flex gap-4 justify-center">
            <Link to="/login" className="retro-btn-primary inline-block">
              LOGIN
            </Link>
            <Link to="/signup" className="retro-btn inline-block">
              SIGN UP
            </Link>
          </div>
        )}
      </section>

      {/* Featured Opportunities */}
      <section className="mb-8">
        <div className="border-b-4 border-retro-black mb-4 pb-2">
          <h2 className="retro-heading text-3xl inline-block bg-retro-red text-white px-4 py-2">
            ★ BREAKING OPPORTUNITIES ★
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredOpportunities.map(opp => (
            <OpportunityCard key={opp.id} opportunity={opp} showUrgent={true} />
          ))}
        </div>
      </section>

      {/* Latest Entries */}
      <section className="mb-8">
        <div className="border-b-4 border-retro-black mb-4 pb-2">
          <h2 className="retro-heading text-3xl">Latest Entries</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestOpportunities.map(opp => (
            <OpportunityCard key={opp.id} opportunity={opp} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-8">
        <div className="border-b-4 border-retro-black mb-4 pb-2">
          <h2 className="retro-heading text-3xl">Explore Chronicle Sections</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link to="/archive?type=Internship" className="retro-card hover:bg-retro-beige transition-colors no-underline">
            <h3 className="retro-heading text-xl mb-2">📋 Internships</h3>
            <p className="font-sans text-sm text-retro-brown">
              Explore internship opportunities to gain valuable experience
            </p>
          </Link>
          <Link to="/archive?type=Job" className="retro-card hover:bg-retro-beige transition-colors no-underline">
            <h3 className="retro-heading text-xl mb-2">💼 Full-Time Jobs</h3>
            <p className="font-sans text-sm text-retro-brown">
              Find full-time positions to launch your career
            </p>
          </Link>
          <Link to="/skill-corner" className="retro-card hover:bg-retro-beige transition-colors no-underline">
            <h3 className="retro-heading text-xl mb-2">📘 Skill Corner</h3>
            <p className="font-sans text-sm text-retro-brown">
              Learn new skills with curated resources and guides
            </p>
          </Link>
          <Link to="/roadmap" className="retro-card hover:bg-retro-beige transition-colors no-underline">
            <h3 className="retro-heading text-xl mb-2">🗺️ Career Roadmap</h3>
            <p className="font-sans text-sm text-retro-brown">
              Follow step-by-step paths to your dream role
            </p>
          </Link>
          <Link to="/toolkit" className="retro-card hover:bg-retro-beige transition-colors no-underline">
            <h3 className="retro-heading text-xl mb-2">🧰 Toolkit</h3>
            <p className="font-sans text-sm text-retro-brown">
              Access templates, prompts, and career tools
            </p>
          </Link>
          <Link to="/flysky" className="retro-card hover:bg-retro-beige transition-colors no-underline">
            <h3 className="retro-heading text-xl mb-2">✈️ FlySky</h3>
            <p className="font-sans text-sm text-retro-brown">
              Guide for studying abroad and global internships
            </p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-retro-black pt-6 mt-12 text-center">
        <p className="font-serif text-sm text-retro-brown">
          Chronicle'26 © 2026 | Documenting Your Next Opportunity
        </p>
        {!user && (
          <p className="font-sans text-xs text-retro-brown mt-2">
            <Link to="/login" className="underline">Login</Link> or <Link to="/signup" className="underline">Sign Up</Link> to access all features
          </p>
        )}
      </footer>
    </main>
    </div>
  );
}

export default Landing;
