import React, { Component } from 'react';


export default class DropDownLink extends Component {
  handleClick(event) {
    event.preventDefault();
  }

  render() {
    const { ddText, ddIcon } = this.props;
    return (
            <>
                <a href="/" className="dd-link small-text" onClick={this.handleClick} >
                {ddIcon} {ddText}
                </a>
            </>
    );
  }
}
