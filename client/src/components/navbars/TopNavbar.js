import React from 'react'
import './TopNavbar.css';

function TopNavbar({
  profileName
}) {
  return (
    <nav className="top-navbar">
      <a className="top-navbar__item">Your Projects</a>
      <a className="top-navbar__item">Profile</a>
      <h2 className="top-navbar__item">{profileName}</h2>
    </nav>
  )
}

export default TopNavbar