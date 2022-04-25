import React from 'react'
import './TopNavbar.css';
import { FaBars } from 'react-icons/fa';
import Auth from '../../utils/auth';

function TopNavbar({
  profileName,
  setShowAsideNav,
  showToggle
}) {
  return (
    <nav className="top-navbar">
      <div className="top-navbar__title">
        <h2>Welcome, {profileName}</h2>
      </div>
      <div className="top-navbar__items">
        <p onClick={() => Auth.logout()} className="top-navbar__item">Logout</p>
        <a href="/dashboard" className="top-navbar__item">Your Projects</a>
        {showToggle && (
          <button className="toggle-menu-btn" onClick={() => setShowAsideNav(true)}>
            <FaBars className="toggle-menu" />
          </button>
        )}
      </div>
    </nav>
  )
}

export default TopNavbar