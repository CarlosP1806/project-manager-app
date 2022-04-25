import React from 'react'
import './AsideNavbar.css';
import { useParams } from 'react-router-dom';

function AsideNavbar({
  projectName,
  profileOwnership,
  currentView,
  showMobile
}) {
  const { id } = useParams();

  return (
    <>
      <aside className={`aside-navbar ${showMobile ? 'mobile-active' : ''}`}>
        <header className="aside-navbar__header">
          <h2 className="aside-navbar__title">{projectName}</h2>
          <p className="aside-navbar__subtitle">{profileOwnership}</p>
        </header>
        <ul className="aside-navbar__links">
          <li
            className={`aside-navbar__link ${currentView === 'overview' ? 'active' : ''}`}>
            <a href={`/project/${id}/overview`}>Overview</a>
          </li>
          <li
            className={`aside-navbar__link ${currentView === 'tasks' ? 'active' : ''}`}>
            <a href={`/project/${id}/tasks`}>Tasks</a>
          </li>
          <li className={`aside-navbar__link ${currentView === 'calendar' ? 'active' : ''}`}>
            <a>Calendar</a>
          </li>
          <li className={`aside-navbar__link ${currentView === 'settings' ? 'active' : ''}`}>
            <a>Settings</a>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default AsideNavbar