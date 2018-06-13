// import { createAction } from 'redux-actions';
import { getPost } from '../../lib/api';

export const REQUEST_POST = 'REQUEST_POST';
export const SUCCESS_POST = 'SUCCESS_POST';
export const FAILURE_POST = 'FAILURE_POST';

export const requestPost = id => async dispatch => {
  try {
    dispatch({ type: REQUEST_POST });
    const response = await getPost(id);
    dispatch({
      type: SUCCESS_POST,
      payload: {
        pending: false,
        error: false,
        data: response.data
      }
    });
  } catch (error) {
    await dispatch({ type: FAILURE_POST });
  }
};

// export const requestPost = createAction(REQUEST_POST);
// export const successPost = createAction(SUCCESS_POST);
// export const failurePost = createAction(FAILURE_POST);
