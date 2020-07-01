import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav  className="header container-fluid bg-danger d-flex position-fixed">
                <ul className="navbar-nav col-sm- float-left">
                    <li className="nav-item">
                        <Link exact to='/' className="nav-link text-light"> Home</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Navbar;