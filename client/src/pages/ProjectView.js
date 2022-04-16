import React, { useEffect, useState } from 'react'
import './ProjectView.css';

import ProjectTasks from './ProjectTasks';
import AsideNavbar from '../components/AsideNavbar';
import TopNavbar from '../components/TopNavbar';
import ProjectOverview from './ProjectOverview';

import { useProjectData } from '../context/projectContext';

function ProjectView({
  currentSection
}) {
  const [currentView, setCurrentView] = useState(currentSection);

  const { loading, data } = useProjectData(); 

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

  if(loading) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  }

  console.log(data);

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