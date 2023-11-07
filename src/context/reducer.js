// reducer.js
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "SET_LOGGED_IN":
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
