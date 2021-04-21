import react, { Component } from 'react';

import './Home.css';
import Slider from '../Slider/Slider';
import _AboutUS from '../Sections/_AboutUS/_AboutUS';
import _Test from '../Sections/_Tests/_Tests';
import _Testimonials from '../Sections/_Testimonials/_Testimonials';
import Footer from '../Sections/Footer/Footer';

class Home extends Component {

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

            <div className="Home">
                <Slider />
                <div className="pt-5">
                    <_AboutUS />
                    <_Test />
                    <_Testimonials />
                </div>
                <div className="w-100 py-5 text-center">
                    <button className="btn btn-sm px-5 general-btns" style={ { 'borderRadius' : '30px' } }>Get an Appointment</button>
                </div>
                <Footer />
            </div>

        );

    };

};

export default Home;