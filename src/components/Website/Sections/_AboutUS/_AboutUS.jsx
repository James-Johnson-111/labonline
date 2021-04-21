import react, { Component } from 'react';

import './_AboutUS.css';
import AboutImg from '../../../../images/flat-biotechnology-illustration_23-2148888189.png';

class _AboutUS extends Component {

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

            <div className="_AboutUS">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-7 d-grid">
                            <div className="">
                                <h1 className="">
                                    About LabOnline
                                </h1>
                                <hr width="20%" className="hrLeftStyle" />
                                <hr width="15%" className="hrLeftStyle" />
                                <hr width="10%" className="hrLeftStyle" />
                                <small>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap into
                                    tronic typesetting, remaining essentially unchanged. It was popularised in
                                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                    and more recently with desktop publishing software like Aldus PageMaker including
                                    versions of Lorem Ipsum.
                                </small>
                            </div>
                        </div>
                        <div className="col-5">
                            <img src={AboutImg} alt="About US Image" width="100%" />
                        </div>
                    </div>
                </div>
            </div>

        );

    };

};

export default _AboutUS;