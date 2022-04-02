import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
             <Link to="/home" className="navbar-brand">Recat Router Dom</Link>
                <div>
                    <ul className="navbar-nav">
                        <li className="navbar-list"><Link to="/home" className="navbar-link">Home</Link></li>
                        <li className="navbar-list"><Link to="/about" className="navbar-link">About</Link></li>
                        <li className="navbar-list"><Link to="/contact " className="navbar-link">Contact</Link></li>
                    </ul>
                </div>
             </nav>
        )
    }
}
export default Navbar