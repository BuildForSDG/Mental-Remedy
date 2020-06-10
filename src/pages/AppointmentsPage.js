import React, { Component } from 'react';

export default class AppointmentsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main>
        <h1>{this.props.history.location.state.name}</h1>
      </main>
    );
  }
}
