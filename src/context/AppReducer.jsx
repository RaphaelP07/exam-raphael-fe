export default (state, action) => {
  switch (action.type) {
    case "USERS":
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
