import { fork, all } from 'redux-saga/effects';
import { watchIncrementAsync, watchDecrementAsync } from './counter';
import { watchHandleRequestPost } from './post';

export default function* rootSaga() {
  yield all([
    fork(watchIncrementAsync),
    fork(watchDecrementAsync),
    fork(watchHandleRequestPost)
  ]);
}
