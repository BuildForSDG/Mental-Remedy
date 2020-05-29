import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GiHealing, GiDoctorFace } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import { FiLogIn } from 'react-icons/fi';
import NavItem from './NavItem';
import DropDown from './DropDown';

class NavList extends Component {
  render() {
    const { menuOpen, user, dropDownOpen, dispatch } = this.props;
    return (
      <ul className="nav-list">
        <NavItem link="" linkDes="Home" icon={<FaHome />} />
        <NavItem link="about" linkDes="About" icon={<IoIosPeople />} />
        <NavItem link="mental-disorders" linkDes="Mental Disorders" icon={<GiHealing />} />

        <NavItem link="specialists" linkDes="Specialists" icon={<GiDoctorFace />} />

        {user.id ? (
          <DropDown dropDownOpen={dropDownOpen} menuOpen={menuOpen} dispatch={dispatch} />
        ) : (
          <NavItem link="login" linkDes="Login" icon={<FiLogIn />} />
        )}
      </ul>
    );
  }
}

NavList.propTypes = {
  // Name all the props and set their type
  menuOpen: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  dropDownOpen: PropTypes.bool,
  dispatch: PropTypes.func.isRequired
};

export default NavList;
