import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/rootReducer";
import reduxLogger from "redux-logger";

const middleware = [reduxLogger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
