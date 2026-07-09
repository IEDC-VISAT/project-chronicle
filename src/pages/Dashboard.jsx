import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useApi from '../hooks/useApi';
import OpportunityCard from '../components/OpportunityCard';
import FilterPanel from '../components/FilterPanel';
import BulletinPanel from '../components/BulletinPanel';

function Dashboard() {
  const [searchParams] = useSearchParams();
  const { data: opportunities, loading: jobsLoading } = useApi('/jobs/');
  const { data: bulletins } = useApi('/bulletins/');

  const [filteredOpportunities, setFilteredOpportunities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    type: searchParams.get('type') || '',
    location: '',
    domain: ''
  });

  useEffect(() => {
    let filtered = opportunities;

    if (filters.type) {
      filtered = filtered.filter(opp => opp.type === filters.type);
    }
    if (filters.location) {
      filtered = filtered.filter(opp =>
        opp.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    if (filters.domain) {
      filtered = filtered.filter(opp => opp.domain === filters.domain);
    }
    if (searchQuery) {
      filtered = filtered.filter(opp =>
        opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        opp.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredOpportunities(filtered);
  }, [filters, searchQuery, opportunities]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="retro-card mb-6">
        <h1 className="retro-heading text-4xl mb-4 text-center">The Chronicle Archive</h1>
        <div className="max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search the Chronicle..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="retro-input w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Filters */}
        <aside className="lg:col-span-3">
          <FilterPanel filters={filters} setFilters={setFilters} />
        </aside>

        {/* Center Column - Listings */}
        <section className="lg:col-span-6">
          <div className="border-b-4 border-retro-black mb-4 pb-2">
            <h2 className="retro-heading text-2xl">
              {jobsLoading ? 'Loading...' : `${filteredOpportunities.length} Opportunities Found`}
            </h2>
          </div>

          {jobsLoading ? (
            <div className="retro-card text-center py-12">
              <p className="font-sans text-lg text-retro-brown animate-pulse">
                Loading opportunities from Chronicle...
              </p>
            </div>
          ) : filteredOpportunities.length === 0 ? (
            <div className="retro-card text-center py-12">
              <p className="font-sans text-lg text-retro-brown">
                No opportunities match your criteria. Try adjusting your filters.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredOpportunities.map(opp => (
                <OpportunityCard key={opp.id} opportunity={opp} showUrgent={true} />
              ))}
            </div>
          )}
        </section>

        {/* Right Column - Bulletins */}
        <aside className="lg:col-span-3">
          <BulletinPanel bulletins={bulletins} />
        </aside>
      </div>
    </main>
  );
}

export default Dashboard;
