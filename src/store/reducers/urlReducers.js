import {
  URL_DETAILS_REQUEST,
  URL_DETAILS_FAILED,
  URL_DETAILS_SUCCESS,
} from "../constants/urlConstants";

export const urlDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case URL_DETAILS_REQUEST:
      return { ...state, loading: true };
    case URL_DETAILS_SUCCESS:
      return { loading: false, urls: action.payload };
    case URL_DETAILS_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
