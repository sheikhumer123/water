import React, { useState, createContext, useEffect } from "react";
import axios from "./components/axios";
const MainContext = createContext();
export const MainProvider = ({ children }) => {
  const [currentUser, _setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const fncsetUser = (user) => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
    _setUser(user);
  };

  const csrfToken = async () => {
    await axios.get("http://localhost:8000/sanctum/csrf-cookie").then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    csrfToken();
  }, []);

  return (
    <MainContext.Provider
      value={{ currentUser, fncsetUser, _setUser, csrfToken }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
