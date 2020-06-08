import React, { Component } from 'react';
import ForumPostIntro from './ForumPostIntro';
import ForumPosts from './ForumPosts';
import { Consumer } from '../context/Context';

export default class Forum extends Component {
  render() {
    return (
           <Consumer>
             {(value) => {
               return (
                <div className="forum-wrapper">
                  <ForumPostIntro />
                  <ForumPosts
                    getForumPosts={value.getForumPosts}
                    forumPosts={value.forumPosts}
                    currentUser = {value.currentUser}
                    users = {value.users}
                    getUsers={value.getUsers}
                    showComments={value.showComments}
                    />
                </div>
               );
             }}
           </Consumer>
    );
  }
}
