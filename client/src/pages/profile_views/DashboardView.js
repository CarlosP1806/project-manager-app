import React, { useEffect, useState } from 'react'
import Auth from '../../utils/auth';
import TopNavbar from '../../components/navbars/TopNavbar';
import './DashboardView.css'
import ProjectCard from '../../components/projects_dashboard/ProjectCard';
import AddProjectModal from '../../components/projects_dashboard/AddProjectModal';
import { useUserData } from '../../context/userContext';
import InvitationsContainer from '../../components/invitations/InvitationsContainer';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

function DashboardView() {

  const {userData, loadingUser } = useUserData();
  const [loading, setLoading] = useState(true);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);

  showAddProjectModal ? disableBodyScroll(document) : enableBodyScroll(document);

  if (!Auth.loggedIn()) {
    window.location.assign("/");
    return;
  }

  if (loadingUser) {
    return <>Loading...</>
  }

  return (
    <>
      <main className="main main--full">
        <TopNavbar profileName={userData.username} />

        <section className="dashboard">
          <div className="dashboard__left">
            <h2 className="dashboard__username">{userData.username}</h2>
            <p className="dashboard__email">{userData.email}</p>

            <InvitationsContainer />
          </div>
          <div className="dashboard__right">
            <header className="dashboard__header">
              <h1 className="dashboard__title">Your Projects</h1>
              <button
                className="dashboard__button"
                onClick={() => setShowAddProjectModal(true)}>
                Add Project
              </button>
            </header>
            <div className="dashboard__projects">
              {userData.projects.map(project => (
                <ProjectCard key={project._id} id={project._id} title={project.title} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {showAddProjectModal && (
        <AddProjectModal user={userData} onClose={() => setShowAddProjectModal(false)} />
      )}
    </>
  )
}

export default DashboardView;