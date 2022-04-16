import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

import ProjectView from './pages/ProjectView';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route
            path="/"
            element={<ProjectView currentSection="overview" />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
