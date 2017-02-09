export const loadState = () => {
  try {
    const serializableState = localStorage.getItem('state');

    if (serializableState !== null) {
      return JSON.parse(serializableState);
    }
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializableState = JSON.stringify(state);

    localStorage.setItem('state', serializableState);
  } catch (err) {
    // Ignore whitespace errors
  }
};
