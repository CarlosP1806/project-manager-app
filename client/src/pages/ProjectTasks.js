import React from 'react';
import './ProjectTasks.css';
import AsideNavbar from '../components/AsideNavbar';
import TopNavbar from '../components/TopNavbar';

function ProjectTasks({
  projectName,
  profileOwnership
}) {
  return (
    <>
      <AsideNavbar
        projectName={projectName}
        profileOwnership={profileOwnership}
        currentView="tasks" />

      <main className="main">
        <TopNavbar profileName="Carlos Paez" />

        <section className="section section--taks">
          Hello World
        </section>
      </main>
    </>
  );
}

export default ProjectTasks;