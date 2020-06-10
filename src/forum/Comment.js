import React, { Component } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import img from '../context/images/male.svg';

export default class Comment extends Component {
  render() {
    let commenter = {};
    this.props.profiles.map((key) => key.userId === this.props.comment.userId ? commenter = key : null);
    return (
        <>
            {this.props.comment.forumId === this.props.forumPost.id ? (
              <>
              <h1 className="medium-text">Comments</h1>
            <div className="post">
                <img src={img} alt={commenter.username} />
                <div>
                    <h5 className="xxsmall-text">{commenter.username}</h5>
                    <p className="xxsmall-text">{this.props.comment.comment}</p>
                      {this.props.user.id === this.props.comment.userId
                        ? <button className="plain-btn xxsmall-text"><MdDeleteForever/> Delete Comment</button>
                        : (<span></span>)
                      }
                </div>
            </div>
              </>
            ) : (<span></span>)}


        </>
    );
  }
}
