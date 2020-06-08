import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ForumPost from '../forum-post-page/ForumPost';

class ForumPostPage extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.history.push('/forum');
  }

  render() {
    const historyLocation = this.props.history.location.state;
    return (
            <main>
                <h1 className="sub-heading">Forum Post</h1>
                <div className="breadcrumbs">
                    <span className="xxsmall-text">
                        <a href="/" onClick={this.handleClick}>Back to Forum</a> / {historyLocation.user.username}`s post
                    </span>
                </div>
                <div className="forum-posts-wrapper">
                    <div className="single-post">
                        <ForumPost historyLocation={historyLocation} />
                    </div>
                </div>
            </main>
    );
  }
}

export default withRouter(ForumPostPage);
