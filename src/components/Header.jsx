import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-retro-white border-b-4 border-retro-black">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center mb-4">
          <Link to="/" className="no-underline">
            <h1 className="retro-heading text-5xl md:text-6xl mb-2 tracking-tight">
              Chronicle'26
            </h1>
          </Link>
          <p className="font-serif italic text-lg text-retro-brown">
            "Documenting Your Next Opportunity"
          </p>
        </div>

        <nav className="border-t-2 border-b-2 border-retro-black py-2 mt-4">
          <ul className="flex flex-wrap justify-center gap-1 md:gap-2 list-none m-0 p-0">
            {[
              { to: '/',            label: 'HOME' },
              { to: '/archive',     label: 'ARCHIVE' },
              { to: '/skill-corner', label: 'SKILL CORNER' },
              { to: '/roadmap',     label: 'ROADMAP' },
              { to: '/toolkit',     label: 'TOOLKIT' },
              { to: '/flysky',      label: 'FLYSKY' },
              { to: '/bookmarks',   label: 'BOOKMARKS' },
              { to: '/bulletin',    label: 'BULLETIN' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`inline-block px-3 py-2 font-sans text-xs md:text-sm font-bold no-underline border-2 border-retro-black ${
                    isActive(to)
                      ? 'bg-retro-black text-white'
                      : 'bg-retro-grey text-retro-black hover:bg-retro-beige'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
