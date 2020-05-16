import React, { Component } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default class Specialist extends Component {
  render() {
    const { specialist, specialists } = this.props;
    return (
      <>
        {specialists.indexOf(specialist) < 4 ? (
          <div className="profile-card">
            <img src={specialist.profile_pic} alt="" className="profile-pic" height="120" />
            <h1 className="medium-text ">{specialist.name}</h1>
            <h4 className="small-text location">
              <FaMapMarkerAlt />
              {specialist.location}
            </h4>
            <p className="intro">{specialist.reviews[0].review}</p>
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
