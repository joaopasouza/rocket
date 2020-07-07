const INITIAL_STATE = {
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TODO_LIST':
      return { ...state, data: action.payload };
    case 'TODO_ADD':
      return { ...state };
    case 'TODO_REMOVE':
      return { ...state };
    case 'TODO_UPDATE':
      return { ...state };

    default:
      return state;
  }
};
