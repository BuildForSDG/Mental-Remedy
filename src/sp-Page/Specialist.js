import React, { Component } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import male from '../context/images/male.svg';

export default class Specialist extends Component {
  render() {
    return (
      <div>
        <div className="profile-card">
          <img src={male} alt="" className="profile-pic" height="120" />
          <h1 className="medium-text ">Dr. Wesley Pipes</h1>
          <h4 className="small-text location">
            <FaMapMarkerAlt />
            <br />
            <span className="black-text small-headingy">City: </span>Nairobi
          </h4>
          <p className="review small-text">
            I feel that Dr. Irungu really cares about his patients and genuinely wants to help them. I am going to
            continue seeing him. I’m very impressed with the Dr. and his assistant as well. I would recommend Dr. Ivanov
            as well as the application.
          </p>
          <button className="small-heading plain-btn">More reviews</button>
          <div className="btns">
            <button className="btn1">View Profile</button>
            <button className="btn2">Book Appointment</button>
          </div>
        </div>
      </div>
    );
  }
}
