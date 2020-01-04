import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function TopBar(props) {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Medium
        </Link>
        <ul className="navbar-nav nav pull-xs-right">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home" exact>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Sign in
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default TopBar
