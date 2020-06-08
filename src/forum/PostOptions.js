import React, { Component } from 'react';
import { FaRegComments } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

export default class PostOptions extends Component {
  render() {
    return (
            <div className="post-options">
                    <button className="plain-btn xxsmall-text"
                    onClick={(event) => this.props.goToComments(event)}>
                    <FaRegComments/><span className="ml-1 mr-1">{this.props.forumPost.comments.length}</span>
                        {this.props.forumPost.comments > 1 || this.props.forumPost.comments < 1
                          ? 'Comments' : 'Comment'}</button>
                    {/* The delete button is by the user who posted it */}
                    {this.props.deleteOption ? (
                      <>
                      {this.props.currentUser.id === this.props.forumPost.userId
                        ? <button className="plain-btn xxsmall-text mr-1 right"><MdDeleteForever/> Delete</button>
                        : (<span></span>)
                      }
                      </>
                    ) : (<span></span>)}
            </div>
    );
  }
}
