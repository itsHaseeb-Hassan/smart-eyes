import {
  SUBUSER_DETAILS_REQUEST,
  SUBUSER_DETAILS_SUCCESS,
  SUBUSER_DETAILS_FAILED,
} from "../constants/subuserConstant";

import axios from "axios";

export const getSubuserDetails = (page) => async (dispatch) => {
  try {
    const limit = 10;

    dispatch({ type: SUBUSER_DETAILS_REQUEST });

    const response = await axios.get(
      `http://localhost:3500/Subuser?_limit=${limit}&_page=${page}`
    );

    const { data, headers } = response;
    const totalCount = parseInt(headers['x-total-count'], 10);

    dispatch({
      type: SUBUSER_DETAILS_SUCCESS,
      payload: data,
      count: data.length,
      currentPage: page,
      totalPages: Math.ceil(totalCount / limit),
    });
  } catch (error) {
    dispatch({ type: SUBUSER_DETAILS_FAILED, payload: error.message });
  }
};
