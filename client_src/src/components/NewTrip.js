import React from 'react';
import axios from 'axios';

class NewTrip extends React.Component {
  addTrip(newTrip){
    axios.request({
      method: "post",
      url: "http://localhost:3000/api/trips",
      data: newTrip
    }).then(response => {
      console.log('added');
    }).catch(err => {

    });
  }

  onSubmit(e){
    const newTrip = {
      title: this.refs.title.value

    }
    this.addTrip(newTrip);
    e.preventDefault();
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div>
            <input type="text" name="title" ref = "title" placeholder="Trip Title"/>
          </div>
        </form>
      </div>
    );
  }
}

export default NewTrip;
