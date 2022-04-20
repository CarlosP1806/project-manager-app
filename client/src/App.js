import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

import ProjectView from './pages/project_views/ProjectView';
import LoginView from './pages/profile_views/LoginView';
import { ProjectDataProvider } from './context/projectContext';

function App() {
  return (
    <ProjectDataProvider>
      <Router>
        <>
          <Routes>
            <Route
              path="/"
              element={<LoginView />} />
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
