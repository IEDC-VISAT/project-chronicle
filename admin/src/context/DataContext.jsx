import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

const initialData = {
  jobs: [],
  skills: [],
  roadmaps: [],
  bulletins: [],
  countries: [],
  internships: [],
  templates: [],
  prompts: []
};

export function DataProvider({ children }) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const stored = localStorage.getItem('chronicle_admin_data');
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  const saveData = (newData) => {
    setData(newData);
    localStorage.setItem('chronicle_admin_data', JSON.stringify(newData));
  };

  const addItem = (category, item) => {
    const newData = {
      ...data,
      [category]: [...data[category], { ...item, id: Date.now() }]
    };
    saveData(newData);
  };

  const updateItem = (category, id, updatedItem) => {
    const newData = {
      ...data,
      [category]: data[category].map(item => 
        item.id === id ? { ...updatedItem, id } : item
      )
    };
    saveData(newData);
  };

  const deleteItem = (category, id) => {
    const newData = {
      ...data,
      [category]: data[category].filter(item => item.id !== id)
    };
    saveData(newData);
  };

  return (
    <DataContext.Provider value={{ data, addItem, updateItem, deleteItem }}>
      {children}
    </DataContext.Provider>
  );
}
