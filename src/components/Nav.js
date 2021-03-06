import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className = 'nav'>
      <ul>
        <li>
          <NavLink to = '/' exact activeClassName = 'active'> Home </NavLink>
        </li>
        <li>
          <NavLink to = '/leaderboard' exact activeClassName = 'active'> LeaderBoard </NavLink>
        </li>
        <li>
          <NavLink to = '/add' exact activeClassName = 'active'> Create Poll </NavLink>
        </li>
        <li>
          <NavLink to = '/login' exact activeClassName = 'active'> Log In </NavLink>
        </li>
      </ul>
    </nav>
    )
}