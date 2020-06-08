import React, { Component } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import NavList from './NavList';
import { Consumer } from '../context/Context';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event, menuOpen, dispatch) {
    event.preventDefault();
    // Change the value of a state in the context API
    dispatch({ type: 'TOGGLEMENU', payload: !menuOpen });
    dispatch({ type: 'TOGGLEDROPDOWN', payload: false });
  }

  render() {
    return (
      <Consumer>
        {(value) => {
          // Get states from context API
          const {
            menuOpen, dispatch, currentUser, dropDownOpen
          } = value;
          return (
            <nav className={menuOpen ? 'navbar-wrapper nav-active' : 'navbar-wrapper'}>
              <a data-menu-btn href="/" className={menuOpen
                ? 'medium-text blue menu menu-active'
                : 'medium-text blue menu inactive'}
                onClick={(event) => this.toggleMenu(event, menuOpen, dispatch)} >
                {menuOpen ? <AiOutlineClose/> : <GiHamburgerMenu/>}
              </a>
              <NavList menuOpen={menuOpen} user={currentUser}
              dropDownOpen={dropDownOpen} dispatch={dispatch} />
            </nav>
          );
        }}
      </Consumer>
    );
  }
}

export default NavBar;
