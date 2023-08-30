import { createContext, useContext, useEffect, useState } from "react";
import axios from "../axios";

const AuthContent = createContext({
  user: null,
  setUser: () => {},
  csrfToken: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, _setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // set user to local storage
  const setUser = (user) => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
    _setUser(user);
  };

  return (
    <AuthContent.Provider value={{ user, setUser, csrfToken }}>
      {children}
    </AuthContent.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContent);
};
