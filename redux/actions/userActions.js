import axios from "axios";

//api
import usersApi from "../../api/users";

import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USER,
} from "./userTypes";

const loginStart = () => ({ type: LOGIN_START });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, user });
const loginFail = (err) => ({ type: LOGIN_FAIL, err });

export const login = (user, history) => async (dispatch) => {
  dispatch(loginStart());
  const res = await usersApi.login(user);
  console.log("res", res);
  if (res.user && res.token) {
    const CivilizeHubToken = `Bearer ${res.token}`;
    localStorage.setItem("CivilizeHubToken", CivilizeHubToken);
    axios.defaults.headers.common["Authorization"] = CivilizeHubToken;
    dispatch(loginSuccess(res.user));
    history.push("/");
  } else if (res.err) {
    dispatch(loginFail(res.err));
  }
};

export const logOut = (history) => (dispatch) => {
  localStorage.removeItem("CivilizeHubToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
  window.location.href = "/";
};