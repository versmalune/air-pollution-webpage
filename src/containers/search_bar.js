import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAir } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false, 
      error: '',
      city: ''
    };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.fetchAir(this.state.city);
    this.setState({city: ''});
  }
  render() {
    const clsName = (this.props.loading) ? 
      'btn btn-primary loading' : 'btn btn-primary';
    return (
      <form className='search-bar' onSubmit={event => this.onSubmit(event)}>
        <div className='input-group mb-3'>
          <input 
            onChange={event => this.setState({city: event.target.value})}
            type='text' className='form-control' placeholder='City' 
            value={this.state.city}
          />
          <div className='input-group-append'>
            <button className={clsName} type='button'>
              <i className='fa fa-spinner fa-spin' />
              <span>Search</span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.air.loading,
    error: state.air.error
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAir }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);