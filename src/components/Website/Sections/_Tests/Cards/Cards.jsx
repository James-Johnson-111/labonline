import react, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Cards.css';

class Cards extends Component {

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

            <div className="_TestCards">
                <img src={this.props.Image} alt="CardIMage" width="100%" />
                <div className="_TestCards-text">
                    <div className="px-4">
                        <h3>{this.props.title}</h3>
                    </div>
                </div>
            </div>

        );

    };

};

export default Cards;