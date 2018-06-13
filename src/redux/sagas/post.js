import { call, put, takeEvery } from 'redux-saga/effects';
import * as post from '../actions/post';
import API from '../api';

function* runRequestPost(action) {
  try {
    const { data } = yield call(API.getPost, action.payload);
    yield put({ type: post.SUCCESS_POST, payload: { data } });
  } catch (error) {
    yield put({ type: post.FAILURE_POST, payload: { error } });
  }
}

export function* watchHandleRequestPost() {
  yield takeEvery(post.REQUEST_POST, runRequestPost);
}
