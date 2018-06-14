import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory, createMemoryHistory } from 'history';
import rootReducer from './reducers';
// import createSagaMiddleware, { END } from 'redux-saga';
import { fromJS } from 'immutable';

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export default (url = '/') => {
  const history = isServer
    ? createMemoryHistory({
        initialEntries: [url]
      })
    : createBrowserHistory();

  const middleware = [thunk, routerMiddleware(history)];
  const composedEnhancers = compose(applyMiddleware(...middleware));

  const initialState = !isServer ? window.__PRELOADED_STATE__ : {};

  if (!isServer) {
    delete window.__PRELOADED_STATE__;
  }

  const store = createStore(
    connectRouter(history)(rootReducer),
    fromJS(initialState),
    composedEnhancers
  );

  // store.runSaga = sagaMiddleware.run;
  // store.close = () => store.dispatch(END);

  return {
    store,
    history
  };
};
