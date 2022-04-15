import React from 'react'
import './ProjectTasks.css';

import ProjectTasks from './ProjectTasks';
import AsideNavbar from '../components/AsideNavbar';
import TopNavbar from '../components/TopNavbar';

function ProjectView({
  currentSection
}) {

  function getCurrentSecion() {
    switch(currentSection) {
      case "tasks":
        return <ProjectTasks />;
    }
  }

  return (
    <>
      <AsideNavbar
        projectName="Test Project"
        profileOwnership="Owner"
        currentView="tasks" />

      <main className="main">
        <TopNavbar profileName="Carlos Paez" />
        <div className="content-wrapper">
          {getCurrentSecion()}
        </div>
      </main>
    </>
  );
}

export default ProjectView;