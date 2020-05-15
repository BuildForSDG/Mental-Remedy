import React, { Component } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import { MdAccountCircle } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { FaBookmark } from 'react-icons/fa';
import DropDownLink from './DropDownLink';

export default class DropDown extends Component {
  handleClick(event) {
    event.preventDefault();
  }

  render() {
    const { menuOpen, dropDownOpen } = this.props;
    return (
        <li className="nav-item">
            <a href="/" className="nav-link medium-text" onClick={this.handleClick} >
                {<MdAccountCircle/>}
                <span className={menuOpen ? 'link-des' : 'd-none'}>My Account
                <span className={dropDownOpen
                  ? 'small-text dd-icon blue-text'
                  : 'small-text dd-icon blue-text'}><IoIosArrowDropdown/></span></span>
            </a>
            <div className="drop-down">
                <DropDownLink ddText="Appointments" ddIcon={<FaBookmark/>} />
                <DropDownLink ddText="Logout" ddIcon={<FiLogOut/>} />
            </div>
        </li>
    );
  }
}
