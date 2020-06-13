import React, { Component } from 'react';

export default class AddMdForm extends Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  close(event) {
    event.preventDefault();
    this.props.dispatch({ type: 'TOGGLEMDFORM', payload: false });
    window.scrollTo(0, 0);
  }

  handleClick(event) {
    event.preventDefault();
  }

  render() {
    return (
        <>
        {this.props.mdForm ? (
            <div className="modal">
                <div className="modal-form">
                   <label htmlFor="md-title" className="xxsmall-text">Mental Disorder Title</label><br/>
                   <input type="text" name="md-title" id="md-title" className="intro-search small-text" placeholder="Title" /><br/>
                   <label htmlFor="md-description" className="xxsmall-text">Description</label><br/>
                   <textarea name="md-description" id="md-description" className="intro-search xxsmall-text mt-1" placeholder="Description..."></textarea><br/>
                   <label htmlFor="diagnosis" className="xxsmall-text">Diagnosis</label><br/>
                   <textarea name="diagnosis" id="diagnosis" className="intro-search xxsmall-text mt-1" placeholder="Diagnosis..."></textarea><br/>
                   <label htmlFor="treatment" className="xxsmall-text">Treatment</label><br/>
                   <textarea name="treatment" id="treatment" className="intro-search xxsmall-text mt-1" placeholder="Treatment..."></textarea>
                    <p className="small-text">Symptoms</p>
                   <textarea name="cognitive" id="cognitive" className="intro-search xxsmall-text mt-1" placeholder="Cognitive..."></textarea>
                   <textarea name="behavioural" id="behavioural" className="intro-search xxsmall-text mt-1" placeholder="Behavioural..."></textarea>
                   <textarea name="whole-body" id="whole-body" className="intro-search xxsmall-text mt-1" placeholder="Whole body..."></textarea>
                   <textarea name="common" id="common" className="intro-search xxsmall-text mt-1" placeholder="Common..."></textarea>
                   <textarea name="mood" id="mood" className="intro-search xxsmall-text mt-1" placeholder="Mood..."></textarea>
                   <textarea name="weight" id="weight" className="intro-search xxsmall-text mt-1" placeholder="Weight..."></textarea>
                   <textarea name="sleep" id="sleep" className="intro-search xxsmall-text mt-1" placeholder="Sleep..."></textarea><br/>
                   <div className="comment-btns">
                     <button className="large-btn" onClick={this.handleClick}>Add disorder</button>
                     <button className="large-btn" onClick={this.close}>Cancel</button>
                   </div>
                </div>
            </div>) : (<span></span>)}
        </>
    );
  }
}
