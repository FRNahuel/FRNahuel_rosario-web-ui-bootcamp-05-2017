import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends React.Component {
  render(){
    return (
      <ul className= 'nav'>
        <li>
          <NavLink exact activeClassName='active' to='/RealmList'>
            RealmList
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/User'>
            User Search
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/Guild'>
            Guild Search
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/Top'>
            Top 10
          </NavLink>
        </li>
      </ul>
    )
  }
}
