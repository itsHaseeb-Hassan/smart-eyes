import {
  LOGIN_DETAILS_REQUEST,
  LOGIN_DETAILS_SUCCESS,
  LOGIN_DETAILS_FAILED,
} from "../constants/LoginConstants";

export const LoginReducers = (state = [], action) => {
  switch (action.type) {
    case LOGIN_DETAILS_REQUEST:
      return { ...state, loading: true };
    case LOGIN_DETAILS_SUCCESS:
      return { loading: false, login: action.login };
    case LOGIN_DETAILS_FAILED:
      return { loading: false, error: action.login };
    default:
      return state;
  }
};
