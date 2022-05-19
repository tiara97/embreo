import { combineReducers } from "redux";

import { eventReducer } from "./event-reducer";
import { userReducer } from "./user-reducer";

export const rootReducers = combineReducers({
  eventReducer,
  userReducer,
});
