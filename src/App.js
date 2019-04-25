import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Photos from './components/Photos';

export default class App extends Component{
  render(){
    return(
      <div id="mainPage" className = "" >
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/About" component={About} />
              <Route path="/Photos" component={Photos} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
