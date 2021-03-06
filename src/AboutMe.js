import React, { Component } from "react"
import SiteNav from "./SiteNav"

export default class AboutMe extends Component {
    render(){
        return(
        <div>
            <header>
                <h1>Jessica Buynak</h1>
                <SiteNav/>
            </header>
            <main>
                <div> 
                <img src="https://1.img-dpreview.com/files/p/E~forums/60763533/68801566d09346aa81c55c78a6c4f8ff" height="200"/>
                    <article>
                        <h3> About Me</h3> 
                        <p>
                            My Name is Jessica. I have lived in 10 different states and have lived in a different
                            country for a year.
                            I enjoy way too many hobbies to have time for. Some of my favorites are: Plant keeping, ballroom dancing, horse
                            back riding, and knitting.
                            My biggest pet peeve is when people say they will do something then don't ever do it.
                            I have 2 fur-babies, 2 ragdoll cats and a betta fish
                        </p>
                    </article>
                </div>
                <div>
                    <h3> Why coding school</h3>
                </div>
                <div> 
                    <p>Deciding to go to coding school was kind of a spurr of the moment thing. I have a freind who attended Dev
                    Mountain.
                    He was constantly trying to get me to go to Dev Mountain and learn to code. But I always sneered at office
                    jobs, especially those
                    to do with computers. Always thought it was dumb and boring and I would hate life. But I have had a lot of
                    jobs that were more physical
                    labor. But I am getting old and tired and have hurt myself too many times. I felt I was working way too
                    hard for such little pay.
                    Finally I got my first "office" job working in a call center. I had to do some dinking around on a computer
                    and I thought it was pretty cool.
                    I went to a job fair where the Helio Training recruiter was and talked to him about the school and what
                    coding was. He said classes started
                    in two weeks. I figured, why the hell not. It would be a good expericence and getting into a new field
                    would be a good change. And
                    it sure would be nice to make a little more money. </p>
                </div>     
            </main>
            <form>
                <div> 
                    <ul>
                    <h4>Contact Me</h4>   
                        <li> Name: <input type="text" name="Name" value="Enter Name Here" /></li>
                        <li>Email: <input type="text" name="Email" value="Enter Email" /></li>
                        <li><textarea>Questions Comments Concerns</textarea></li>
                        <li><input type="submit" value="Submit"/></li>
                    </ul>
                </div> 
            </form>
            <nav>
                <div>
                <h4>Links</h4>
                </div>
                <div>
                    <ul>
                        <li><a href="https://github.com/buynjess"> GitHub </a></li>
                        <li><a href="https://www.linkedin.com/in/jessica-buynak"> Linkedin</a></li>
                        <li><a href="about me: work expericence.html"> Work Experince</a></li>
                    </ul>
                </div> 
            </nav>
        </div>

        )
    }
}