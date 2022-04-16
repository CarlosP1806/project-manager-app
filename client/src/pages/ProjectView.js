import React, { useEffect, useState } from 'react'
import './ProjectView.css';

import ProjectTasks from './ProjectTasks';
import AsideNavbar from '../components/AsideNavbar';
import TopNavbar from '../components/TopNavbar';
import ProjectOverview from './ProjectOverview';

import { useProjectData } from '../context/projectContext';
import { useParams } from 'react-router-dom';

function ProjectView({
  currentSection
}) {
  const [currentView, setCurrentView] = useState(currentSection);
  const { setProjectId, loading } = useProjectData();

  // Get project id to fetch context data
  const { id } = useParams();
  useEffect(() => {
    setProjectId(id);
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

  if (loading) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
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