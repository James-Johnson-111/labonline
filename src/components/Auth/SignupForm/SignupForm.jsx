import react, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './SignupForm.css';
import axios from '../../../axios-order';
import * as passwordHash from 'password-hash';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../../redux/actions';

class SignupForm extends Component {

    constructor( props )
    {
        super( props );
        this.state = {

            userInfo: {

                usrname: null,
                usremail: null,
                usrcnic: null,
                usrage: null,
                usrdateobirth: null,
                usraddress: null,
                usrphone: null,
                usrpass: null,
                cnfpass: null

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

    userSignup = ( event ) => {

        event.preventDefault();

        if(this.state.userInfo.usrpass == this.state.userInfo.cnfpass)
        {

            let hashed_password = passwordHash.generate(this.state.userInfo.usrpass);

            const setUserInfo = {

                user_name: this.state.userInfo.usrname,
                user_email: this.state.userInfo.usremail,
                user_cnic_number: this.state.userInfo.usrcnic,
                user_age: this.state.userInfo.usrage,
                user_date_of_birth: this.state.userInfo.usrdateobirth,
                user_address: this.state.userInfo.usraddress,
                user_phone_number: this.state.userInfo.usrphone,
                user_password: hashed_password

            }

            axios.post('/users.json', setUserInfo)
                .then(response => {

                    axios.get('/users.json')
                        .then(getresponse => {

                            for (let keys in getresponse.data) {

                                if ((this.state.userInfo.usrcnic == getresponse.data[keys].user_cnic_number) && passwordHash.verify(this.state.userInfo.usrpass, getresponse.data[keys].user_password)) {

                                    this.props.UserDetails( 
                                        keys,
                                        getresponse.data[keys].user_name,
                                        getresponse.data[keys].user_email,
                                        getresponse.data[keys].user_cnic_number,
                                        getresponse.data[keys].user_age,
                                        getresponse.data[keys].user_date_of_birth,
                                        getresponse.data[keys].user_phone_number,
                                        getresponse.data[keys].user_address
                                    );

                                    sessionStorage.setItem("usrkey", keys);

                                    this.props.history.replace('/login');

                                }

                            }

                        })
                        .catch(errors => {

                            console.log(errors);

                        });

                })
                .catch(error => {

                    console.log(error);

                })

        }else {

            toast.dark( 'Password does not match', {

                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,

            } );

        }

    }

    render()
    {

        return(
            <div className="SignupForm w-100 vh-100">
                <ToastContainer />
                <div className="SignupForm-inner d-flex justify-content-center">
                    <div className="p-4 bg-white parent-div">
                        <form onSubmit={this.userSignup}>
                            <h2 className="text-left mb-4">Signup</h2>
                            <input onChange={this.onChangeHandler} name="usrname" type="text" className="form-control form-control-sm rounded-0 mb-3" placeholder="User Name" />
                            <input onChange={this.onChangeHandler} name="usremail" type="email" className="form-control form-control-sm rounded-0 mb-3" placeholder="Your Email" />
                            <input onChange={this.onChangeHandler} name="usrcnic" type="text" className="form-control form-control-sm rounded-0 mb-3" placeholder="Your CNIC" />
                            <input onChange={this.onChangeHandler} name="usrage" type="number" className="form-control form-control-sm rounded-0 mb-3" placeholder="Your Age" />
                            <input onChange={this.onChangeHandler} name="usrdateobirth" type="date" className="form-control form-control-sm rounded-0 mb-3" />
                            <input onChange={this.onChangeHandler} name="usraddress" type="text" className="form-control form-control-sm rounded-0 mb-3" placeholder="Your Address" />
                            <input onChange={this.onChangeHandler} name="usrphone" type="text" className="form-control form-control-sm rounded-0 mb-3" placeholder="Your Phone No." />
                            <input onChange={this.onChangeHandler} name="usrpass" type="password" className="form-control form-control-sm rounded-0 mb-3" placeholder="Your Password" />
                            <input onChange={this.onChangeHandler} name="cnfpass" type="password" className="form-control form-control-sm rounded-0 mb-4" placeholder="Confirm Password" />
                            <button className="general-btns btn px-3" type="submit">Signup</button>
                        </form>
                        <div className="pt-2">
                            <small>
                                Don't have an account? <Link to="/login">Login</Link>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        );

    };

};

const mapDispatchToProps = dispatch => {
    return {
            UserLogin: () => dispatch({type: actionTypes.USER_LOGIN}),
            UserLogout: () => dispatch({type: actionTypes.USER_LOGOUT}),
            UserDetails: (usrid, usrname, usremail, usrcnic, usrage, usrdbirth , usrphone , usraddress) => dispatch(
                {
                    type: actionTypes.USER_DETAILS, 
                    usrid: usrid, 
                    usrname: usrname, 
                    usremail: usremail,
                    usrcnic: usrcnic,
                    usrage: usrage,
                    usrdbirth: usrdbirth,
                    usrphone: usrphone,
                    usraddress: usraddress
                }
        )
    };
};

export default connect( null, mapDispatchToProps )( SignupForm );