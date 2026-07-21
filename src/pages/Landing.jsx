import React from 'react';
import { Link } from 'react-router-dom';
import useApi from '../hooks/useApi';
import OpportunityCard from '../components/OpportunityCard';
import Header from '../components/Header';

function Landing() {
  const { data: opportunities } = useApi('/jobs/');
  const featuredOpportunities = opportunities.filter(opp => opp.urgent).slice(0, 3);
  const latestOpportunities = opportunities.slice(0, 6);

  return (
    <div className="min-h-screen bg-retro-beige">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="retro-card mb-8 text-center">
          <h2 className="retro-heading text-4xl mb-4">Welcome to Chronicle'26</h2>
          <p className="font-sans text-lg mb-4 max-w-2xl mx-auto">
            Your trusted source for internship and job opportunities. Browse our archive of carefully curated positions from leading companies across various industries.
          </p>
          <Link to="/archive" className="retro-btn-primary inline-block">
            EXPLORE ARCHIVE
          </Link>
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
            {[
              { to: '/archive?type=Internship', icon: '📋', title: 'Internships',    desc: 'Explore internship opportunities to gain valuable experience' },
              { to: '/archive?type=Job',        icon: '💼', title: 'Full-Time Jobs', desc: 'Find full-time positions to launch your career' },
              { to: '/skill-corner',            icon: '📘', title: 'Skill Corner',   desc: 'Learn new skills with curated resources and guides' },
              { to: '/roadmap',                 icon: '🗺️', title: 'Career Roadmap', desc: 'Follow step-by-step paths to your dream role' },
              { to: '/toolkit',                 icon: '🧰', title: 'Toolkit',        desc: 'Access templates, prompts, and career tools' },
              { to: '/flysky',                  icon: '✈️', title: 'FlySky',         desc: 'Guide for studying abroad and global internships' },
            ].map(({ to, icon, title, desc }) => (
              <Link key={to} to={to} className="retro-card hover:bg-retro-beige transition-colors no-underline">
                <h3 className="retro-heading text-xl mb-2">{icon} {title}</h3>
                <p className="font-sans text-sm text-retro-brown">{desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-4 border-retro-black pt-6 mt-12 text-center">
          <p className="font-serif text-sm text-retro-brown">
            Chronicle'26 © 2026 | Documenting Your Next Opportunity
          </p>
        </footer>
      </main>
    </div>
  );
}

export default Landing;
