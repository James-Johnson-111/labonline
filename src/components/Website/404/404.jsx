import react, { Component } from 'react';
import { Link } from 'react-router-dom';

import './404.css';

class Errors extends Component {

    constructor( props )
    {

        super( props );

    }

    render()
    {

        return(

            <>
                <div className="w-100 vh-100 d-grid">
                    <div className="d-flex justify-content-center">
                        <div className="p-5 text-center w-75" style={ { 'position' : 'relative' } }>
                            <h1 className="error_status">404</h1>
                            <h1 className="text-uppercase font-weight-bold">we are sorry, page not found</h1>
                            <h5 className="text-uppercase">
                                the page you are looking for might have been removed had its Name
                                changed or its temporarly unavailable
                            </h5>
                            <Link to="/">
                                <button className="btn general-btns px-5 mt-3">Go To Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </>

        );

    }

};

export default Errors;