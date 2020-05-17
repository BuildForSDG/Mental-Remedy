import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaMapMarkerAlt } from 'react-icons/fa';

class Specialist extends Component {
  render() {
    return (
      <>
        {this.props.specialists.indexOf(this.props.specialist) < 3 ? (
          <div className="profile-card">
            <img src={this.props.specialist.profile_pic} alt="" className="profile-pic" height="120" />
            <h1 className="medium-text ">{this.props.specialist.name}</h1>
            <h4 className="small-text location">
              <FaMapMarkerAlt />
              {this.props.specialist.location}
            </h4>
            <p className="intro">{this.props.specialist.reviews[0].review}</p>
            <div className="btns">
              <button className="btn1">View Profile</button>
              <button className="btn2">Book Appointment</button>
            </div>
          </div>
        ) : (
          <span></span>
        )}
      </>
    );
  }
}

Specialist.propTypes = {
  // Name all the props and set their type
  specialist: PropTypes.object.isRequired
};

export default Specialist;
