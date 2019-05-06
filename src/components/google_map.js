/*global google*/
import React, { Component } from 'react';
const google = window.google;

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.map = React.createRef();
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng
    }
  }
  
  componentWillReceiveProps(nextProps) {
    console.log("nextprops", nextProps.lat);
    this.setState({
      lat: nextProps.lat,
      lng: nextProps.lng,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.lat == nextState.lat) {
      return false;
    }
  }

  componentDidMount() {
    console.log('google', this.props);
    new google.maps.Map(this.map.current, {
      zoom: 15,
      center: {
        lat: this.state.lat,
        lng: this.state.lng
      }
    });
  }


  render() {
    return <div className='map' ref={this.map}></div>;
  }
}

export default GoogleMap;
