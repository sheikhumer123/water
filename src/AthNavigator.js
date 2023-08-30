import React, { useContext } from "react";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";
import MainContext from "./MainContext";
const AthNavigator = () => {
  const { currentUser } = useContext(MainContext);
  return (
    <>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </>
  );
};
export default AthNavigator;
