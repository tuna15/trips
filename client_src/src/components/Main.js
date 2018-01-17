import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUp from './SignUp';
import Trips from './Trips';
import About from './About';

var Main = () => (
  <main>
    <Switch>
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/' component={Trips} />
      <Route exact path='/about' component={About} />
    </Switch>
  </main>
)

export default Main;
