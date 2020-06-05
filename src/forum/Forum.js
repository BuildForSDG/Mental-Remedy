import React, { Component } from 'react';
import ForumPost from './ForumPost';

export default class Forum extends Component {
  render() {
    return (
            <div className="forum-wrapper">
                <ForumPost/>
            </div>
    );
  }
}
