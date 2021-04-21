import react, { Component } from 'react';

import './ConsumerStatus.css';
import WOW from 'wowjs';

class ConsumerStatus extends Component {

    constructor( props )
    {

        super( props );
        this.state = {

            nothing: null

        }

    }

    componentDidMount()
    {
        
        new WOW.WOW().init();

    }

    render()
    {

        return(

            <div className="ConsumerStatus wow fadeIn" data-wow-ineration="10">
                <form>
                    <h4 className="mb-3">Find Your Test Reports</h4>
                    <div className="d-flex justify-content-between mb-3">
                        <input type="text" className="form-control form-control-sm mr-2" placeholder="Your Name" />
                        <input type="text" className="form-control form-control-sm ml-2" placeholder="Your CNIC No." />
                    </div>
                    <div className="d-flex justify-content-between">
                        <small className="d-grid">
                            <span><i class="las la-thumbtack"></i> You can enter your name and CNIC number to find your test status.</span>
                        </small>
                        <button className="btn general-btns px-5 btn-sm">find</button>
                    </div>
                </form>
            </div>

        );

    };

};

export default ConsumerStatus;