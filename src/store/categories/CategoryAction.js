import createAction from '../../utils/reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './CategoryTypes';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase';

export const fetchCategoriesStart = () => {
	return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
}

export const fetchCategoriesSuccess = (categoriesArray) => {
	return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);
}


export const fetchCategoriesFailed = (error) => {
	return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
}

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