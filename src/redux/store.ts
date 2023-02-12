import {
    applyMiddleware,
    compose,
    legacy_createStore as createStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { rootReducer } from "./reducer";

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhacers = composeAlt(applyMiddleware(thunk));
const store = createStore(rootReducer, composedEnhacers);

export default store;
export type RootState = ReturnType<typeof store.getState>
