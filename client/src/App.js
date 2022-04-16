import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

import ProjectView from './pages/ProjectView';
import { ProjectDataProvider } from './context/projectContext';

function App() {
  return (
    <ProjectDataProvider>
      <Router>
        <>
          <Routes>
            <Route
              path="/project/:id/overview"
              element={<ProjectView currentSection="overview" />} />
            <Route
              path="/project/:id/tasks"
              element={<ProjectView currentSection="tasks" />} />
          </Routes>
        </>
      </Router>
    </ProjectDataProvider>
  );
}

export default App;
