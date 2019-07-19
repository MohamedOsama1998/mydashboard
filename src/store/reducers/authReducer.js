const initState = {
  authErr: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERR":
      return {
        ...state,
        authErr: "Email or password is incorrect.."
      };
    case "LOGIN_SUC":
      return {
        ...state,
        authErr: null
      };
    case "SIGN_OUT":
      return state;
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        authErr: null
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        authErr: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
