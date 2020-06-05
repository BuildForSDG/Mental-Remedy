import React, { Component } from 'react';
import Forum from '../forum/Forum';

export default class ForumPage extends Component {
  render() {
    return (
            <main>
                <h1 className="heading">Forum</h1>
                <Forum/>
            </main>
    );
  }
}
