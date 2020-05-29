import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class DropDownLink extends Component {
  handleClick(event) {
    event.preventDefault();
    this.props.history.push(`/${this.props.link}`);
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

export default withRouter(DropDownLink);
