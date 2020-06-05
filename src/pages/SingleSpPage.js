import React, { Component } from 'react';
import SingleSp from '../single-sp/SingleSp';

export default class SingleSpPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main>
        <SingleSp md={this.props.history.location.state.md} />
      </main>
    );
  }
}
