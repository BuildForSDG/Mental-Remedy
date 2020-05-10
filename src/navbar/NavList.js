import React, { Component } from 'react';

/* GiHealthPotion */
import {
  GiHealing, GiDoctorFace
} from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import { IoIosPeople } from 'react-icons/io';
import NavItem from './NavItem';

class NavList extends Component {
  render() {
    const { menuOpen } = this.props;
    return (
        <ul className="nav-list">
            <NavItem linkDes="Home" icon={<FaHome/>} id="home" menuOpen={menuOpen} />
            <NavItem linkDes="About" icon={<IoIosPeople/>} menuOpen={menuOpen} />
            <NavItem linkDes="Mental Disorders" icon={<GiHealing/>} menuOpen={menuOpen} />
            <NavItem linkDes="Specialists" icon={<GiDoctorFace/>} menuOpen={menuOpen} />
        </ul>
    );
  }
}

export default NavList;
