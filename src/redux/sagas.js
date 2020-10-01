import { takeEvery, call, put } from "redux-saga/effects";
import { isFetching, requestDataError, requestDataSuccess } from "./reducer";

export function* watchFetching() {
  yield takeEvery("START_FETCHING", fetchAsync);
}

function* fetchAsync() {
  try {
    yield put(isFetching(true));
    const data = yield call(() => {
      return fetch(
        "https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY"
      ).then((res) => res.json());
    });
    yield put(isFetching(false));
    yield put(requestDataSuccess(data));
  } catch (error) {
    yield put(requestDataError());
    yield put(isFetching(false));
  }
}
