import React, { Component } from 'react';
import Post from './Post';
import { Consumer } from '../context/Context';


export default class SinglePost extends Component {
  render() {
    return (
           <Consumer>
               {(value) => {
                 return (
                    <div className="single-post">
                        {value.users.map((key) => (
                            <Post
                                key={key.id}
                                user={key}
                                forumPost={this.props.forumPost}
                                users={value.users}
                                currentUser={value.currentUser}
                                showComments={value.showComments}
                                dispatch={value.dispatch}
                                />
                        ))}
                    </div>
                 );
               }}
           </Consumer>
    );
  }
}
