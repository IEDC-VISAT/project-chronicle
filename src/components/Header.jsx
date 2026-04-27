import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  
  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    <header className="bg-retro-white border-b-4 border-retro-black">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex justify-between items-start mb-4">
          <div className="text-center flex-1">
            <Link to="/" className="no-underline">
              <h1 className="retro-heading text-5xl md:text-6xl mb-2 tracking-tight">
                Chronicle'26
              </h1>
            </Link>
            <p className="font-serif italic text-lg text-retro-brown">
              "Documenting Your Next Opportunity"
            </p>
          </div>
          
          {user && (
            <div className="flex items-center gap-2">
              <div className="text-right mr-2">
                <p className="font-sans text-sm font-bold">{user.name}</p>
                <p className="font-sans text-xs text-retro-brown">{user.email}</p>
              </div>
              <button
                onClick={handleLogout}
                className="retro-btn text-xs"
                title="Logout"
              >
                LOGOUT
              </button>
            </div>
          )}
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
