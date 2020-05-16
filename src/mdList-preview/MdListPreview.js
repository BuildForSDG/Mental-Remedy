import React, { Component } from 'react';
import MdItemPreview from './MdItemPreview';
import { mentalDisorders } from '../context/data';

export default class MdListPreview extends Component {
  componentDidMount() {
    this.props.getMdlist();
  }

  render() {
    const { mdList } = this.props;
    return (
            <ul className="md-list-prev">
                {mdList.map((key) => (
                <MdItemPreview mentalDisorder={key} key={key.id} mdList={mentalDisorders} />
                ))}
            </ul>
    );
  }
}
