import React from 'react';
import { opportunities } from '../data/mockData';

function FilterPanel({ filters, setFilters }) {
  const uniqueLocations = [...new Set(opportunities.map(opp => opp.location))];
  const uniqueDomains = [...new Set(opportunities.map(opp => opp.domain))];

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ type: '', location: '', domain: '' });
  };

  const hasActiveFilters = filters.type || filters.location || filters.domain;

  return (
    <div className="retro-card sticky top-4">
      <div className="border-b-2 border-retro-black pb-3 mb-4">
        <h2 className="retro-heading text-xl">Filter Results</h2>
      </div>

      {/* Type Filter */}
      <div className="mb-4">
        <label className="font-sans text-sm font-bold block mb-2">
          Opportunity Type
        </label>
        <select
          value={filters.type}
          onChange={(e) => handleFilterChange('type', e.target.value)}
          className="retro-input w-full"
        >
          <option value="">All Types</option>
          <option value="Internship">Internship</option>
          <option value="Job">Full-Time Job</option>
        </select>
      </div>

      {/* Location Filter */}
      <div className="mb-4">
        <label className="font-sans text-sm font-bold block mb-2">
          Location
        </label>
        <select
          value={filters.location}
          onChange={(e) => handleFilterChange('location', e.target.value)}
          className="retro-input w-full"
        >
          <option value="">All Locations</option>
          {uniqueLocations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>

      {/* Domain Filter */}
      <div className="mb-4">
        <label className="font-sans text-sm font-bold block mb-2">
          Domain
        </label>
        <select
          value={filters.domain}
          onChange={(e) => handleFilterChange('domain', e.target.value)}
          className="retro-input w-full"
        >
          <option value="">All Domains</option>
          {uniqueDomains.map(domain => (
            <option key={domain} value={domain}>{domain}</option>
          ))}
        </select>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="retro-btn w-full"
        >
          CLEAR FILTERS
        </button>
      )}

      <div className="border-t-2 border-retro-black pt-4 mt-4">
        <p className="font-sans text-xs text-retro-brown italic">
          Tip: Use multiple filters to narrow your search
        </p>
      </div>
    </div>
  );
}

export default FilterPanel;
