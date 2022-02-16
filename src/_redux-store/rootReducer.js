import { combineReducers } from "redux";
import { createBrowserHistory } from "history";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// import all reducer
import { appReducer, ticketReducer } from "./reducers";

const persistConfigs = {
  key: "sw-ticket-store",
  storage,
  blacklist: [],
};

// now we generate an application history object.
export const routeHistory = createBrowserHistory();

// then we create the app reducer, by combining all other reducers
const rootReducer = combineReducers({
  root: appReducer,
  ticket: ticketReducer,
});

// finally we export the persisted reducer
export const persistedRootReducer = persistReducer(persistConfigs, rootReducer);
