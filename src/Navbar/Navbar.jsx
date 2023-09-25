
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/#" className="navbar-brand">Gangadharam Vaddi</Link>
            <div className="ml-auto">
                <ul className="navbar-nav">
                    <li className="nav-list"><Link className="nav-link" to="/Home">Home</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/ETAPP">ET</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/message">Message</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/Product">Product</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/Message2">Message2</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/Employee">Employee</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/Hike">Salary</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/CompA">Props</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="./Digital">Digital</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/Login">Login</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/UserApp">User</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/ToDo">ToDo</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/ProductApp">ProductApp</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/ContactApp">ContactApp</Link></li>
                    <li className="nav-list"><Link className="nav-link" to="/UserApp">User</Link></li>

                </ul>
            </div>
        </nav>
    }
}

export default Navbar
