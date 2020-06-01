import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Consumer } from '../context/Context';

class DropDownLink extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, dispatch) {
    event.preventDefault();
    this.props.history.push(`/${this.props.link}`);
    dispatch({ type: 'TOGGLEMENU', payload: false });
    dispatch({ type: 'TOGGLEDROPDOWN', payload: false });
  }

  render() {
    const { ddText, ddIcon } = this.props;
    return (
            <Consumer>
              {(value) => {
                return (
                  <>
                    <a href="/" className="dd-link small-text"
                    onClick={(event) => this.handleClick(event, value.dispatch)} >
                    {ddIcon} {ddText}
                    </a>
                  </>
                );
              }}
            </Consumer>
    );
  }
}

DropDownLink.propTypes = {
  ddText: PropTypes.string.isRequired,
  ddIcon: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired
};

export default withRouter(DropDownLink);
