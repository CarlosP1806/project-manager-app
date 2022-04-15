import React from 'react'
import './AsideNavbar.css';

function AsideNavbar({
  projectName,
  profileOwnership,
  currentView
}) {
  return (
    <>
      <aside className="aside-navbar">
        <header className="aside-navbar__header">
          <h2 className="aside-navbar__title">{projectName}</h2>
          <p className="aside-navbar__subtitle">{profileOwnership}</p>
        </header>
        <ul className="aside-navbar__links">
          <li className={`aside-navbar__link ${currentView === 'overview' ? 'active' : ''}`}>
            <a>Overview</a>
          </li>
          <li className={`aside-navbar__link ${currentView === 'tasks' ? 'active' : ''}`}>
            <a>Tasks</a>
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