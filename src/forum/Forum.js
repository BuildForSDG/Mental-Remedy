import React, { Component } from 'react';
import ForumPostIntro from './ForumPostIntro';
import ForumPosts from './ForumPosts';
import { Consumer } from '../context/Context';
import ForumPostForm from './ForumPostForm';

export default class Forum extends Component {
  render() {
    return (
           <Consumer>
             {(value) => {
               return (
                <div className="forum-wrapper">
                  <ForumPostIntro
                    dispatch={value.dispatch}
                    currentUser={value.currentUser}
                    formActive={value.forumPostForm} />
                  <ForumPostForm formActive={value.forumPostForm} />
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
