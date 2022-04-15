import React from 'react'

function AsideNavbar({
  projectName,
  profileOwnership,
}) {
  return (
    <>
      <aside className="aside-navbar">
        <header className="aside-navbar__header">
          <h1 className="aside-navbar__title">{projectName}</h1>
          <p className="aside-navbar__subtitle">{profileOwnership}</p>
        </header>
        <ul className="aside-navbar__links">
          <li className="aside-navbar__link"><a>Overview</a></li>
          <li className="aside-navbar__link"><a>Tasks</a></li>
          <li className="aside-navbar__link"><a>Calendar</a></li>
          <li className="aside-navbar__link"><a>Settings</a></li>
        </ul>
      </aside>
    </>
  )
}

export default AsideNavbar