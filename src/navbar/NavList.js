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
        <NavItem linkDes="Home" icon={<FaHome />} menuOpen={menuOpen} />
        <NavItem linkDes="About" icon={<IoIosPeople />} menuOpen={menuOpen} />
        <NavItem linkDes="Mental Disorders" icon={<GiHealing />} menuOpen={menuOpen} />

        <NavItem linkDes="Specialists" icon={<GiDoctorFace />} menuOpen={menuOpen} />

        {user.id ? (
          <DropDown dropDownOpen={dropDownOpen} menuOpen={menuOpen} dispatch={dispatch} />
        ) : (
          <NavItem linkDes="Login" icon={<FiLogIn />} menuOpen={menuOpen} />
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
