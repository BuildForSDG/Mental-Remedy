import React, { Component } from 'react';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';

export default class SingleSp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="detail">
        <div className="left">
          <div className="single-sp">
            <img src={this.props.specialist.profile_pic} height="200" alt="specialist" />
            <h1 className="large-text">{this.props.specialist.name}</h1>
            <h3 className="small-text location">
              <FaMapMarkerAlt />

              <span className="black-text small-headingy">City: </span>
              {this.props.specialist.city}
            </h3>
            <h5>
              <span>Languages :{this.props.specialist.languages} </span>
            </h5>
          </div>
          <div className="recent-reviews">
            <div className="ratings">
              <h4>Overall Rating</h4>
              <h1>5/5</h1>
              <span>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </div>
            <div>
              <h2>RECENT REVIEWS</h2>
              {this.props.specialist.reviews.map((item) => (
                <div key={item.id}>
                  <h3></h3>
                  <p>{item.review}</p>
                  <small>{item.intials}</small>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right">
          <h2>BOOK APPOINTMENT</h2>
          <div className="container-form">
            <form>
              <div className="form-field">
                <p>Name :</p>
                <input type="name" placeholder="Name..." />
              </div>
              <div className="form-field">
                <p>Email :</p>
                <input type="email" placeholder="Email..." />
              </div>
              <div className="form-field">
                <p>Date :</p>
                <input type="date" placeholder="Appointment Date..." />
              </div>
              <div className="form-field">
                <p>Time :</p>
                <input type="time" placeholder="Time..." />
              </div>
              <button className="btn">BOOK APPOINTMENT</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
