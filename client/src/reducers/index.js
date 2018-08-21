import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import transferReducer from "./transferReducer";

export default combineReducers({
  auth: authReducer,
  transfer: transferReducer,
  errors: errorReducer
});
