import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
  }

  render() {
    const {
      menuOpen, icon, linkDes
    } = this.props;
    return (
        <li className="nav-item">
            <a href="/" className="nav-link medium-text" onClick={this.handleClick} >
                {icon}
                <span data-link-des className={menuOpen ? 'link-des' : 'd-none'}>{linkDes}</span>
            </a>
        </li>
    );
  }
}

NavItem.propTypes = {
  // Name all the props and set their type
  menuOpen: PropTypes.bool.isRequired,
  icon: PropTypes.object.isRequired,
  linkDes: PropTypes.string.isRequired
};

export default NavItem;
