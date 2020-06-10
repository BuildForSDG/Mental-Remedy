import React, { Component } from 'react';

export default class UserAppointmentsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
            <main>
                <h1 className="sub-heading">My Appointments</h1>
            </main>
    );
  }
}
