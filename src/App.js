import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';

import './App.css';
import './index.css';
import HomePage from './HomePage';
import Layout from './Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/WEBAPP/React/build" element={<Layout />}>
          <Route path="homepage" element={<HomePage />} />
          <Route path="second" element={<Second />} />
          <Route path="" element={<Navigate to="homepage" />} />
        </Route>
        <Route path="/" element={<Navigate to="/WEBAPP/React/build/homepage" />} />
      </Routes>
    </Router>
  );
}

export default App;

function Second() {
  return (
    <Link to="/">回主頁</Link>
  );
}

