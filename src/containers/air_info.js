import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAddress } from '../actions';


class AirList extends Component {
  constructor(props) {
    super(props);
  }

  handleError() {
    if (this.props.error) {
      return (
        <div className="alert alert-danger" role="alert">
          {this.props.error.message}
        </div>
      );
    }
  }

  render() {
    if (parseInt(this.props.index, 10) === -1){
      return(
        <div className='air-list' >
        { this.handleError() }
      </div>
      );

    }   
    else {
      console.log("AIR_INFO PROPS.AIR: ", this.props.air);
      var i = this.props.index;
      var s = this.props.air[0];
      var final = parseInt(i, 10);
       return (
        <div className='air-list' >
          { this.handleError() }
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>Station</th>
                <th>KhaiGrade</th>
                <th>pm10</th>
                <th>pm2.5</th>
              </tr>
            </thead>  
            <tbody>
              <tr>
                <td>{s[final].stationName}</td>
                <td>{s[final].khaiGrade}</td>
                <td>{s[final].pm10Value}</td>
                <td>{s[final].pm25Value}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return { 
    air: state.air.data,  
    error: state.air.error,
    index: state.index,
    addr: state.address
  };
}

export default connect(mapStateToProps, {fetchAddress})(AirList);