import React, { Component } from 'react';
import AboutMe from './AboutMe'
import WorkExperience from "./WorkExperience"
import './App.css';
import {BrouserRouter as Router} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AboutMe/>
        <WorkExperience/>
      </div>
    )
  }
}

export default App;
