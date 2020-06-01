import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Md extends Component {
  render() {
    return (
            <div className="md-item-prev md-item">
                <div className="title">
                  <h5 className="small-heading">{this.props.md.title}</h5>
                </div>
                <div className="small-text short-des">{this.props.md.description}</div>
                <button className="plain-btn right small-heading">Learn More</button>
            </div>
    );
  }
}

Md.propTypes = {
  md: PropTypes.object.isRequired
};

export default Md;
