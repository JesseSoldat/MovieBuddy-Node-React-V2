import axios from "axios";

import errMessage from "./utils/errMessage";

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const AUTH_ERR = "AUTH_ERR";

export const register = (_id, token) => ({
  type: REGISTER,
  _id,
  token
});

export const startRegister = (username, email, password) => async dispatch => {
  const user = { username, email, password };
  try {
    const res = await axios.post("auth/register", user);
    const { _id, tokens } = res.data;
    const { token } = tokens[tokens.length - 1];

    localStorage.setItem("user", JSON.stringify({ _id, token }));
    dispatch(register(_id, token));
  } catch (err) {
    dispatch({ type: AUTH_ERR, error: errMessage("register", "user") });
  }
};

export const login = (_id, token) => ({
  type: LOGIN,
  _id,
  token
});

export const logout = () => ({
  type: LOGOUT
});

export const startLogout = () => async dispatch => {
  try {
    await axios.delete("/auth/logout");
    await localStorage.removeItem("user");
    dispatch(logout());
  } catch (err) {
    console.log(err);

    dispatch({ type: AUTH_ERR, error: errMessage("logout", "user") });
  }
};
