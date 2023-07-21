import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  return (
    <>
        <nav className='navbar'>
                  <Link to="/" className='navbar-logo'><img alt='logo' src={require("../images/PS.png")}></img></Link>
                  <ul className='nav-menu'>
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/experience" className="nav-item">Experience</Link>
                    <Link to="/projects" className="nav-item">Projects</Link>
                    <Link to="/contact" className="nav-item">Contact</Link>
                </ul>
        </nav>
    </>
  )
}

export default Navbar