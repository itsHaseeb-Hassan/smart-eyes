import {
  CAMERA_DETAILS_REQUEST,
  CAMERA_DETAILS_SUCCESS,
  CAMERA_DETAILS_FAILED,
} from "../constants/CameraConstants";

export const CameraReducers = (state = [], action) => {
  switch (action.type) {
    case CAMERA_DETAILS_REQUEST:
      return { ...state, loading: true };
    case CAMERA_DETAILS_SUCCESS:
      return {
        loading: false,
        camera: action.payload,
        count: action.count,
        currentPage: action.currentPage,
        totalPages: action.totalPages,
      };
    case CAMERA_DETAILS_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
