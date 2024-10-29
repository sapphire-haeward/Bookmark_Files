import React, { createContext, useState, useContext } from 'react';

// Generate a context
const BookmarkContext = createContext();

// Uses the context; accesses values for the return statement
export const useBookmarks = () => useContext(BookmarkContext);
// ---------------------------------------------------------------------------------------------------------

//  this function creates a component called BookmarkProvider
const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const toggleBookmark = (post) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.some((b) => b.$id === post.$id)
        ? prevBookmarks.filter((b) => b.$id !== post.$id)
        : [...prevBookmarks, post]
    );
  };




// This return statement renders the physical context in and of itself
  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkProvider;