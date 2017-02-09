export const submitLoginForm = (email, password) => {
  return {
    type: 'INITIATE_LOGIN',
    email,
    password
  }
}

export const submitLoginFormAsync = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(
        submitLoginForm(email, password)
      );
    }, 2000);
  }
}

export const resetLoginForm = () => {
  return {
    type: 'RESET_LOGIN_FORM',
    email: '',
    password: ''
  }
}

export const updateText = (email, password) => {
  return {
    type: 'TEXT_CHANGED',
    email,
    password
  }
}
