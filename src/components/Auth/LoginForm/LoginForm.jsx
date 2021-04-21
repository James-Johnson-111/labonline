import react, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './LoginForm.css';
import * as passwordHash from 'password-hash';
import axios from '../../../axios-order';

class LoginForm extends Component {

    constructor( props )
    {
        super( props );
        this.state = {

            userInfo: {

                usrcnic: null,
                usrpass: null

            }

        }
    }

    onChangeHandler = ( event ) => {

        const  { name, value } = event.target;

        const setInfo = {

            ...this.state.userInfo,
            [name]: value

        }

        this.setState( { userInfo: setInfo } );

    }

    userLogin = ( event ) => {

        event.preventDefault();

        axios.get( '/users.json' )
             .then( response => {

                for( let key in response.data )
                {
                    console.log(response.data[key].user_cnic_number);
                    if( (this.state.userInfo.usrcnic == response.data[key].user_cnic_number) && passwordHash.verify(this.state.userInfo.usrpass, response.data[key].user_password) )
                    {

                        toast.dark( 'Password matched', {

                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
            
                        } );
                        
                        this.props.history.replace('/dashboard');
                        // <Redirect to='/dashboard' />
                        // console.log(this.props.location.pathname);
                        // window.location.pathname = '/dashboard';
                        // console.log();

                    }

                }

             } )
             .catch( error => {

                console.log(error);

             } );

    }

    render()
    {

        return(
            <div className="LoginForm w-100 vh-100">
                <div className="LoginForm-inner d-flex justify-content-center">
                    <div className="p-4 bg-white parent-div">
                        <h2 className="text-left mb-4">Login</h2>
                        <form onSubmit={this.userLogin}>
                            <input onChange={this.onChangeHandler} type="text" name="usrcnic" className="form-control form-control-sm rounded-0 mb-3" placeholder="Your CNIC No" />
                            <input onChange={this.onChangeHandler} type="password" name="usrpass" className="form-control form-control-sm rounded-0 mb-4" placeholder="Your Password" />
                            <button className="general-btns btn px-3">Login</button>
                        </form>
                        <div className="pt-2">
                            <small>
                                Don't have an account? <Link to="/signup">Signup</Link>
                            </small>
                        </div>
                    </div>
                <ToastContainer />
                </div>
            </div>
        );

    };

};

export default LoginForm;