import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

function reducer(state = [], action) {
  return state;
}
export default () => {
  const store = createStore(reducer, applyMiddleware(logger));
  return store;
};
