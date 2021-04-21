import react, { Component } from 'react';
import BackDrop from './BackDrop/BackDrop';

import './Modal.css';

class Modal extends Component {

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
                <BackDrop show={this.props.show} clicked={this.props.hide} />
                <div className="Modal" style={{ 'transform': this.props.show ? 'translateY(0)' : 'translateY(-100vh)' }}>
                    <div className="w-100 h-100" style={ { 'border' : '1px solid #222222' } }>
                        {this.props.children}
                    </div>
                </div>
            </>

        );

    };

};

export default Modal;