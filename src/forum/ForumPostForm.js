import React, { Component } from 'react';
import { MdComment } from 'react-icons/md';
import { Consumer } from '../context/Context';

export default class ForumPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.textRef = React.createRef();
  }

  handleClick(event) {
    event.preventDefault();
    console.log(this.state.post);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ post: this.textRef.current.value });
  }

  render() {
    return (
            <Consumer>
                {(value) => {
                  return (
                        <>
                        {this.props.formActive ? (
                            <form>
                                <div className="post-form mt-1">
                                    <textarea
                                        name="post-textarea"
                                        id="post-textarea"
                                        className="intro-search small-text"
                                        placeholder="Enter your question here..."
                                        onChange={this.handleChange}
                                        ref={this.textRef}
                                        ></textarea>
                                    <br/>
                                    <button
                                        className="small-heading large-btn m-0"
                                        onClick={(event) => this.handleClick(event)}
                                        ><MdComment/> Post</button>
                                </div>
                            </form>
                        ) : (<span></span>)}
                        </>
                  );
                }}
            </Consumer>
    );
  }
}
