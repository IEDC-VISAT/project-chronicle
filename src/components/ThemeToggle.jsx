import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 retro-card flex items-center gap-2 cursor-pointer select-none font-sans text-xs font-bold hover:scale-105 active:scale-95 transition-all duration-200"
      title="Toggle Theme"
      style={{
        padding: '8px 12px',
      }}
    >
      {theme === 'light' ? (
        <>
          <span>✨</span>
          <span>GOLD MODE</span>
        </>
      ) : (
        <>
          <span>📜</span>
          <span>RETRO MODE</span>
        </>
      )}
    </button>
  );
}
