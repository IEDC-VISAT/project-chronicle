import React, { useState } from 'react';
import { resumeTemplates, promptLibrary, linkedInFields } from '../data/toolkit';

function Toolkit() {
  const [selectedField, setSelectedField] = useState('');
  const [generatedContent, setGeneratedContent] = useState(null);
  const [copiedPrompt, setCopiedPrompt] = useState(null);

  const handleGenerateLinkedIn = () => {
    if (selectedField && linkedInFields[selectedField]) {
      setGeneratedContent(linkedInFields[selectedField]);
    }
  };

  const handleCopyPrompt = (promptId, promptText) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPrompt(promptId);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="retro-card mb-6 text-center">
        <h1 className="retro-heading text-5xl mb-3">🧰 Career Toolkit</h1>
        <p className="font-serif italic text-lg text-retro-brown mb-4">
          "Practical Tools for Professional Growth"
        </p>
        <p className="font-sans max-w-2xl mx-auto">
          Access templates, generators, and resources to enhance your career preparation and job search.
        </p>
      </div>

      {/* Resume Templates Section */}
      <section className="mb-8">
        <div className="border-b-4 border-retro-black mb-4 pb-2">
          <h2 className="retro-heading text-3xl">📄 Resume Templates</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resumeTemplates.map(template => (
            <div key={template.id} className="retro-card">
              <h3 className="retro-heading text-xl mb-3">{template.name}</h3>
              <p className="font-sans text-sm mb-3">{template.description}</p>
              <div className="mb-3 p-3 bg-retro-beige border-2 border-retro-black">
                <p className="font-sans text-xs mb-2">
                  <strong>Style:</strong> {template.style}
                </p>
                <p className="font-sans text-xs">
                  <strong>Best For:</strong> {template.bestFor}
                </p>
              </div>
              <button className="retro-btn-primary w-full">
                DOWNLOAD TEMPLATE
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* LinkedIn Profile Enhancer */}
      <section className="mb-8">
        <div className="border-b-4 border-retro-black mb-4 pb-2">
          <h2 className="retro-heading text-3xl">💼 LinkedIn Profile Enhancer</h2>
        </div>
        <div className="retro-card">
          <p className="font-sans mb-4">
            Generate professional LinkedIn headlines and about sections tailored to your field.
          </p>
          
          <div className="mb-4">
            <label className="font-sans text-sm font-bold block mb-2">
              Select Your Field:
            </label>
            <select
              value={selectedField}
              onChange={(e) => setSelectedField(e.target.value)}
              className="retro-input w-full mb-3"
            >
              <option value="">-- Choose a field --</option>
              {Object.keys(linkedInFields).map(field => (
                <option key={field} value={field}>{field}</option>
              ))}
            </select>
            <button
              onClick={handleGenerateLinkedIn}
              disabled={!selectedField}
              className="retro-btn-primary"
            >
              GENERATE PROFILE CONTENT
            </button>
          </div>

          {generatedContent && (
            <div className="border-t-2 border-retro-black pt-4 mt-4">
              <div className="mb-4">
                <h3 className="font-sans font-bold mb-2 flex items-center justify-between">
                  <span>📌 Suggested Headline:</span>
                  <button
                    onClick={() => navigator.clipboard.writeText(generatedContent.headline)}
                    className="retro-btn text-xs"
                  >
                    COPY
                  </button>
                </h3>
                <div className="p-3 bg-retro-beige border-2 border-retro-black font-sans text-sm">
                  {generatedContent.headline}
                </div>
              </div>
              
              <div>
                <h3 className="font-sans font-bold mb-2 flex items-center justify-between">
                  <span>📝 Suggested About Section:</span>
                  <button
                    onClick={() => navigator.clipboard.writeText(generatedContent.about)}
                    className="retro-btn text-xs"
                  >
                    COPY
                  </button>
                </h3>
                <div className="p-3 bg-retro-beige border-2 border-retro-black font-sans text-sm whitespace-pre-line max-h-96 overflow-y-auto">
                  {generatedContent.about}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Prompt Library */}
      <section className="mb-8">
        <div className="border-b-4 border-retro-black mb-4 pb-2">
          <h2 className="retro-heading text-3xl">💬 AI Prompt Library</h2>
        </div>
        <p className="font-sans mb-4">
          Ready-to-use prompts for ChatGPT, Claude, or other AI assistants to help with career tasks.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {promptLibrary.map(prompt => (
            <div key={prompt.id} className="retro-card">
              <div className="flex items-start justify-between mb-2">
                <h3 className="retro-heading text-lg">{prompt.title}</h3>
                <span className="inline-block px-2 py-1 text-xs font-sans border-1 border-retro-black bg-retro-grey">
                  {prompt.category}
                </span>
              </div>
              
              <div className="mb-3 p-3 bg-retro-beige border-2 border-retro-black font-sans text-sm max-h-48 overflow-y-auto">
                {prompt.prompt}
              </div>
              
              <p className="font-sans text-xs text-retro-brown italic mb-3">
                💡 {prompt.usage}
              </p>
              
              <button
                onClick={() => handleCopyPrompt(prompt.id, prompt.prompt)}
                className={`retro-btn w-full ${copiedPrompt === prompt.id ? 'bg-retro-blue text-white' : ''}`}
              >
                {copiedPrompt === prompt.id ? '✓ COPIED!' : 'COPY PROMPT'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="retro-card text-center bg-retro-grey">
        <p className="font-sans text-sm text-retro-brown">
          💡 Pro Tip: Customize these templates and prompts to match your unique experience and goals
        </p>
      </div>
    </main>
  );
}

export default Toolkit;
