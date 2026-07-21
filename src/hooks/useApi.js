import { useState, useEffect } from 'react';
import {
  DEFAULT_JOBS,
  DEFAULT_BULLETINS,
  DEFAULT_SKILLS,
  DEFAULT_ROADMAPS,
  DEFAULT_TEMPLATES,
  DEFAULT_PROMPTS,
  DEFAULT_LINKEDIN,
  DEFAULT_COUNTRIES,
  DEFAULT_UNIVERSITIES,
  DEFAULT_INTERNSHIPS
} from '../utils/localSeeds';

const ENDPOINT_STORAGE_MAP = {
  '/jobs/': { key: 'chronicle_jobs', defaultData: DEFAULT_JOBS, sortField: 'id', reverse: true },
  '/bulletins/': { key: 'chronicle_bulletins', defaultData: DEFAULT_BULLETINS, sortField: 'id', reverse: true },
  '/skills/': { key: 'chronicle_skills', defaultData: DEFAULT_SKILLS, sortField: 'name', reverse: false },
  '/roadmaps/': { key: 'chronicle_roadmaps', defaultData: DEFAULT_ROADMAPS, sortField: 'role', reverse: false },
  '/toolkit/templates/': { key: 'chronicle_templates', defaultData: DEFAULT_TEMPLATES, sortField: 'name', reverse: false },
  '/toolkit/prompts/': { key: 'chronicle_prompts', defaultData: DEFAULT_PROMPTS, sortField: 'category', reverse: false },
  '/toolkit/linkedin/': { key: 'chronicle_linkedin', defaultData: DEFAULT_LINKEDIN, sortField: 'field_name', reverse: false },
  '/flysky/countries/': { key: 'chronicle_countries', defaultData: DEFAULT_COUNTRIES, sortField: 'name', reverse: false },
  '/flysky/universities/': { key: 'chronicle_universities', defaultData: DEFAULT_UNIVERSITIES, sortField: 'ranking', reverse: false },
  '/flysky/internships/': { key: 'chronicle_internships', defaultData: DEFAULT_INTERNSHIPS, sortField: 'id', reverse: true }
};

/**
 * Initialize a Local Storage key with default seeds if it is empty.
 */
function getOrInitialize(config) {
  const stored = localStorage.getItem(config.key);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error(`Failed to parse local storage key ${config.key}:`, e);
    }
  }

  // Set default seeds
  localStorage.setItem(config.key, JSON.stringify(config.defaultData));
  return config.defaultData;
}

/**
 * useApi — returns data directly from Local Storage.
 * Drop-in replacement with instant load state.
 */
function useApi(endpoint, fallback = []) {
  const [data, setData] = useState(fallback);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);
    setError(null);

    const config = ENDPOINT_STORAGE_MAP[endpoint];
    if (!config) {
      setError(`Unknown endpoint: ${endpoint}`);
      setData(fallback);
      setLoading(false);
      return;
    }

    try {
      let items = getOrInitialize(config);

      // Apply sorting matching DB rules
      items.sort((a, b) => {
        const valA = a[config.sortField];
        const valB = b[config.sortField];
        
        if (typeof valA === 'string') {
          return config.reverse 
            ? valB.localeCompare(valA) 
            : valA.localeCompare(valB);
        }
        
        return config.reverse 
          ? (valB - valA) 
          : (valA - valB);
      });

      setData(items);
    } catch (err) {
      setError(err.message);
      setData(fallback);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    
    // Add custom event listener to listen for local storage modifications
    const handleStorageChange = () => {
      fetchData();
    };
    
    window.addEventListener('chronicle_storage_update', handleStorageChange);
    return () => {
      window.removeEventListener('chronicle_storage_update', handleStorageChange);
    };
  }, [endpoint]);

  return { data, loading, error, refetch: fetchData };
}

export default useApi;
