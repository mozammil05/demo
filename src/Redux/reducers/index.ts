
import { combineReducers } from "redux";


const appReducer = combineReducers({

});

const rootReducer = (state: any, action: any) => {
  if (action.type === "LOGOUT_USERS_PERSIST") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
