const initialState = {
  email: '',
  password: '',
  allowSubmission: false,
  emailValidationState: null,
  passwordValidationState: null,
  loggedIn: false,
  loading: false,
  errorMsg: null
};

const validEmail = (email) => {
  let trimmedEmail = email.trim();

  return ( trimmedEmail !== '' && /\w+@\w+\.\w+/m.test(email) )
}

const validPassword = (password) => {
  let trimmedPassword = password.trim();

  return ( trimmedPassword !== '' && trimmedPassword.length >= 8 )
}

const validInput = (action, state) => {
  if (action.email == null) {
    return ( validEmail(state.email) && validPassword(action.password) );
  } else if (action.password == null) {
    return ( validEmail(action.email) && validPassword(state.password) );
  } else {
    return ( validEmail(action.email) && validPassword(action.password) );
  }
}

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_LOGIN_FORM':
      return initialState;
    case 'START_LOADER':
    case 'STOP_LOADER':
      return {
        ...state,
        loading: action.loading
      }
    case 'LOGIN_FAILED':
    case 'LOGIN_SUCCESSFULL':
      return {
        ...state,
        email: action.email,
        password: action.password,
        loading: action.loading,
        loggedIn: action.loggedIn,
        errorMsg: action.errorMsg
      }
    case 'TEXT_CHANGED':
      if (action.email != null) {
        return {
          ...state,
          email: action.email,
          emailValidationState: validEmail(action.email) ? 'success' : 'error',
          allowSubmission: validInput(action, state)
        }
      } else if (action.password != null) {
        return {
          ...state,
          password: action.password,
          passwordValidationState: validPassword(action.password) ? 'success' : 'error',
          allowSubmission: validInput(action, state)
        }
      } else {
        return {
          ...state,
          email: action.email,
          password: action.password,
          allowSubmission: validInput(action), state,
          emailValidationState: validEmail(action.email) ? 'success' : 'error',
          passwordValidationState: validPassword(action.password) ? 'success' : 'error'
        }
      }
    default:
      return state
  }
}

export default sessionReducer;
