import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer as GameReducer } from "@/module/reducer";
import { gameSaga } from "@/module/saga";
import { fork } from "redux-saga/effects";

function* rootSaga() {
  yield fork(gameSaga);
}

const rootReducer = GameReducer;
const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();
export const store: Store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);
