export const submitLoginForm = (email, password) => {
  return {
    type: 'INITIATE_LOGIN',
    email,
    password
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
