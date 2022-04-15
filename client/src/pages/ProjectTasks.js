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

        <div className="content-wrapper">
          <section className="section section--tasks">
            <header className="section__header">
              <h1 className="section__title">Board of Tasks</h1>
            </header>
          </section>
        </div>
      </main>
    </>
  );
}

export default ProjectTasks;