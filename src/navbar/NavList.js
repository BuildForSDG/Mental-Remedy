import React, { Component } from 'react';
import {
  GiHealthPotion, GiHealing, GiDoctorFace, GiHamburgerMenu
} from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import NavItem from './NavItem';

class NavList extends Component {
  render() {
    return (
        <ul className="nav-list">
            <NavItem linkDes="" icon={<GiHamburgerMenu/>} id="menu" />
            <NavItem linkDes="Mental Remedy" icon={<GiHealthPotion />} />
            <NavItem linkDes="Home" icon={<FaHome/>} />
            <NavItem linkDes="About" icon={<IoIosPeople/>} />
            <NavItem linkDes="Mental illnesses" icon={<GiHealing/>} />
            <NavItem linkDes="Specialists" icon={<GiDoctorFace/>} />
        </ul>
    );
  }
}

export default NavList;
