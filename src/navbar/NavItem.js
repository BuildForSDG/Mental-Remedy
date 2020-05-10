import React, { Component } from 'react';

class NavItem extends Component {
  render() {
    return (
        <li className="nav-item">
            <a href="/" className="nav-link" id={this.props.id} >
                {this.props.icon}
                <span className="link-des">{this.props.linkDes}</span>
            </a>
        </li>
    );
  }
}

export default NavItem;
