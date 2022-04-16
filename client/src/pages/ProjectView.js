import React, { useEffect, useState } from 'react'
import './ProjectView.css';

import ProjectTasks from './ProjectTasks';
import AsideNavbar from '../components/AsideNavbar';
import TopNavbar from '../components/TopNavbar';
import ProjectOverview from './ProjectOverview';

function ProjectView({
  currentSection
}) {
  const [currentView, setCurrentView] = useState(currentSection);


  useEffect(() => {
    async function getProjectData() {
      let response = await fetch('/project/625afbb0b7e6ef28cbf8767a');
      response = await response.json();
      console.log(response);
    }

    getProjectData();
  }, []);

  function getCurrentSection() {
    switch (currentView) {
      case "tasks":
        return <ProjectTasks />;
      case "overview":
      default:
        return <ProjectOverview />;
    }
  }

  function handleSwitchView(newView) {
    setCurrentView(newView);
  }

  return (
    <>
      <AsideNavbar
        projectName="Test Project"
        profileOwnership="Owner"
        currentView={currentView}
        switchView={handleSwitchView} />

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