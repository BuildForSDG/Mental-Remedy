import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { IoIosAddCircleOutline } from 'react-icons/io';
import Md from './Md';
import PreLoader from '../pre-loader/PreLoader';
import AddMdForm from './AddMdForm';

class MdList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getMdList();
  }

  handleClick(event) {
    event.preventDefault();
    this.props.dispatch({ type: 'TOGGLEMDFORM', payload: true });
  }

  render() {
    return (
          <>
            {this.props.admin ? (
              <div className="md-item-prev center" onClick={this.handleClick}>
                <div className="heading"><IoIosAddCircleOutline /></div>
              </div>
            ) : (<span></span>)}
            <AddMdForm mdForm={this.props.mdForm} dispatch={this.props.dispatch} />
            <div className="md-list-prev">
              {this.props.mdList.map((key) => (
                <LazyLoad key={key.id} debounce={100} height={200} placeholder={<PreLoader/>}>
                  <Md md={key} key={key.id} />
                </LazyLoad>
              ))}
            </div>
          </>
    );
  }
}

MdList.propTypes = {
  mdList: PropTypes.array.isRequired,
  getMdList: PropTypes.func.isRequired
};

export default MdList;
