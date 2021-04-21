import react, { Component } from 'react';
import ConsumerStatus from './ConsumerStatus/ConsumerStatus';

import './Slider.css';
import Loader from '../../UI/Loading/Loading';

class Slider extends Component {

    constructor( props )
    {

        super( props );
        this.state = {

            loaded: false

        }

    }

    componentDidMount()
    {

        this.setState( { loaded: true } );
        
    }

    render()
    {

        return(

            <>
                <div className="Slider">
                    {
                        this.state.loaded ?
                            <div className="Slider-inner text-center">
                                <h1 className="display-4">Welcome To LabOnline</h1>
                                <h4>Designed & Developed By Usman Badar</h4>
                            </div>
                        :
                        <Loader />
                    }
                </div>
                <div className="ConsumerStatusReletive">
                    <ConsumerStatus />
                    <div className="icons-div text-right">
                        <a href="##" style={{ 'color': '#4064AC' }}>
                            <i class="lab la-facebook-f la-2x"></i>
                        </a>
                        <a href="##" style={{ 'color': '#0073AF' }}>
                            <i class="lab la-linkedin-in la-2x"></i>
                        </a>
                        <a href="##" style={{ 'color': '#9A2DB7' }}>
                            <i class="lab la-instagram la-2x"></i>
                        </a>
                    </div>
                </div>
            </>

        );

    };

};

export default Slider;