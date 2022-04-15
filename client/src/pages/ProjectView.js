import React from 'react'
import './ProjectView.css';

import ProjectTasks from './ProjectTasks';
import AsideNavbar from '../components/AsideNavbar';
import TopNavbar from '../components/TopNavbar';

function ProjectView({
  currentSection
}) {

  function getCurrentSection() {
    switch(currentSection) {
      case "tasks":
        return <ProjectTasks />;
      default:
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
          {getCurrentSection()}
        </div>
      </main>
    </>
  );
}

export default ProjectView;