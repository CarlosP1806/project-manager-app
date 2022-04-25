import React from 'react'
import './TopNavbar.css';

function TopNavbar({
  profileName,
  setShowAsideNav
}) {
  return (
    <nav className="top-navbar">
      <button className="toggle-menu" onClick={() => setShowAsideNav(true)}>Show</button>
      <a href="/dashboard" className="top-navbar__item">Your Projects</a>
      <h2 className="top-navbar__item">Welcome, {profileName}</h2>
    </nav>
  )
}

export default TopNavbar