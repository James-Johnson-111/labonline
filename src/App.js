import react, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import LoginForm from './components/Auth/LoginForm/LoginForm';
import SignupForm from './components/Auth/SignupForm/SignupForm';
import Dashboard from './components/Dashboard/Dashboard';
import { connect } from 'react-redux';
import * as actionTypes from './redux/actions';
import axios from './axios-order';
import Website from './components/Website/Website';
import Errors from './components/Website/404/404';

class App extends Component {

  componentDidMount()
  {

    if( sessionStorage.getItem('usrkey') )
    {

      axios.get('/users.json')
        .then(getresponse => {

          for (let keys in getresponse.data) {

            if ( ( sessionStorage.getItem('usrkey') == keys ) ) {

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

            }

          }

        })
        .catch(errors => {

          console.log(errors);

        });

    }

  }
  
  render()
  {

    return (
      <>
        <Navbar />

        {/* {

          this.props.auth ?

          <Route exact path='/' component={Dashboard} />

          :

          <Redirect to="/login" />

        } */}

        <Switch>
          <Route exact path='/'>
            <Website />
          </Route>
          <Route path='/bloodtest'>
            <Website />
          </Route>
          <Route path='/urine-analysis'>
            <Website />
          </Route>
          <Route path='/xrays-altrasound'>
            <Website />
          </Route>





          <Route path='/dashboard'>
            <Dashboard />
          </Route>

          <Route path='/login' component={LoginForm} />

          <Route path='/signup' component={SignupForm} />

          <Route path='/404'>
            <Errors />
          </Route>

          <Redirect to='/404' />
        </Switch>
        
      </>
    );

  }
}

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

export default connect( mapStateToProps, mapDispatchToProps )( App );
