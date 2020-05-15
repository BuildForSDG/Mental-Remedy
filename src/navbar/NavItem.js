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
    const { menuOpen } = this.props;
    return (
        <li className="nav-item">
            <a href="/" className="nav-link medium-text" id={this.props.id} onClick={this.handleClick} >
                {this.props.icon}
                <span className={menuOpen ? 'link-des' : 'd-none'}>{this.props.linkDes}</span>
            </a>
        </li>
    );
  }
}

NavItem.propTypes = {
  // Name all the props and set their type
  menuOpen: PropTypes.bool
};

export default NavItem;
