import { useState, useEffect } from 'react';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState({
    opportunities: [],
    skills: [],
    roadmaps: [],
    countries: [],
    internships: [],
    universities: []
  });

  useEffect(() => {
    const stored = localStorage.getItem('chronicle26_bookmarks_v2');
    if (stored) {
      setBookmarks(JSON.parse(stored));
    } else {
      // Migrate old bookmarks if they exist
      const oldStored = localStorage.getItem('chronicle26_bookmarks');
      if (oldStored) {
        const oldBookmarks = JSON.parse(oldStored);
        setBookmarks(prev => ({
          ...prev,
          opportunities: oldBookmarks
        }));
      }
    }
  }, []);

  const toggleBookmark = (id, type = 'opportunities') => {
    setBookmarks(prev => {
      const typeBookmarks = prev[type] || [];
      const newTypeBookmarks = typeBookmarks.includes(id)
        ? typeBookmarks.filter(bookmarkId => bookmarkId !== id)
        : [...typeBookmarks, id];
      
      const newBookmarks = {
        ...prev,
        [type]: newTypeBookmarks
      };
      
      localStorage.setItem('chronicle26_bookmarks_v2', JSON.stringify(newBookmarks));
      return newBookmarks;
    });
  };

  const isBookmarked = (id, type = 'opportunities') => {
    return (bookmarks[type] || []).includes(id);
  };

  const getBookmarksByType = (type) => {
    return bookmarks[type] || [];
  };

  const getAllBookmarksCount = () => {
    return Object.values(bookmarks).reduce((sum, arr) => sum + arr.length, 0);
  };

  return { 
    bookmarks, 
    toggleBookmark, 
    isBookmarked, 
    getBookmarksByType,
    getAllBookmarksCount
  };
}
