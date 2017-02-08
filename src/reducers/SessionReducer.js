const initialState = {
  email: '',
  password: '',
  allowSubmission: false,
  emailValidationState: null,
  passwordValidationState: null,
  loggedIn: false
};

const validEmail = (email) => {
  let trimmedEmail = email.trim();

  return ( trimmedEmail !== '' && /\w+@\w+\.\w+/m.test(email) )
}

const validPassword = (password) => {
  let trimmedPassword = password.trim();

  return ( trimmedPassword !== '' && trimmedPassword.length >= 8 )
}

const validInput = (action) => {
  return (validEmail(action.email) && validPassword(action.password))
}

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_LOGIN_FORM':
      return initialState;
    case 'INITIATE_LOGIN':
      return {
        ...state,
        loggedIn: true
      }
    case 'TEXT_CHANGED':
      return {
        ...state,
        email: action.email,
        password: action.password,
        allowSubmission: validInput(action),
        emailValidationState: validEmail(action.email) ? 'success' : 'error',
        passwordValidationState: validPassword(action.password) ? 'success' : 'error'
      }
    default:
      return state
  }
}

export default sessionReducer;
