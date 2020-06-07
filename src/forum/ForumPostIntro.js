import React, { Component } from 'react';
import postIntro from '../context/images/post.svg';

export default class ForumPostIntro extends Component {
  render() {
    return (
            <div className="forum-post-intro">
                <div className="post-intro-right">
                  <img src={postIntro} alt="post-intro" className="post-intro-img" />
                </div>
                <div className="post-intro-left">
                  <h1 className="sub-heading">Get your solution</h1>
                  <p className="xxsmall-text">Post questions about anything concerning mental health and get answered by Specialists accross different Countries.</p>
                  <button className="small-heading large-btn m-0" onClick={this.handleClick}>Post Your Question</button>
                </div>
            </div>
    );
  }
}
