import React, { Component } from "react"


export default class WorkExperienceItem extends Component{
    render(){
        return(
            <div>
            <h2>{this.props.company}</h2>
            <p>{this.props.jobRole}<span>{this.props.dates}</span></p>
            <ul>
                <li>{this.props.responsibility1}</li>
                <li>{this.props.responsibility2}</li>
                <li>{this.props.responsibility3}</li>
                <li>{this.props.responsibility4}</li>
            </ul>
            </div>
        )
    }
}