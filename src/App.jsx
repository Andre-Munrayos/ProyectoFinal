import React from "react";
import { PersonalLibrary, SearchLibrary, Home } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="divGeneral">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchLibrary />} />
          <Route path="/library" element={<PersonalLibrary />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;