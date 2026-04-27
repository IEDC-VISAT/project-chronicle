import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { skills } from '../data/skills';
import { useBookmarks } from '../hooks/useBookmarks';

function SkillDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const skill = skills.find(s => s.id === parseInt(id));

  if (!skill) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="retro-card text-center py-12">
          <h2 className="retro-heading text-3xl mb-4">Skill Not Found</h2>
          <Link to="/skill-corner" className="retro-btn-primary inline-block">
            BACK TO SKILL CORNER
          </Link>
        </div>
      </main>
    );
  }

  const skillBookmarked = isBookmarked(skill.id, 'skills');

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-600';
      case 'Intermediate':
        return 'bg-yellow-600';
      case 'Advanced':
        return 'bg-retro-red';
      default:
        return 'bg-retro-brown';
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)} className="retro-btn mb-6">
        ← BACK
      </button>

      <article className="retro-card">
        {/* Header */}
        <div className="border-b-4 border-retro-black pb-4 mb-6">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className={`inline-block px-3 py-1 text-xs font-sans font-bold text-white border-2 border-retro-black ${getDifficultyColor(skill.difficulty)}`}>
              {skill.difficulty.toUpperCase()}
            </span>
            <span className="inline-block px-3 py-1 text-xs font-sans font-bold border-2 border-retro-black bg-retro-grey">
              {skill.category.toUpperCase()}
            </span>
            {skill.trending && (
              <span className="inline-block px-3 py-1 text-xs font-sans font-bold border-2 border-retro-black bg-retro-red text-white">
                🔥 TRENDING
              </span>
            )}
            {skill.editorsPick && (
              <span className="inline-block px-3 py-1 text-xs font-sans font-bold border-2 border-retro-black bg-retro-blue text-white">
                ⭐ EDITOR'S PICK
              </span>
            )}
          </div>

          <h1 className="retro-heading text-4xl mb-4">{skill.name}</h1>
          
          <p className="font-sans text-lg leading-relaxed">
            {skill.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {skill.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block px-3 py-1 text-sm font-sans border-2 border-retro-black bg-retro-beige"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* How to Learn */}
        <section className="mb-6">
          <h2 className="retro-heading text-2xl mb-4 border-b-2 border-retro-black pb-2">
            📋 How to Learn
          </h2>
          <div className="bg-retro-beige border-2 border-retro-black p-4">
            <ol className="font-sans space-y-3 list-none pl-0">
              {skill.howToLearn.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-8 h-8 border-2 border-retro-black bg-retro-blue text-white flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Where to Learn */}
        <section className="mb-6">
          <h2 className="retro-heading text-2xl mb-4 border-b-2 border-retro-black pb-2">
            📚 Where to Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skill.whereToLearn.map((resource, index) => (
              <div
                key={index}
                className="border-2 border-retro-black p-4 bg-retro-white hover:bg-retro-beige transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-sans font-bold">{resource.name}</h3>
                  <span className="inline-block px-2 py-1 text-xs font-sans border-1 border-retro-black bg-retro-grey">
                    {resource.type}
                  </span>
                </div>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-retro-blue underline"
                >
                  Visit Resource →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="border-t-4 border-retro-black pt-6">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link to="/roadmap" className="retro-btn-primary">
              VIEW CAREER ROADMAPS
            </Link>
            <Link to="/toolkit" className="retro-btn">
              EXPLORE TOOLKIT
            </Link>
            <button
              onClick={() => toggleBookmark(skill.id, 'skills')}
              className={`retro-btn ${skillBookmarked ? 'bg-retro-blue text-white' : ''}`}
            >
              {skillBookmarked ? '★ BOOKMARKED' : '☆ BOOKMARK SKILL'}
            </button>
          </div>
        </div>
      </article>

      {/* Related Skills */}
      <section className="mt-8">
        <h2 className="retro-heading text-2xl mb-4 border-b-4 border-retro-black pb-2">
          Related Skills in {skill.category}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills
            .filter(s => s.category === skill.category && s.id !== skill.id)
            .slice(0, 4)
            .map(relatedSkill => (
              <Link
                key={relatedSkill.id}
                to={`/skill/${relatedSkill.id}`}
                className="retro-card hover:bg-retro-beige transition-colors no-underline"
              >
                <h3 className="retro-heading text-lg mb-2">{relatedSkill.name}</h3>
                <p className="font-sans text-sm text-retro-brown">
                  {relatedSkill.difficulty} • {relatedSkill.tags.join(', ')}
                </p>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}

export default SkillDetail;
