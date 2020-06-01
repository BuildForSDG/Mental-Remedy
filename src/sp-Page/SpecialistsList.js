import React, { Component } from 'react';
import Specialist from './Specialist';

export default class SpecialistsList extends Component {
  componentDidMount() {
    this.props.getSpecialists();
  }

  render() {
    return (
      <div className="spc">
        {this.props.specialists.map((specialist) => (
          <Specialist specialist={specialist} key={specialist.id} />
        ))}
      </div>
    );
  }
}
