import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNumber: 254,
      date: '',
      type: '',
      specialist: this.props.name
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handlePhoneChange(event) {
    this.setState({
      phoneNumber: event.target.value
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleDateChange(event) {
    this.setState({
      date: event.target.value
    });
  }

  handleSubmit(event) {
    this.props.history.push({
      pathname: '/user-appointments'
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="right">
        <h2>BOOK APPOINTMENT</h2>
        <div className="container-form">
          <form onSubmit={this.handleSubmit}>
            <div className="form-field">
              <p>Name :</p>
              <input type="name" placeholder="Name..." value={this.state.name} onChange={this.handleNameChange} />
            </div>
            <div className="form-field">
              <p>Email :</p>
              <input type="email" placeholder="Email..." value={this.state.email} onChange={this.handleEmailChange} />
            </div>
            <div className="form-field">
              <p>Phone Number :</p>
              <input
                type="number"
                placeholder="Phone Number..."
                value={this.state.phoneNumber}
                onChange={this.handlePhoneChange}
              />
            </div>
            <div className="form-field">
              <p>Name :</p>
              <input type="date" placeholder="Date..." value={this.state.date} onChange={this.handleDateChange} />
            </div>
            <div className="form-field">
              <p>Appointment type :</p>
              <select>
                <option>Walk-In</option>
                <option disabled>Video visit</option>
              </select>
            </div>

            <button className="btn" type="submit">
              BOOK APPOINTMENT
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Form);
