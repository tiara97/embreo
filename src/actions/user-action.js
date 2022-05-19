import Axios from "axios";

const url = `http://localhost:2000/api/users`;

function userLogin(body) {
  return async (dispatch) => {
    try {
      const res = await Axios.post(`${url}/login`, body);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("id", res.data.id);
      localStorage.setItem("type", res.data.type);

      dispatch({
        type: "LOGIN",
        payload: res.data,
      });
    } catch (e) {
      console.error(e.response ? e.response.data : e);
      dispatch({ type: "LOGIN_ERROR", payload: e.response.data });
    }
  };
}

function userKeepLogin() {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const resUser = await Axios.post(URL + "/keepLogin", { token });
      dispatch({ type: "LOGIN", payload: resUser.data });
    } catch (e) {
      console.error(e.response ? e.response.data : e);
      localStorage.clear();
      dispatch({ type: "LOGOUT" });
    }
  };
}

function userLogout() {
  return async (dispatch) => {
    try {
      await localStorage.clear();
      dispatch({ type: "LOGOUT" });
    } catch (e) {
      console.error(e.response ? e.response.data : e);
    }
  };
}

export const UserAction = { userLogin, userKeepLogin, userLogout };
