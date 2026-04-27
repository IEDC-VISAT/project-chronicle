import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/jobs', label: 'Manage Jobs', icon: '💼' },
    { path: '/skills', label: 'Manage Skills', icon: '📘' },
    { path: '/roadmaps', label: 'Manage Roadmaps', icon: '🗺️' },
    { path: '/toolkit', label: 'Toolkit Manager', icon: '🧰' },
    { path: '/flysky', label: 'FlySky Manager', icon: '✈️' },
    { path: '/bulletins', label: 'Bulletins', icon: '📢' },
    { path: '/settings', label: 'Settings', icon: '⚙️' }
  ];

  return (
    <aside className="w-64 bg-admin-grey border-r-4 border-admin-black h-screen sticky top-0 flex flex-col">
      <div className="bg-admin-blue text-white p-4 border-b-4 border-admin-black">
        <h1 className="font-bold text-xl">Chronicle'26</h1>
        <p className="text-sm">Admin Control Panel</p>
      </div>
      
      <nav className="flex-1 p-2">
        {menuItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-4 py-3 mb-1 font-sans text-sm border-2 border-admin-black no-underline ${
              isActive(item.path)
                ? 'bg-admin-blue text-white'
                : 'bg-admin-white text-admin-black hover:bg-admin-dark hover:text-white'
            }`}
          >
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
      
      <div className="p-4 border-t-2 border-admin-black bg-admin-white">
        <p className="font-sans text-xs text-admin-dark">
          Version 1.0.0
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
