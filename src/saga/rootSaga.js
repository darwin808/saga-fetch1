import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { ADD_PEOPLE, addpeople } from "../Actions/Actions";

export const fetchData = async () => {
  try {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data.results[0].email;
  } catch (e) {
    console.log(e);
  }
};

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
  try {
    // do api call
    const data = yield call(fetchData);
    yield put(addpeople(data));
  } catch (e) {
    console.log(e);
  }
}

/*
  Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield takeLatest(ADD_PEOPLE, getApiData);
}
