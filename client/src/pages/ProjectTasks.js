import React from 'react';
import './ProjectTasks.css';
import AsideNavbar from '../components/AsideNavbar';

function ProjectTasks({
  projectName,
  profileOwnership
}) {
  return (
    <>
      <AsideNavbar projectName={projectName} profileOwnership={profileOwnership}/>
      <main className="main">
        Hello World
      </main>
    </>
  );
}

export default ProjectTasks;