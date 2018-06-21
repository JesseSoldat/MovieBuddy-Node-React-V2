import axios from "axios";

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";

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
    console.log("startRegister", err);
  }
};

export const login = (_id, token) => ({
  type: LOGIN,
  _id,
  token
});
