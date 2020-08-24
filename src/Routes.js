import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

// View Components
import Home from './components/views/Home'
import Signup from './components/views/Signup';
import Signin from './components/views/Signin';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/singup" exact component={Signup} />
        <Route path="/singin" exact component={Signin} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;