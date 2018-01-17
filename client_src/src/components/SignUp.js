import React from 'react';

export default class Signup extends React.Component {

  render(){
    return(
      <div>
        <form>
          <p>Sign up below</p>
          <div>
            <p>Email</p>
            <input type="text" name="email" ref="email" placeholder="email"/>
          </div>
          <div>
            <p>Password</p>
            <input type="text" name="password" ref="password" placeholder="password"/>
          </div>
          <button>
            Sign Up!!
          </button>
        </form>
      </div>
    )
  }
}
