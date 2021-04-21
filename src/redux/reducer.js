import * as actionTypes from './actions';

const initialState = {

    auenticate: false,
    userID: null,
    userName: null,
    userEmail: null,
    userCNIC: null,
    userAge: null,
    userDBirth: null,
    userPhone: null,
    userAddress: null

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN:
            return {
                ...state,
                auth : true
            }
        
        case actionTypes.USER_LOGOUT:
            return {
                    ...state,
                    auth : false
                }
        
        case actionTypes.USER_DETAILS:
            return {
                ...state,
                userID: action.usrid,
                userName: action.usrname,
                userEmail: action.usremail,
                userCNIC: action.usrcnic,
                userAge: action.usrage,
                userDBirth: action.usrdbirth,
                userPhone: action.usrphone,
                userAddress: action.usraddress,
                auth: true
            }
    
        default:
            return state;
    }
};

export default reducer;