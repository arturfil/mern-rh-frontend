import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import { isAuthenticated } from '../services/apiAuth';

const { user } = isAuthenticated();

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
          { !isAuthenticated() && 
            <>
            <NavItem className="nav-link">
              <Link className="nav-link"to="/singin" >
                Login
              </Link>
            </NavItem>
            <NavItem className="nav-link">
              <Link className="nav-link"to="/singup" >
                Signup
              </Link>
            </NavItem>
            </>
          }
          { isAuthenticated() &&
            <NavItem className="nav-link">
            <Link className="nav-link"to="/" >
              Signout
            </Link>
          </NavItem>
          }
        </ul>
      </nav>
    </>
  )
}

export default Navigation;