import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
import AboutMe from "./AboutMe"
import WorkExperience from './workExperience';


class SiteNav extends Component{

    render (){
        return (
                <div>
                    <nav>
                     <ul className="upper-container">
                        <li className="upper-container>li"><Link to="/"><h1>About Me</h1></Link></li>
                        <li className="upper-container>liS"><Link to="/PreviewPage"><h1>Work Experience</h1></Link></li>
                     </ul>
                    </nav>
                <Route exact path="/" component={AboutMe} />
                <Route path="/PreviewPage" component={WorkExperience} />
                </div>
    
        )
    }
}
export default SiteNav