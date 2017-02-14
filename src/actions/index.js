export const startLoader = () => {
  return {
    type: 'START_LOADER',
    loading: true
  }
}

export const stopLoader = () => {
  return {
    type: 'STOP_LOADER',
    loading: false
  }
}

export const simulateSuccessfullLogin = () => {
  return {
    type: 'LOGIN_SUCCESSFULL',
    email: '',
    password: '',
    loading: false,
    loggedIn: true,
    errorMsg: null
  }
}

export const simulateFailedLogin = () => {
  return {
    type: 'LOGIN_FAILED',
    email: '',
    password: '',
    loading: false,
    loggedIn: false,
    errorMsg: 'Login failed due to invalid credentials!'
  }
}

export const submitLoginFormAsync = (email, password) => {
  return (dispatch) => {
    dispatch(startLoader());

    if (email === 'demouser@example.com' && password === 'password') {
      setTimeout(() => {
        dispatch(
          simulateSuccessfullLogin()
        );
      }, 3000);
    }
    else {
      setTimeout(() => {
        dispatch(
          simulateFailedLogin()
        );
      }, 3000);
    }
  }
}

export const resetLoginForm = () => {
  return {
    type: 'RESET_LOGIN_FORM',
    email: '',
    password: ''
  }
}

export const updateText = ({ email = null, password = null }) => {
  let payload = { type: 'TEXT_CHANGED' };

  if (email === null) {
    return { ...payload, password };
  } else if (password === null) {
    return { ...payload, email };
  } else {
    return { ...payload, email, password };
  }
}
