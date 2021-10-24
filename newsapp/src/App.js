import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/"><News pageSize={5} country="in" key="general" category="general" /></Route>
            <Route exact path="/business"> <News pageSize={5} country="in" key="business" category="business" /></Route>
            <Route exact path="/entertainment"> <News pageSize={5} country="in" key="entertainment" category="entertainment" /></Route>
            <Route exact path="/general "><News pageSize={5} country="in" key="general" category="general" /></Route>
            <Route exact path="/health"> <News pageSize={5} country="in" key="health" category="health" /></Route>
            <Route exact path="/science"> <News pageSize={5} country="in" key="science" category="science" /></Route>
            <Route exact path="/technology"> <News pageSize={5} country="in" key="technology" category="technology" /></Route>
                    {/* <Route exact path="/sports "><News pageSize={5} country="in" key="sports" category="sports" /></Route> */}
          </Switch>
        </Router>
      </div>
    )
  }
}

