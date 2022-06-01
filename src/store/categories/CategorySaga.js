import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';

import { fetchCategoriesSuccess, fetchCategoriesFailed } from './CategoryAction';

import { CATEGORIES_ACTION_TYPES } from './CategoryTypes';

export function* fetchCategoriesAsync() {
	try {
		//call() is required to run function and pass to yield
		const categoriesArray = yield call(getCategoriesAndDocuments, 'categories');

		//put() is generator-vers of dispatch()
		yield put(fetchCategoriesSuccess(categoriesArray))
	} catch (error) {
		yield put(fetchCategoriesFailed(error));
	}
}

export function* onFetchCategories() {
	//receives latest action
	//1st arg - action type to respond to
	//2nd arg - what we want to happen
	yield takeLatest(
		CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
		fetchCategoriesAsync
		)
}

//Holds all sagas related to the category
export function* categoriesSaga() {
	//run everything inside and only complete when all is done
	//takes array of different functions/generators, etc.
	yield all([call(onFetchCategories)])
}