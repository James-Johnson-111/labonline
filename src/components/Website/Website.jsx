import react, { Component } from 'react';
import { Route } from 'react-router';
import Home from './Home/Home';
import TestPage from './TestPage/TestPage';

import './Website.css';

class Website extends Component {

    constructor( props )
    {

        super( props );
        this.state = {

            nothing: null

        }

    }

    render()
    {

        return(

            <div className="Website">
                <Route exact path="/" component={Home} />
                <Route exact path="/bloodtest" component={TestPage} />
                <Route exact path="/urine-analysis" component={TestPage} />
                <Route exact path="/xrays-altrasound" component={TestPage} />
            </div>

        );

    };

};

export default Website;