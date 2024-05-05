import {
  Site_DETAILS_REQUEST,
  Site_DETAILS_SUCCESS,
  Site_DETAILS_FAILED,
} from "../constants/SiteConstants";

export const SiteReducers = (state = [], action) => {
  switch (action.type) {
    case Site_DETAILS_REQUEST:
      return { ...state, loading: true };
    case Site_DETAILS_SUCCESS:
      return {
        loading: false,
        Site: action.payload,
        count: action.count,
        currentPage: action.currentPage,
        totalPages: action.totalPages,
      };
    case Site_DETAILS_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
