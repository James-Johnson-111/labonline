import react, { Component } from 'react';
import { Link } from 'react-router-dom';

import './_Testimonials.css';

class _Testimonials extends Component {

    constructor( props )
    {

        super( props );
        this.state = {

            firstClient: true,
            secondClient: false,
            thridClient: false

        }

    }

    changeClient = () => {
        
        if(this.state.firstClient)
        {
            this.setState( { firstClient: false } );
            this.setState( { secondClient: true } );
        }

        if(this.state.secondClient)
        {
            this.setState( { secondClient: false } );
            this.setState( { thridClient: true } );
        }

        if(this.state.thridClient)
        {
            this.setState( { thridClient: false } );
            this.setState( { firstClient: true } );
        }

    }

    render()
    {

        let testimonial = null;

        if(this.state.firstClient)
        {

            testimonial = (
                <>
                    <div className="_Testimonials-text" style={ { 'transition' : '1s', 'opacity' : '1' } }>
                        <h2>Sheikh Dawood Bin Zaid</h2>
                        <p>President of Association IN Riaz, Saudia Arabia</p>
                        <small>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            tronic typesetting, remaining essentially unchanged.
                        </small>
                    </div>
                </>
            );

        }else if(this.state.secondClient)
        {

            testimonial = (
                <>
                    <div className="_Testimonials-text">
                        <h2>Iftikhar Ali</h2>
                        <p>Chairmain IN LOS ANGELES, CALIFORNIA</p>
                        <small>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            tronic typesetting, remaining essentially unchanged.
                                </small>
                    </div>
                </>
            );

        }else {

            testimonial = (
                <>
                    <div className="_Testimonials-text">
                        <h2>Zaid Fawad</h2>
                        <p>HAND MADE IN LOS ANGELES, CALIFORNIA</p>
                        <small>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            tronic typesetting, remaining essentially unchanged.
                                </small>
                    </div>
                </>
            );

        }

        return(

            <div className="_Testimonials text-center">
                <h1>What Our Clients Say</h1>
                <div className="_Testimonials-inner d-grid h-100 px-4">
                    <div className="d-flex justify-content-between">

                        <div className="left-div d-grid" onClick={this.changeClient}>
                            <i class="las la-angle-double-left la-2x"></i>
                        </div>

                        <div className="center-div">
                            {testimonial}
                        </div>

                        <div className="right-div d-grid" onClick={this.changeClient}>
                            <i class="las la-angle-double-right la-2x"></i>
                        </div>

                    </div>
                </div>
            </div>

        );

    };

};

export default _Testimonials;