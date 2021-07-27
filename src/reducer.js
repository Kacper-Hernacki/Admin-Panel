export const initialState = {
  user: null,
  sidebar: false,
};

export const actionTypes = {
  SET_USER: 'SET_USER',
  SET_SIDEBAR: 'SET_SIDEBAR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_SIDEBAR:
      return {
        ...state,
        sidebar: action.sidebar,
      };
    default:
      return state;
  }
};

export default reducer;
