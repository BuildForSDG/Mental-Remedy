import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropDownLink extends Component {
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

DropDownLink.propTypes = {
  ddText: PropTypes.string.isRequired,
  ddIcon: PropTypes.object.isRequired
};

export default DropDownLink;
