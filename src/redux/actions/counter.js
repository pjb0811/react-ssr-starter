import { createAction } from 'redux-actions';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export const DECREMENT_ASYNC = 'DECREMENT_ASYNC';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
export const incrementAsync = () => async dispatch => {
  await setTimeout(() => {
    dispatch({ type: INCREMENT });
  }, 1000);
};

export const decrementAsync = () => async dispatch => {
  await setTimeout(() => {
    dispatch({ type: DECREMENT });
  }, 1000);
};

// export const incrementAsync = createAction(INCREMENT_ASYNC);
// export const decrementAsync = createAction(DECREMENT_ASYNC);
