const initialState = {
  email: '',
  password: '',
  loggedIn: false,
  errorMsg: null
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_LOGIN_FORM':
      return initialState;
    case 'INITIATE_LOGIN':
      return Object.assign(
        {},
        ...initialState,
        state,
        { loggedIn: true }
      )
    case 'TEXT_CHANGED':
      return Object.assign(
        {},
        ...initialState,
        state,
        {
          email: action.email,
          password: action.password
        }
      )
    default:
      return Object.assign(
        {},
        ...initialState,
        state
      )
  }
}

export default sessionReducer;
