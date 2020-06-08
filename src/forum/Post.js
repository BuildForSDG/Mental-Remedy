import React, { Component } from 'react';
//import { GoComment } from 'react-icons/go';
import { withRouter } from 'react-router-dom';
import PostOptions from './PostOptions';

class Post extends Component {
  constructor(props) {
    super(props);
    this.goToComments = this.goToComments.bind(this);
  }

  goToComments(event, forumPost) {
    event.preventDefault();
    this.props.history.push({
      pathname: `/forum/${forumPost.id}`,
      state: {
        forumPost: forumPost,
        users: this.props.users,
        user: this.props.user,
        currentUser: this.props.currentUser
      }
    });
  }

  render() {
    return (
        <>
        {this.props.user.id === this.props.forumPost.userId ? (
            <>
            <div className="post cursor" onClick={(event) => this.goToComments(event, this.props.forumPost)}>
                <img src={this.props.user.profile_pic} alt={this.props.user.username} />
                <div>
                    <h5 className="xxsmall-text">{this.props.user.username}</h5>
                    <p className="small-text">{this.props.forumPost.post}</p>
                </div>
            </div>

            <PostOptions
                forumPost={this.props.forumPost}
                dispatch={this.props.dispatch}
                goToComments={(event) => this.goToComments(event, this.props.forumPost)}
                currentUser={this.props.currentUser}
                />
        </>
        ) : (<span></span>)}
        </>
    );
  }
}

export default withRouter(Post);
