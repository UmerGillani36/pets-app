import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div style={{
        display: "flex",
        background: 'rgba(0,0,0,1)',
        boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px',
        padding: '5px 0 5px 5px',
        fontSize: '20px'
    }}>
        <div style={{ margin: '10px' }}>
            <NavLink to="/" style={({ isActive }) => ({ 
                color: isActive ? 'blue' : 'white',marginLeft:20, marginRight:20, textDecoration:'none', fontWeight:'bold' })}>
                Home
            </NavLink>
        </div>
        <div style={{ margin: '10px' }}>
            <NavLink to="/inventory" style={({ isActive }) => ({ 
                color: isActive ? 'blue' : 'white' , marginRight:20, textDecoration:'none', fontWeight:'bold'})}>
                Inventory
            </NavLink>
        </div>
        <div style={{ margin: '10px' }}>
            <NavLink to="/search" style={({ isActive }) => ({ 
                color: isActive ? 'blue' : 'white' , marginRight:20, textDecoration:'none', fontWeight:'bold'})}>
                Search
            </NavLink>
        </div>
        <div style={{ margin: '10px' }}>
            <NavLink to="/about" style={({ isActive }) => ({ 
                color: isActive ? 'blue' : 'white' , marginRight:20, textDecoration:'none', fontWeight:'bold'})}>
                About
            </NavLink>
        </div>
    </div>
  )
}

export default NavBar