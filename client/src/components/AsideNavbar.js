import React from 'react'
import './AsideNavbar.css';

function AsideNavbar({
  projectName,
  profileOwnership,
  currentView,
  switchView
}) {
  return (
    <>
      <aside className="aside-navbar">
        <header className="aside-navbar__header">
          <h2 className="aside-navbar__title">{projectName}</h2>
          <p className="aside-navbar__subtitle">{profileOwnership}</p>
        </header>
        <ul className="aside-navbar__links">
          <li
            className={`aside-navbar__link ${currentView === 'overview' ? 'active' : ''}`}
            onClick={() => switchView('overview')}>
            <p>Overview</p>
          </li>
          <li
            className={`aside-navbar__link ${currentView === 'tasks' ? 'active' : ''}`}
            onClick={() => switchView('tasks')}>
            <p>Tasks</p>
          </li>
          <li className={`aside-navbar__link ${currentView === 'calendar' ? 'active' : ''}`}>
            <p>Calendar</p>
          </li>
          <li className={`aside-navbar__link ${currentView === 'settings' ? 'active' : ''}`}>
            <p>Settings</p>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default AsideNavbar