const hobbies = (state=[], action) => {
  switch (action.type) {
    case 'LOAD_HOBBIES_SUCCESS':
      return action.hobbies;
    default:
      return state;
  }
};

export default hobbies;