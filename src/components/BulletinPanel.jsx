import React from 'react';
import { Link } from 'react-router-dom';

function BulletinPanel({ bulletins }) {
  return (
    <div className="retro-card sticky top-4">
      <div className="border-b-2 border-retro-black pb-3 mb-4">
        <h2 className="retro-heading text-xl">📌 Bulletins</h2>
      </div>

      <div className="space-y-3">
        {bulletins.slice(0, 4).map(bulletin => (
          <div
            key={bulletin.id}
            className="border-2 border-retro-black p-3 bg-retro-beige"
          >
            {bulletin.urgent && (
              <span className="inline-block px-2 py-1 text-xs font-sans font-bold border-2 border-retro-black bg-retro-red text-white mb-2">
                URGENT
              </span>
            )}
            <h3 className="font-sans text-sm font-bold mb-1">
              {bulletin.title}
            </h3>
            <p className="font-sans text-xs text-retro-brown mb-2">
              {bulletin.content.substring(0, 80)}...
            </p>
            <p className="font-sans text-xs text-retro-brown italic">
              {bulletin.date}
            </p>
          </div>
        ))}
      </div>

      <Link
        to="/bulletin"
        className="retro-btn w-full mt-4 block text-center no-underline"
      >
        VIEW ALL BULLETINS
      </Link>

      <div className="border-t-2 border-retro-black pt-4 mt-4">
        <p className="font-sans text-xs text-retro-brown italic">
          Stay informed with the latest updates and announcements
        </p>
      </div>
    </div>
  );
}

export default BulletinPanel;
