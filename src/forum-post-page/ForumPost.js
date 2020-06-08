import React, { Component } from 'react';
import Comment from '../forum/Comment';
import PostOptions from '../forum/PostOptions';

export default class ForumPost extends Component {
  render() {
    return (
            <>
                <div className="post">
                    <img src={this.props.historyLocation.user.profile_pic} alt={this.props.historyLocation.user.username} />
                    <div>
                        <h5 className="xxsmall-text">{this.props.historyLocation.user.username}</h5>
                        <p className="small-text">{this.props.historyLocation.forumPost.post}</p>
                    </div>
                </div>
                <div className="comments">
                    {this.props.historyLocation.forumPost.comments.map((key) => (
                        <Comment
                            key={key.id}
                            comment={key}
                            users={this.props.historyLocation.users}
                            user={this.props.historyLocation.user}
                            forumPost={this.props.historyLocation.forumPost}
                            currentUser={this.props.historyLocation.currentUser}
                            />
                    ))}
                </div>
                <PostOptions
                    forumPost={this.props.historyLocation.forumPost}
                    dispatch={this.props.historyLocation.dispatch}
                    goToComments={() => null}
                    currentUser={this.props.historyLocation.currentUser}
                    deleteOption={true}
                    />
            </>
    );
  }
}
