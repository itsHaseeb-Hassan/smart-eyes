import {
  SUBUSER_DETAILS_REQUEST,
  SUBUSER_DETAILS_FAILED,
  SUBUSER_DETAILS_SUCCESS,
} from "../constants/subuserConstant";

const initialState = {
  loading: false,
  user: [],
  count: 0,
  currentPage: 1,
  totalPages: 0,
};

export const SubUsersReducers = (state = initialState, action) => {
  switch (action.type) {
    case SUBUSER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case SUBUSER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        count: action.count,
        currentPage: action.currentPage,
        totalPages: action.totalPages,
      };
    case SUBUSER_DETAILS_FAILED:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
