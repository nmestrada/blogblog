import React, {Component} from 'react'
import { FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai"

class Root extends Component {
    render() {
        return (
            <div id="body">
                 <div className="intro">
                    <h2>Natalie Estrada</h2>
                    <h2>Yo soy un programador de software</h2>
                    <h2>Si entiendes esto, bueno para ti!</h2>
                    <h2>Quiero hacer cosas que hacer una diferencia</h2>
                    <span>
                        
                        <a href="https://www.linkedin.com/in/natalie-estrada-dev/"><AiOutlineLinkedin/></a> - 
                        <a href="https://github.com/nmestrada"><FiGithub/></a>
                    </span>
                </div>
            </div>
        )
    }
}

export default Root;