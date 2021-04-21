import react, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {

    constructor( props )
    {
        super( props );
    }

    render()
    {

        return(
            <>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand" to="/">LabOnline</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link px-4" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-4" to="#">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-4" to="#">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-4" to="#">Disabled</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link px-4" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-4" to="#">Features</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );

    };

};

export default Navbar;