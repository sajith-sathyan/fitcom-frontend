// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router and Route components
import Welcome from "./Pages/WelcomePage";
import AddDeitInfoPage from "./Pages/AddDeitInfoPage";

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap everything inside Router */}
      <Routes>
        {/* Define the route for the WelcomePage */}
        <Route path="/" element={<Welcome />} />

        {/* Define the route for the AddDeitInfoPage */}
        <Route path="/add-diet-info" element={<AddDeitInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
