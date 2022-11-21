import React, { createContext } from 'react';
import { useState } from 'react';

export const CategoryContext = createContext();

export function CategoryContextProvider({ children }) {
  const [active, setActive] = useState('travel');

  console.log(active);

  return (
    <CategoryContext.Provider value={{ active, setActive }}>
      {children}
    </CategoryContext.Provider>
  );
}
