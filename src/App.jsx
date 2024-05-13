import React from "react";
import { PersonalLibrary, SearchLibrary, Home } from "./pages";
import { Login } from "./auth/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="divGeneral">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/search" element={<SearchLibrary />} />
          <Route path="/library" element={<PersonalLibrary />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
