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
