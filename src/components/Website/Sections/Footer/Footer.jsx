import react, { Component } from 'react';

import './Footer.css';

class Footer extends Component {

    constructor( props )
    {

        super( props );
        this.state = {

            ThisYear: null

        }

    }

    componentDidMount()
    {

        let date = new Date();
        let year = date.getFullYear();
        this.setState( { ThisYear: year } );

    }

    render()
    {

        return(

            <div className="Footer">
                <div className="container text-center">
                    <div className="row border-bottom pb-4">
                        <div className="col-lg-3 text-left">
                            <a href="##">Home</a>
                            <a href="##">About</a>
                            <a href="##">Contact</a>
                            <a href="##">Login</a>
                        </div>
                        <div className="col-lg-3 text-left">
                            <a href="##">All Test</a>
                            <a href="##">Blood Test</a>
                            <a href="##">Urine Analysis</a>
                            <a href="##">X-Rays & Altrasound</a>
                        </div>
                        <div className="col-lg-6">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1785395795932!2d67.0087300148791!3d24.857751051488346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e0ffe49d2b9%3A0xf6264a8f9f3130fc!2sDOW%20University%20of%20Health%20Sciences%20(DUHS)!5e0!3m2!1sen!2s!4v1617431510703!5m2!1sen!2s" 
                                width="100%" 
                                height="auto" 
                                // style="border:0;" 
                                allowfullscreen="" 
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                    <small><i class="las la-copyright"></i> {this.state.ThisYear} laboratory.com All Rights Reserved</small>
                </div>
            </div>

        );

    };

};

export default Footer;