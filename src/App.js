import React, { Component } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AboutMe from './AboutMe';
import WorkExperience from './WorkExperience';
import ProjectsPage from './ProjectsPage';




class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route path="/work-history" component={WorkExperience} />
            <Route path="/projects-page" component={ProjectsPage}/> 
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
