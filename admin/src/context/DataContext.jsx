import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import adminApi from '../utils/api';

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

const CATEGORY_ENDPOINTS = {
  jobs: '/jobs/',
  bulletins: '/bulletins/',
  skills: '/skills/',
  roadmaps: '/roadmaps/',
  templates: '/toolkit/templates/',
  prompts: '/toolkit/prompts/',
  linkedin: '/toolkit/linkedin/',
  countries: '/flysky/countries/',
  universities: '/flysky/universities/',
  internships: '/flysky/internships/',
};

const initialData = {
  jobs: [],
  bulletins: [],
  skills: [],
  roadmaps: [],
  templates: [],
  prompts: [],
  linkedin: [],
  countries: [],
  universities: [],
  internships: [],
};

export function DataProvider({ children }) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);

  // Load all data from Local Storage via adminApi
  const loadAll = useCallback(async () => {
    setLoading(true);
    try {
      const results = await Promise.all(
        Object.entries(CATEGORY_ENDPOINTS).map(async ([key, endpoint]) => {
          const res = await adminApi.get(endpoint);
          return [key, res];
        })
      );
      setData(Object.fromEntries(results));
    } catch (err) {
      console.error('Failed to load data:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAll();
    
    // Listen for storage update events to reactively refresh state
    const handleStorageUpdate = () => {
      loadAll();
    };
    
    window.addEventListener('chronicle_storage_update', handleStorageUpdate);
    return () => {
      window.removeEventListener('chronicle_storage_update', handleStorageUpdate);
    };
  }, [loadAll]);

  // Add item via Local Storage
  const addItem = async (category, item) => {
    const endpoint = CATEGORY_ENDPOINTS[category];
    if (!endpoint) return;
    const created = await adminApi.post(endpoint, item);
    setData(prev => ({ ...prev, [category]: [...prev[category], created] }));
    return created;
  };

  // Update item via Local Storage
  const updateItem = async (category, id, updatedItem) => {
    const endpoint = CATEGORY_ENDPOINTS[category];
    if (!endpoint) return;
    const updated = await adminApi.put(`${endpoint}${id}/`, updatedItem);
    setData(prev => ({
      ...prev,
      [category]: prev[category].map(item => item.id === id ? updated : item),
    }));
    return updated;
  };

  // Delete item via Local Storage
  const deleteItem = async (category, id) => {
    const endpoint = CATEGORY_ENDPOINTS[category];
    if (!endpoint) return;
    await adminApi.delete(`${endpoint}${id}/`);
    setData(prev => ({
      ...prev,
      [category]: prev[category].filter(item => item.id !== id),
    }));
  };

  return (
    <DataContext.Provider value={{ data, loading, loadAll, addItem, updateItem, deleteItem }}>
      {children}
    </DataContext.Provider>
  );
}
