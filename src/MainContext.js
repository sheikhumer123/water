import React, { useState, createContext } from "react";

const MainContext = createContext();
export const MainProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <MainContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
