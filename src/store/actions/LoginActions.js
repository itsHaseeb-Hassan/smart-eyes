import axios from "axios";
import {
  LOGIN_DETAILS_REQUEST,
  LOGIN_DETAILS_SUCCESS,
  LOGIN_DETAILS_FAILED,
} from "../constants/LoginConstants";

export const getLoginDetails = (data) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_DETAILS_REQUEST });
    const response = await axios.post(
      "https://smart-eyez.onrender.com/token/",
      data,
      {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }
    );
    const { access, refresh } = response.data;

    window.localStorage.setItem("access_token", access);
    window.localStorage.setItem("refresh_token", refresh);

    dispatch({ type: LOGIN_DETAILS_SUCCESS, login: response?.data });
  } catch (error) {
    dispatch({
      type: LOGIN_DETAILS_FAILED,
    });
  }
};
