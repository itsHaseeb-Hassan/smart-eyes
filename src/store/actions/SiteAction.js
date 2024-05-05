import {
  Site_DETAILS_REQUEST,
  Site_DETAILS_SUCCESS,
  Site_DETAILS_FAILED,
} from "../constants/SiteConstants";

import axios from "axios";

export const getSiteDetails = (page) => async (dispatch) => {
  const limit = 2;
  try {
    dispatch({ type: Site_DETAILS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:3500/SitesData?_limit=${limit}&_page=${page}`
    );
    dispatch({
      type: Site_DETAILS_SUCCESS,
      payload: data,
      count: data?.length,
      currentPage: page,
      totalPages: Math.ceil(data?.length / limit),
    });
  } catch (error) {
    dispatch({ type: Site_DETAILS_FAILED });
  }
};
