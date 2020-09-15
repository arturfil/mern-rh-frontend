import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { NavItem } from 'reactstrap';
import { isAuthenticated, signOut } from '../services/apiAuth';

const { user } = isAuthenticated();

const Navigation = ({history}) => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a href="" className="navbar-brand">Videogames</a>
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
              <>
              <NavItem className="nav-link">
                <Link className="nav-link" to="create-category">
                  Create Category
                </Link>
              </NavItem>
              <NavItem className="nav-link">
                <Link className="nav-link" to="create-product">
                  Create Videogame
                </Link>
              </NavItem>
              <NavItem className="nav-link" >
                <Link 
                  style={{marginLeft: "100%", textAlign: "right"}}
                  className="nav-link"
                  to="/" 
                  onClick={() => 
                    signOut(() => {
                    history.push("/");
                  })}>
                  Signout
                </Link>
              </NavItem>
            </>
            }
          </ul>
        </div>
      </nav>
    </>
  )
}

export default withRouter(Navigation);