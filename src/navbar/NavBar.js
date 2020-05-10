import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
        <nav className="navbar-wrapper">
          <ul className="nav-list">
            <li className="nav-item"><a href="/" className="nav-link"><span className="link-des"></span></a></li>
            <li className="nav-item"><a href="/" className="nav-link"><span className="link-des"></span></a></li>
            <li className="nav-item"><a href="/" className="nav-link"><span className="link-des"></span></a></li>
            <li className="nav-item"><a href="/" className="nav-link"><span className="link-des"></span></a></li>
            <li className="nav-item"><a href="/" className="nav-link"><span className="link-des"></span></a></li>
          </ul>
        </nav>
    );
  }
}

export default NavBar;
