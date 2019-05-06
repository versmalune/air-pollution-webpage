 /* global google */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/google_map';

class Address extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.address.addr.length === 0){
      console.log("ADDR LENGTH 0")
      return(
        <div>
        </div>
      )
    }
    else {
      console.log("ADDRESS GOT: ", this.props.address);
      var lat = parseFloat(this.props.address.addr[0].xc, 10);
      var lng = parseFloat(this.props.address.addr[0].yc, 10);

      return (
          <GoogleMap lat={lat} lng={lng}/>
        );
      }
    }
  }

//{this.props.air.map(this.renderAir.bind(this))}
function mapStateToProps(state) {
  return { 
    air: state.air.data,
    address: state.address
  };
}

export default connect(mapStateToProps)(Address);

