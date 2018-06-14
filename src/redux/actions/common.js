import { getCommon } from '../../lib/api';

export const REQUEST_COMMON = 'REQUEST_COMMON';
export const SUCCESS_COMMON = 'SUCCESS_COMMON';
export const FAILURE_COMMON = 'FAILURE_COMMON';

export const requestCommon = mid => async dispatch => {
  try {
    dispatch({ type: REQUEST_COMMON });
    const response = await getCommon(mid);
    dispatch({
      type: SUCCESS_COMMON,
      payload: {
        pending: false,
        error: false,
        data: response.data
      }
    });
  } catch (error) {
    await dispatch({ type: FAILURE_COMMON });
  }
};
