import React from 'react';
import axios from 'axios';

import NewTrip from './NewTrip';

class Trips extends React.Component {
  constructor(){
    super();
    this.state = {
      trips: []
    }
  }

  getTrips() {
    axios.get('http://localhost:3000/api/trips').then(response => {
      this.setState({trips: response.data}, () =>{

      });
    }).catch(err => {

    });
  }

  componentWillMount(){
    this.getTrips();
  }

  render(){
    const tripItems = this.state.trips.map((trip, i) => {
      return(
        <h3>{trip.title}</h3>
      )
    });

    return(
      <div>
        <h1>
          Lets go somewhere!!
          <NewTrip/>
          {tripItems}
        </h1>
      </div>
    );
  };
}

export default Trips;
