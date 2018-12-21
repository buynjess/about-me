import React, { Component } from "react"
import AboutMe from "./AboutMe"
import SiteNav from "./SiteNav";
import WorkExperienceitem from "./WorkExperienceItem";

export default class WorkExperience extends Component {
    render(){
        return(
            <div>
                <header>
                    <h1> Jessica's Work History</h1>
                    <SiteNav/>
                 </header>
                <section>
                    <WorkExperienceitem company="US ARMY" jobRole="MOTOR TRANSPORT OPERATOR" date="2006 - PRESENT" responsibility1="Perform basic soldier tasks and duties while maintaining professionalism." responsibility2="Teach continuing education courses to peers. Receive “high” after action reviews." responsibility3="Effectively strategizing with a team to ensure smooth and efficient convoy missions." responsibility4="Maintain, track and update personnel documents."/>    
                    <WorkExperienceitem company="MY FAST PC" jobRole="INSIDE SALES ASSOCIATE" date="2017- 2018" responsibility1="Consistently maintain a talk time of 80% or higher." responsibility2="Employee of the month for consistent hard work and high sale volume." responsibility3="Maintain positive attitude and team comradery."/>
                    <WorkExperienceitem company="AURIC SOLAR" jobRole="RESIDENTIAL APPOINTMENT SETTER" date="2017 - 2018" responsibility1="Reached out to communities to inform them about changes to utility companies regarding solar." responsibility2="Set appointments for free estimates."/>
                    <WorkExperienceitem company="PROGRO PARTNERS" jobRole="AREA MANAGER" date="2016 - 2017" responsibility1="Reviewed applications for hiring seasonal merchandisers." responsibility2="Made hiring decisions for seasonal positions and made ongoing performance replacement decisions for two employment years." responsibility3="Utilized company required software and applications to submit paper work and reports." responsibility4="Performed timely resolution (research and call back) for quality control calls and/or emails."/>
                </section>
                <div>
                    <h5>Links</h5>
                    <a href="about me.html">About Me</a>
                </div>    
            </div>

        )
    }
}