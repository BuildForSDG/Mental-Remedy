import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import SinglePost from './SinglePost';
import PreLoader from '../pre-loader/PreLoader';

export default class ForumPosts extends Component {
  componentDidMount() {
    this.props.getForumPosts();
    this.props.getUsers();
  }

  render() {
    return (
        <div className="forum-posts-wrapper">
            <h1 className="sub-heading">Forum Posts</h1>
            {this.props.forumPosts.map((key) => (
              <LazyLoad key={key.id} debounce={100} height={200} placeholder={<PreLoader/>}>
              <SinglePost
                key={key.id}
                forumPost={key}
              />
              </LazyLoad>
            ))}
        </div>
    );
  }
}
