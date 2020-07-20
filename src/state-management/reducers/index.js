import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { routerReducer } from "react-router-redux";
import cartDetailsReducer from "../../services/CartDetails/reducer";
const createHistory = require("history").createBrowserHistory;
export const history = createHistory();

const containersReducer = {
  containers: combineReducers({
    cartDetailsReducer,
    // NOTE: put other app reducers here
  })
};

const createGlobalReducer = () =>
  combineReducers({
    ...containersReducer,
    router: connectRouter(history),
    route: routerReducer
  });

export default createGlobalReducer;
