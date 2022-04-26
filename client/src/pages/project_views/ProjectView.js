import React, { useEffect, useState } from 'react'
import './ProjectView.css';

import ProjectTasks from './ProjectTasks';
import AsideNavbar from '../../components/navbars/AsideNavbar';
import TopNavbar from '../../components/navbars/TopNavbar';
import ProjectSummary from './ProjectSummary';

import { useProjectData } from '../../context/projectContext';
import { useParams } from 'react-router-dom';
import { useUserData } from '../../context/userContext';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Loading from '../../components/loading/Loading';

function ProjectView({
  currentSection
}) {

  const { userData, loadingUser } = useUserData();
  const [currentView, setCurrentView] = useState(currentSection);
  const { setProjectId, loading, data } = useProjectData();
  const [showAsideNav, setShowAsideNav] = useState(false);

  showAsideNav ? disableBodyScroll(document) : enableBodyScroll(document);

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
        return <ProjectSummary />;
    }
  }

  if (loading || loadingUser) {
    return (
      <Loading />
    )
  } else {
    // Determine if user has access to project
    let isMember = false
    data.members.forEach(member => {
      if (member._id === userData._id) isMember = true;
    })

    if (!isMember) window.location.assign('/dashboard');
  }

  return (
    <>
      <AsideNavbar
        projectName={data.title}
        profileOwnership="Owner"
        currentView={currentView}
        showMobile={showAsideNav}/>

      <main className={`main ${showAsideNav ? 'no-scroll': ''}`}>
        <TopNavbar
          showToggle={true}
          setShowAsideNav={setShowAsideNav}
          profileName={userData.username} />
        <div className="content-wrapper">
          {getCurrentSection()}
        </div>
      </main>
    </>
  );
}

export default ProjectView;