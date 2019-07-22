const initState = {
  signInErr: null,
  signUpErr: null,
  buttonLoading: false
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "TOGGLE_LOADING":
      return {
        ...state,
        buttonLoading: true
      };
    case "LOGIN_ERR":
      return {
        ...state,
        buttonLoading: false,
        signInErr: action.err.message
      };
    case "LOGIN_SUC":
      return {
        ...state,
        buttonLoading: false,
        signInErr: null
      };
    case "SIGN_OUT":
      return state;
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        buttonLoading: false,
        signUpErr: null
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        buttonLoading: false,
        signUpErr: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
