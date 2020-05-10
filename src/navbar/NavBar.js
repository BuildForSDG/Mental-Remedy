import React, { Component } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import NavList from './NavList';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event) {
    event.preventDefault();
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    const { menuOpen } = this.state;
    return (
      <>
        <nav className={menuOpen ? 'navbar-wrapper nav-active' : 'navbar-wrapper'}>
        <a href="/" className={menuOpen ? 'medium-text blue menu menu-active' : 'medium-text blue menu'} onClick={this.toggleMenu} >
        {menuOpen ? <AiOutlineClose/> : <GiHamburgerMenu/>}
            </a>
          <NavList menuOpen={menuOpen} toggleMenu={this.toggleMenu} />
        </nav>
      </>
    );
  }
}

export default NavBar;
