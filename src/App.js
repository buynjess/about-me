import React, { Component } from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AboutMe from './AboutMe';
import WorkExperience from './WorkExperience';



class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <switch>
            <Route exact path="/" component={AboutMe} />
            <Route path="/work-history" component={WorkExperience} />
          </switch>
        </Router>
      </div>
    )
  }
}

export default App;
