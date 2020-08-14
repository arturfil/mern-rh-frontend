import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from 'reactstrap';

const Navigation = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a href="" className="navbar-brand">Videogames</a>
        </div>
        <ul className="navbar-nav mr-auto">
          <NavItem className="nav-link">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </NavItem>
          <NavItem className="nav-link">
            <Link className="nav-link"to="/" >
              Login
            </Link>
          </NavItem>
          <NavItem className="nav-link">
            <Link className="nav-link"to="/" >
              Signup
            </Link>
          </NavItem>
        </ul>
      </nav>
    </>
  )
}

export default Navigation;