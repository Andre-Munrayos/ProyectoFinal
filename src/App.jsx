import React from "react";
import { PersonalLibrary, SearchLibrary, Home } from "./pages";
import { Login, Register } from "./auth/";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./compenets/PrivateRoute";
import "./App.css";

function App() {
  return (
    <div className="divGeneral">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/search" element={<PrivateRoute><SearchLibrary /></PrivateRoute>} />
          <Route path="/library" element={<PrivateRoute><PersonalLibrary /></PrivateRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
