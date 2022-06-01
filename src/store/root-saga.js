import { all, call } from 'redux-saga/effects';

import { categoriesSaga } from './categories/CategorySaga';
import { userSagas } from './user/UserSaga';

//this is an ES6 generator function
export function* rootSaga() {
	yield all([call(categoriesSaga), call(userSagas)]);
}