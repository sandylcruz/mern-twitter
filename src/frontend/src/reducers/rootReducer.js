import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import sessionReducer from "./sessionReducer";

const RootReducer = combineReducers({
  sessionReducer,
  errorsReducer,
});

export default RootReducer;
