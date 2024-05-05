import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userDetailsReducer } from "./reducers/userReducers";
import { urlDetailsReducer } from "./reducers/urlReducers";
import { CameraReducers } from "./reducers/CameraReducers";
import { SiteReducers } from "./reducers/SiteReducers";
import { SubUsersReducers } from "./reducers/subuserReducer";
import { LoginReducers } from "./reducers/LoginReducers";

const reducer = combineReducers({
  userDetails: userDetailsReducer,
  urlDetails: urlDetailsReducer,
  CameraDetails: CameraReducers,
  SiteDetails: SiteReducers,
  SubUsersDetails: SubUsersReducers,
  LoginDetails: LoginReducers,
});

const initialState = {};

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools({
    trace: true, // Set trace option to true
  })(applyMiddleware(thunk))
);
