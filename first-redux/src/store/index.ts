import { createStore, compose } from "redux";
import { rootReducer } from "./reducers/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/** Store is the data source for the whole application.
 * @external https://redux.js.org/basics/store
 */

export const Store = createStore(rootReducer, composeEnhancers());

const { dispatch } = Store;

export type Dispatch = typeof dispatch;