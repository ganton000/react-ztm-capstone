import createAction, {
	Action,
	ActionWithPayload,
	withMatcher
} from '../../utils/reducer/reducer.utils';

import {
	CATEGORIES_ACTION_TYPES,
	Category
} from './CategoryTypes';

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>;

export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>;

//Above are the only three action types the reducer can accept
//So will create a union
//export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailed;

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => {
	return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
})

export const fetchCategoriesSuccess = withMatcher((categoriesArray: Category[]): FetchCategoriesSuccess => {
	return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);
})

export const fetchCategoriesFailed = withMatcher((error: Error): FetchCategoriesFailed => {
	return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
})




//Thunk actions, should be async
//Function that returns a function that takes dispatch as input
//export const fetchCategoriesAsync = () => async (dispatch) => {
//	//dispatch fact we're fetching/loading
//	dispatch(fetchCategoriesStart());

//	try {
//		const categoriesArray = await getCategoriesAndDocuments('categories');

//		dispatch(fetchCategoriesSuccess(categoriesArray));
//	} catch (error) {
//		dispatch(fetchCategoriesFailed(error));
//	}
//}

//Replaced with Saga