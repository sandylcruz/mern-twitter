import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import sessionReducer from "./sessionReducer";

const RootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
});

export default RootReducer;
