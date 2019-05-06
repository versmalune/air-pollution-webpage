import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchIndex } from '../actions';
import { fetchAddress } from '../actions';


function Button(props) {
	return (
		<button value={props.index} type='button' className='stations'
		onClick={props.onClick}>
			<span>{props.name}</span>
		</button>
	)
}

class StationList extends Component {
	constructor(props) {
		super(props);
	}

	renderItem(item, index) {
		return <Button key={index} index={index} name={item.stationName} onClick={()=> {
			this.handleClick(index);
		}}/>
	}
	
	handleClick(index){
		this.props.fetchIndex(index);
		var i = index;
		var s = this.props.air[0];
		var final = parseInt(i, 10);
		var st = s[final].stationName;
		this.props.fetchAddress(st);
	}

	renderStation(s){
		 var x = s;
		return(
			<ul>
				{x.map(this.renderItem.bind(this))}
			</ul>
		);
	}

	render(){
		console.log("STATION_LIST GOT THIS.PROPS.AIR: ", this.props.air)
		if (this.props.air.length === 0){
			return(<ul></ul>)
		}
		else {
			return(
					<ul>
						{this.props.air.map(this.renderStation.bind(this))}
					</ul>
			)
		}
	}
}

function mapStateToProps(state) {
  return { 
		air: state.air.data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchIndex, fetchAddress }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StationList);