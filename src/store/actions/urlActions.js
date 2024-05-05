import {
  URL_DETAILS_FAILED,
  URL_DETAILS_REQUEST,
  URL_DETAILS_SUCCESS,
} from "../constants/urlConstants";

import axios from "axios";

export const getUrlDetails = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: URL_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:3500/vedioUrl`);

    dispatch({
      type: URL_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: URL_DETAILS_FAILED,
      // payload: //
    });
  }
};
