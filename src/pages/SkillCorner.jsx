import React, { useState } from 'react';
import { skills, categories } from '../data/skills';
import SkillCard from '../components/SkillCard';

function SkillCorner() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skills.filter(skill => {
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="retro-card mb-6 text-center">
        <h1 className="retro-heading text-5xl mb-3">📘 Skill Corner</h1>
        <p className="font-serif italic text-lg text-retro-brown mb-4">
          "Your Educational Column for Career Growth"
        </p>
        <p className="font-sans max-w-2xl mx-auto">
          Explore curated learning resources, roadmaps, and guides to master the skills that matter in today's job market.
        </p>
      </div>

      {/* Search Bar */}
      <div className="retro-card mb-6">
        <input
          type="text"
          placeholder="Search skills..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="retro-input w-full"
        />
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <div className="border-b-4 border-retro-black mb-4 pb-2">
          <h2 className="retro-heading text-2xl">Browse by Category</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`retro-btn ${
                selectedCategory === category ? 'bg-retro-black text-white' : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="border-b-4 border-retro-black mb-4 pb-2">
        <h2 className="retro-heading text-2xl">
          {filteredSkills.length} Skills Found
        </h2>
      </div>

      {filteredSkills.length === 0 ? (
        <div className="retro-card text-center py-12">
          <p className="font-sans text-lg text-retro-brown">
            No skills match your search. Try different keywords or categories.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      )}

      {/* Footer Note */}
      <div className="retro-card mt-8 text-center bg-retro-grey">
        <p className="font-sans text-sm text-retro-brown">
          💡 Tip: Click on any skill card to view detailed learning roadmap and resources
        </p>
      </div>
    </main>
  );
}

export default SkillCorner;
