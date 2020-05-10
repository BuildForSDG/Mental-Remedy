import React, { Component } from 'react';
import NavList from './NavList';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <nav>
          <NavList />
        </nav>
      </div>
    );
  }
}

export default NavBar;
