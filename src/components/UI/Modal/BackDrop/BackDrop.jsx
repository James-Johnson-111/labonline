import react, { Component } from 'react';

import './BackDrop.css';

class BackDrop extends Component {

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

            <>
                { this.props.show ? <div className="BackDrop" onClick={this.props.clicked}></div> : null }
            </>

        );

    };

};

export default BackDrop;