import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark top">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu" aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div id="navMainMenu" className="navbar-collapse collapse">
      <h1><Link to='/' className='Logo'>Git</Link></h1>
        <div className="navbar-nav ml-auto">
            <Link to='/' className="nav-item nav-link">Home</Link>
            <Link to='/about' className="nav-item nav-link">About</Link>
            <Link to='/projects' className="nav-item nav-link">Projects</Link>
            <Link to='/contact' className="nav-item nav-link">Contact</Link>
            <Link to='/tweets' className="nav-item nav-link">Tweets</Link>
        </div>
    </div>
</nav>
  )
}
