import React, { Component } from 'react';

export default class ForumPost extends Component {
  render() {
    return (
            <div className="forum-post">
                <h1 className="sub-heading">Get your solution</h1>
                <p className="xxsmall-text">Post questions about anything concerning mental health and get answered by Specialists accross different Countries.</p>
                <button className="small-heading large-btn m-0" onClick={this.handleClick}>Post Your Question</button>
            </div>
    );
  }
}
