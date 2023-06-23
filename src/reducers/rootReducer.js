import { combineReducers } from "redux";
import settingSlice from "./settingSlice";
import contactSlice from "./contactSlice";

const rootReducer = combineReducers({
  setting: settingSlice,
  contact: contactSlice
});

export default rootReducer;