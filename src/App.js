import React, { Component } from 'react';
import './App.css';

import SearchBar from './containers/search_bar';
import AirList from './containers/air_info';
import StationList from './containers/station_list';
import Address from './containers/address';

class App extends Component {
  render() {
    return (
      <div className="App container mt-3">
        <SearchBar />
        <StationList />
        <AirList />
        <Address />
      </div>
    );
  }
}

export default App;
