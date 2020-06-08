import React, { Component } from 'react';
import { MdDeleteForever } from 'react-icons/md';

export default class Comment extends Component {
  render() {
    let commenter = {};
    this.props.users.map((key) => key.id === this.props.comment.userId ? commenter = key : null);
    return (
        <>
             <h1 className="medium-text">Comments</h1>
            <div className="post">
                <img src={commenter.profile_pic} alt={commenter.username} />
                <div>
                    <h5 className="xxsmall-text">{commenter.username}</h5>
                    <p className="xxsmall-text">{this.props.comment.comment}</p>
                      {this.props.currentUser.id === this.props.comment.userId
                        ? <button className="plain-btn xxsmall-text"><MdDeleteForever/> Delete Comment</button>
                        : (<span></span>)
                      }
                </div>
            </div>


        </>
    );
  }
}
