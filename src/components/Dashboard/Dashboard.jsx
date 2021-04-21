import react, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionTypes from '../../redux/actions';

import './Dashboard.css';

class Dashboard extends Component {

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

    render()
    {

        return(
            <div className="Dashboard">
                <div className="d-flex justify-content-between px-3">
                    <div></div>
                    <div className="">
                        <button className="btn px-3">create new user { this.props.userName }</button>
                    </div>
                </div>
                <div className="container-fluid pt-4">
                    <h1 className="text-center mb-5">Welcome To Laboratory</h1>
                    <div className="row">

                        <div className="col-lg-3 col-md-3 col-sm-3">1</div>

                        <div className="col-lg-6 col-md-6 col-sm-6 text-center">
                            <div className="row search-panel border-bottom pb-4 mb-4">
                                <div className="col-8 text-left">
                                    <small className="ml-1">Search By Keywords</small>
                                    <input type="text" className="form-control form-control-sm" placeholder="Search CNIC No. (only)" />
                                </div>
                                <div className="col-4 text-left">
                                    <small className="ml-1">Search By Date</small>
                                    <input type="date" className="form-control form-control-sm" placeholder="" />
                                </div>
                            </div>
                            <div className="records-container px-3">
                                <div className="row records">
                                    <div className="col-1 d-grid">1</div>
                                    <div className="col-11 border text-left py-2">
                                        <div className="d-flex justify-content-between">
                                            <div className="d-grid font-weight-bold">
                                                <div>
                                                    Usman Badar
                                            </div>
                                            </div>
                                            <div className="d-grid">
                                                <div>
                                                    Date: 09-24-2002
                                            </div>
                                            </div>
                                            <div className="d-grid">
                                                <div>
                                                    CNIC: 4210161716531
                                            </div>
                                            </div>
                                            <div className="d-grid">
                                                <a href="##">
                                                    view details
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row records">
                                    <div className="col-1 d-grid">2</div>
                                    <div className="col-11 border text-left py-2">
                                        <div className="d-flex justify-content-between">
                                            <div className="d-grid font-weight-bold">
                                                <div>
                                                    Usman Badar
                                            </div>
                                            </div>
                                            <div className="d-grid">
                                                <div>
                                                    Date: 09-24-2002
                                            </div>
                                            </div>
                                            <div className="d-grid">
                                                <div>
                                                    CNIC: 4210161716531
                                            </div>
                                            </div>
                                            <div className="d-grid">
                                                <a href="##">
                                                    view details
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row records">
                                    <div className="col-1 d-grid">3</div>
                                    <div className="col-11 border text-left py-2">
                                        <div className="d-flex justify-content-between">
                                            <div className="d-grid font-weight-bold">
                                                <div>
                                                    Usman Badar
                                            </div>
                                            </div>
                                            <div className="d-grid">
                                                <div>
                                                    Date: 09-24-2002
                                            </div>
                                            </div>
                                            <div className="d-grid">
                                                <div>
                                                    CNIC: 4210161716531
                                            </div>
                                            </div>
                                            <div className="d-grid">
                                                <a href="##">
                                                    view details
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-3 col-sm-3">3</div>

                    </div>
                </div>
            </div>
        );

    };

};

const mapStateToProps = state => {
    return {
        auth: state.authenticate,
        userID: state.userID,
        userName: state.userName,
        userEmail: state.userEmail,
        userCNIC: state.userCNIC,
        userAge: state.userAge,
        userDBirth: state.userDBirth,
        userPhone: state.userPhone,
        userAddress: state.userAddress
    }
  }

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

export default connect( mapStateToProps, mapDispatchToProps )( Dashboard );