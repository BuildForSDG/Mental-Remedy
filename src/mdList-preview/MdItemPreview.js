import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MdItemPreview extends Component {
  render() {
    const { mentalDisorder, mdList } = this.props;
    return (
        <>
            {mdList.indexOf(mentalDisorder) < 6 ? (
                <li className="md-item-prev">
                    <div className="title">
                      <h5 className="small-heading">{mentalDisorder.title}</h5>
                    </div>
                    <div className="short-des small-text">{mentalDisorder.description}</div>
                    <button className="plain-btn right small-heading">Learn More</button>
                </li>
            ) : (<span></span>)}
        </>
    );
  }
}

MdItemPreview.propTypes = {
  mentalDisorder: PropTypes.object.isRequired,
  mdList: PropTypes.array.isRequired
};

export default MdItemPreview;
