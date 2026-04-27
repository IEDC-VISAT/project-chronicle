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
            <li>
              <Link 
                to="/" 
                className={`inline-block px-3 py-2 font-sans text-xs md:text-sm font-bold no-underline border-2 border-retro-black ${
                  isActive('/') ? 'bg-retro-black text-white' : 'bg-retro-grey text-retro-black hover:bg-retro-beige'
                }`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                to="/archive" 
                className={`inline-block px-3 py-2 font-sans text-xs md:text-sm font-bold no-underline border-2 border-retro-black ${
                  isActive('/archive') ? 'bg-retro-black text-white' : 'bg-retro-grey text-retro-black hover:bg-retro-beige'
                }`}
              >
                ARCHIVE
              </Link>
            </li>
            <li>
              <Link 
                to="/skill-corner" 
                className={`inline-block px-3 py-2 font-sans text-xs md:text-sm font-bold no-underline border-2 border-retro-black ${
                  isActive('/skill-corner') ? 'bg-retro-black text-white' : 'bg-retro-grey text-retro-black hover:bg-retro-beige'
                }`}
              >
                SKILL CORNER
              </Link>
            </li>
            <li>
              <Link 
                to="/roadmap" 
                className={`inline-block px-3 py-2 font-sans text-xs md:text-sm font-bold no-underline border-2 border-retro-black ${
                  isActive('/roadmap') ? 'bg-retro-black text-white' : 'bg-retro-grey text-retro-black hover:bg-retro-beige'
                }`}
              >
                ROADMAP
              </Link>
            </li>
            <li>
              <Link 
                to="/toolkit" 
                className={`inline-block px-3 py-2 font-sans text-xs md:text-sm font-bold no-underline border-2 border-retro-black ${
                  isActive('/toolkit') ? 'bg-retro-black text-white' : 'bg-retro-grey text-retro-black hover:bg-retro-beige'
                }`}
              >
                TOOLKIT
              </Link>
            </li>
            <li>
              <Link 
                to="/flysky" 
                className={`inline-block px-3 py-2 font-sans text-xs md:text-sm font-bold no-underline border-2 border-retro-black ${
                  isActive('/flysky') ? 'bg-retro-black text-white' : 'bg-retro-grey text-retro-black hover:bg-retro-beige'
                }`}
              >
                FLYSKY
              </Link>
            </li>
            <li>
              <Link 
                to="/bookmarks" 
                className={`inline-block px-3 py-2 font-sans text-xs md:text-sm font-bold no-underline border-2 border-retro-black ${
                  isActive('/bookmarks') ? 'bg-retro-black text-white' : 'bg-retro-grey text-retro-black hover:bg-retro-beige'
                }`}
              >
                BOOKMARKS
              </Link>
            </li>
            <li>
              <Link 
                to="/bulletin" 
                className={`inline-block px-3 py-2 font-sans text-xs md:text-sm font-bold no-underline border-2 border-retro-black ${
                  isActive('/bulletin') ? 'bg-retro-black text-white' : 'bg-retro-grey text-retro-black hover:bg-retro-beige'
                }`}
              >
                BULLETIN
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
