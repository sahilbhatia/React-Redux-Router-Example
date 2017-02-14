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

export const submitLoginForm = (email, password) => {
  return {
    type: 'INITIATE_LOGIN',
    email,
    password,
    loading: false
  }
}

export const submitLoginFormAsync = (email, password) => {
  return (dispatch) => {
    dispatch(startLoader());

    setTimeout(() => {
      dispatch(
        submitLoginForm(email, password)
      );
    }, 5000);
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
