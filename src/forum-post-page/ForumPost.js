import React, { Component } from 'react';
import Comment from '../forum/Comment';
import PostOptions from '../forum/PostOptions';
import img from '../context/images/male.svg';
import CommentModal from './CommentModal';
import { Consumer } from '../context/Context';

export default class ForumPost extends Component {
  componentDidMount() {
    this.props.getComments();
  }

  render() {
    return (
            <Consumer>
                {(value) => {
                  return (
                        <>
                        <div className="post">
                    <img src={img} alt={this.props.historyLocation.profile.username} />
                    <div>
                        <h5 className="xxsmall-text">{this.props.historyLocation.profile.username}</h5>
                        <p className="small-text">{this.props.historyLocation.forumPost.post}</p>
                    </div>
                </div>
                <CommentModal historyLocation={this.props.historyLocation} />
                <div className="comments">
                    {value.comments.map((key) => (
                        <Comment
                            key={key.id}
                            comment={key}
                            profiles={value.profiles}
                            user={this.props.historyLocation.user}
                            forumPost={this.props.historyLocation.forumPost}
                            getComments={value.getComments}
                            />
                    ))}
                </div>
                <PostOptions
                    forumPost={this.props.historyLocation.forumPost}
                    comments={this.props.historyLocation.comments}
                    user={this.props.historyLocation.user}
                    deleteOption={true}
                    addComment={true}
                    goToComments={() => null}
                    goToCommentForm={() => value.dispatch({ type: 'TOGGLECOMMENTFORM', payload: true })}
                    />
                        </>
                  );
                }}
            </Consumer>
    );
  }
}
