import {
  CAMERA_DETAILS_REQUEST,
  CAMERA_DETAILS_SUCCESS,
  CAMERA_DETAILS_FAILED,
} from "../constants/CameraConstants";

import axios from "axios";

export const getCameraDetails = (page) => async (dispatch) => {
  const limit = 2;
  try {
    dispatch({ type: CAMERA_DETAILS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:3500/CameraData?_limit=${limit}&_page=${page}`
    );
    dispatch({
      type: CAMERA_DETAILS_SUCCESS,
      payload: data,
      count: data?.length,
      currentPage: page,
      totalPages: Math.ceil(data?.length / limit),
    });
  } catch (error) {
    dispatch({ type: CAMERA_DETAILS_FAILED });
  }
};
