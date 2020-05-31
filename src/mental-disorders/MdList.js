import React, { Component } from 'react';
import Md from './Md';

export default class MdList extends Component {
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
