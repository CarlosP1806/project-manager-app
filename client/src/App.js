import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectTasks from './pages/ProjectTasks';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route
            path="/"
            element={<ProjectTasks projectName="Test Project" profileOwnership="Owner"/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
