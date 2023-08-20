import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";
import { MainProvider } from "./MainContext";

function App() {
  return (
    <div className="App">
      <MainProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="contact" element={<Contact />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="SignUp" element={<SignUp />} />
        </Routes>
      </MainProvider>
    </div>
  );
}

export default App;
