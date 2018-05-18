const initialState = { _id: null, token: null };

export default (state = initialState, action) => {
  const { _id, token } = action;
  
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        _id,
        token
      };
  
    default:
      return state;
  }
}