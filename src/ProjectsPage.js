import React, { Component } from "react"
import SiteNav from "./SiteNav"
import ProjectItems from "./ProjectItem";

export default class ProjectsPage extends Component {
    render(){
        return(
            <div>
                <header>
                    <h1>My Projects</h1>
                    <SiteNav/>
                </header>
                <section>
                    <ProjectItems name="About Me" date="December 20 2018" description="A simple practice page to show work history and start show casing some projects."/>
                </section>
            </div>
        )
    }
}