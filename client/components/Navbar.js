import React, {useState} from 'react';
import {Link} from 'react-router-dom';


export default function Navbar() {
    const [toggle, setToggle] = useState(false)
    const openMenu = (event) => {
        setToggle(true)
        event.target.className = 'change'
        console.log(event.target)
    }
    return (
        <div id="nav">
            <nav className="nav">
                <h1 className="title"><Link
                to="/">
                    {'NE'}
                </Link></h1>
                <div className="Links">
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/newForm">New Post</Link>
                    
                    <div id="menu-button" onClick={(e) => openMenu(e)}>
                        <div id="line-1"/>
                        <div id="line-2"/>
                        <div id="line-3"/>
                    </div>
                </div>
            </nav>
        </div>
    )
}
