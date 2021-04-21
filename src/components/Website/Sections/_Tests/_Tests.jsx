import react, { Component } from 'react';
import { Link } from 'react-router-dom';

import './_Tests.css';
import Cards from './Cards/Cards';

class _Tests extends Component {

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

            <div className="_Tests">
                <h1 className="text-center">Tests We Provide</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 py-5 px-3">
                            <Link to="/bloodtest">
                                <Cards
                                    Image="https://image.freepik.com/free-photo/surgeon-holding-blood-test_53876-94763.jpg"
                                    title="Blood Test"
                                />
                            </Link>
                        </div>
                        <div className="col-lg-4 py-5 px-3">
                            <Link to="/urine-analysis">
                                <Cards
                                    Image="https://image.freepik.com/free-photo/detection-drugs-urine_151689-332.jpg"
                                    title="Urine Analysis"
                                 />
                            </Link>
                        </div>
                        <div className="col-lg-4 py-5 px-3">
                            <Link to="/xrays-altrasound">
                                <Cards
                                    Image="https://image.freepik.com/free-photo/doctor-examine-x-ray-film-white-background_1150-6251.jpg"
                                    title="X-Rays & Altrasound"
                                 />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        );

    };

};

export default _Tests;