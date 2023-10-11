import React from 'react'
import {NavLink} from "react-router-dom"
const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}

export default Header