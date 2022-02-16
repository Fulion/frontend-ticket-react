import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";

import { persistedRootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

//* production da bu kisim duzenlenecek.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(persistedRootReducer, middleware);

const persistor = persistStore(store);

export { store, persistor };

sagaMiddleware.run(rootSaga);
