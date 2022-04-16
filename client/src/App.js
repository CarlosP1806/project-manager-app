import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

import ProjectView from './pages/ProjectView';
import { ProjectDataProvider } from './context/projectContext';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route
            path="/"
            element={
              <ProjectDataProvider>
                <ProjectView currentSection="overview" />
              </ProjectDataProvider>
            } />
        </Routes>
      </>
    </Router>
  );
}

export default App;
