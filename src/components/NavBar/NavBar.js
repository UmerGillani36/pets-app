import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div style={{
        display: "flex",
        background: 'black',
        padding: '5px 0 5px 5px',
        fontSize: '20px'
    }}>
        <div style={{ margin: '10px' }}>
            <NavLink to="/" style={({ isActive }) => ({ 
                color: isActive ? 'greenyellow' : 'white' })}>
                Home
            </NavLink>
        </div>
        <div style={{ margin: '10px' }}>
            <NavLink to="/inventory" style={({ isActive }) => ({ 
                color: isActive ? 'greenyellow' : 'white' })}>
                Inventory
            </NavLink>
        </div>
        <div style={{ margin: '10px' }}>
            <NavLink to="/search" style={({ isActive }) => ({ 
                color: isActive ? 'greenyellow' : 'white' })}>
                Search
            </NavLink>
        </div>
        <div style={{ margin: '10px' }}>
            <NavLink to="/about" style={({ isActive }) => ({ 
                color: isActive ? 'greenyellow' : 'white' })}>
                About
            </NavLink>
        </div>
    </div>
  )
}

export default NavBar