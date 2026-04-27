import React from 'react';
import { bulletins } from '../data/mockData';

function Bulletin() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="retro-card mb-6 text-center">
        <h1 className="retro-heading text-4xl mb-2">Bulletin Board</h1>
        <p className="font-sans text-retro-brown">
          Latest announcements and updates from the Chronicle
        </p>
      </div>

      <div className="space-y-4">
        {bulletins.map(bulletin => (
          <article key={bulletin.id} className="retro-card">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                {bulletin.urgent && (
                  <span className="inline-block px-2 py-1 text-xs font-sans font-bold border-2 border-retro-black bg-retro-red text-white">
                    URGENT
                  </span>
                )}
                <h2 className="retro-heading text-xl">{bulletin.title}</h2>
              </div>
              <span className="font-sans text-sm text-retro-brown italic">
                {bulletin.date}
              </span>
            </div>
            <p className="font-sans leading-relaxed">
              {bulletin.content}
            </p>
          </article>
        ))}
      </div>

      <div className="retro-card mt-8 text-center bg-retro-grey">
        <h3 className="retro-heading text-xl mb-2">Stay Updated</h3>
        <p className="font-sans text-sm text-retro-brown">
          Check back regularly for new announcements and opportunities
        </p>
      </div>
    </main>
  );
}

export default Bulletin;
