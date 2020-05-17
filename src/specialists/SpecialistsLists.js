import React, { Component } from 'react';
import Specialist from './Specialist';

export default class SpecialistsLists extends Component {
  componentDidMount() {
    this.props.getSpecialists();
  }

  render() {
    const { specialists } = this.props;
    return (
      <ul className="specialists">
        {this.props.specialists.map((specialist) => (
          <Specialist specialist={specialist} key={specialist.id} specialists={specialists} />
        ))}
      </ul>
    );
  }
}
