const bunnies = (state=[], action) => {
  switch (action.type) {
    case 'LOAD_BUNNIES_SUCCESS':
      return action.bunnies;
    default:
      return state;
  }
};

export default bunnies;