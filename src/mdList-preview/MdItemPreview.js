import React, { Component } from 'react';

export default class MdItemPreview extends Component {
  render() {
    const { mentalDisorder, mdList } = this.props;
    return (
        <>
            {mdList.indexOf(mentalDisorder) < 6 ? (
                <li className="md-item-prev">
                    <div className="title">
                      <h5 className="small-heading">{mentalDisorder.title}</h5>
                    </div>
                    <div className="short-des">{mentalDisorder.description}</div>
                    <p className="d-none des">{mentalDisorder.description}</p>
                    <button className="small-heading">Learn More</button>
                </li>
            ) : (<span></span>)}
        </>
    );
  }
}
