import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class SiteNav extends Component{

    render (){
        return (
                <div>
                    <nav>
                     <ul>
                        <li><Link to="/"><h1>Home</h1></Link></li>
                        <li><Link to="/work-history"><h1>Work History</h1></Link></li>
                        <li><Link to="/projects-page"><h1>My Projects</h1></Link></li>
                     </ul>
                    </nav>
                </div>
    
        )
    }
}
export default SiteNav