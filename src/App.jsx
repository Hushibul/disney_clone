import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Password from "./components/Login";
import LoginMessage from "./components/LoginMessage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/login/password" element={<Password />} />
          <Route exact path="/login/message" element={<LoginMessage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
