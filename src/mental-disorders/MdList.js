import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Md from './Md';

class MdList extends Component {
  componentDidMount() {
    this.props.getMdList();
  }

  render() {
    return (
            <div className="md-list">
                {this.props.mdList.map((key) => (
                    <Md md={key} key={key.id} />
                ))}
            </div>
    );
  }
}

MdList.propTypes = {
  mdList: PropTypes.array.isRequired,
  getMdList: PropTypes.func.isRequired
};

export default MdList;
