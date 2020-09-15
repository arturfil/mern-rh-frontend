import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

// View Components
import Home from './components/views/Home'
import Signup from './components/views/Signup';
import Signin from './components/views/Signin';
import AddVideogame from './components/views/AddVideogame'
import AddCategory from './components/views/AddCategory'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/singup" exact component={Signup} />
        <Route path="/singin" exact component={Signin} />
        <Route path="/create-category" exact component={AddCategory} />
        <Route path="/create-product" exact component={AddVideogame} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;