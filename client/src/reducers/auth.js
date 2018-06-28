import { REGISTER, LOGIN, LOGOUT, AUTH_ERR } from "../actions/auth";
const initialState = { _id: null, token: null, error: null };

export default (state = initialState, action) => {
  const { _id, token, error } = action;

  switch (action.type) {
    case AUTH_ERR:
      return {
        ...state,
        error
      };

    case REGISTER:
      return {
        ...state,
        _id,
        token,
        error: null
      };

    case LOGIN:
      return {
        ...state,
        _id,
        token,
        error: null
      };

    case LOGOUT:
      console.log("LOGOUT");

      return {
        ...state,
        _id: null,
        token: null,
        error: null
      };

    default:
      return state;
  }
};
