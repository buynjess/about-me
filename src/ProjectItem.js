import React, { Component } from "react"

export default class ProjectItems extends Component {
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h2>{this.props.date}</h2>
                <p>{this.props.description}</p>
            </div>
        )
    }
}