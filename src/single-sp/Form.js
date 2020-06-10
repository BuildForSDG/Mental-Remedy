import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phoneNumber: 0,
      date: '',
      specialist: this.props.name
    };
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit(event) {
    alert(`${this.state.name}`);
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

            <button className="btn" type="submit">
              BOOK APPOINTMENT
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
