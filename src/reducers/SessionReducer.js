const initialState = {
  loggedIn: false,
  errorMsg: null
};

function sessionReducer(state = initialState, action) {
  switch action.type {
    case 'RESET':
      return initialState;
    case 'LOGIN_SUCCEEDED':
      return Object.assign({}, ...state, { loggedIn: true })
    case 'LOGIN_FAILED':
      return Object.assign({}, ...state, { loggedIn: false, errorMsg: action.errorMsg })
    default:
      return state
  }
}

export default sessionReducer;
