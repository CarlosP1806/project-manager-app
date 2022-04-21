import React, { useEffect, useState } from 'react'
import { getMe } from '../../utils/auth_api';
import Auth from '../../utils/auth';
import TopNavbar from '../../components/navbars/TopNavbar';
import './DashboardView.css'
import ProjectCard from '../../components/projects/ProjectCard';

function DashboardView() {

  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);

  // Get current user data
  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
          return false;
        }
        const response = await getMe(token);
        if (!response.ok) {
          throw new Error('something went wrong!');
        }
        const user = await response.json();
        setUserData(user);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    getUserData();
  }, []);

  if (!Auth.loggedIn()) {
    window.location.assign("/");
    return;
  }

  if (loading) {
    return <>Loading...</>
  }

  return (
    <>
      <main className="main main--full">
        <TopNavbar profileName={userData.username}/>

        <section className="dashboard">
          <div className="dashboard__left">
            <h2 className="dashboard__username">{userData.username}</h2>
            <p className="dashboard__email">{userData.email}</p>

            <p>Notifications go here</p>
          </div>
          <div className="dashboard__right">
            <h1 className="dashboard__title">Your Projects</h1>
            <div className="dashboard__projects">
              <ProjectCard title="Project 1"/>
              <ProjectCard title="Project 1"/>
              <ProjectCard title="Project 1"/>
              <ProjectCard title="Project 1"/>
              <ProjectCard title="Project 1"/>
              <ProjectCard title="Project 1"/>
              <ProjectCard title="Project 1"/>
              <ProjectCard title="Project 1"/>
              <ProjectCard title="Project 1"/>
              <ProjectCard title="Project 1"/>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default DashboardView;