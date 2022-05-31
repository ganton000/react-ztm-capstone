//Create action creator for UserReducer
import createAction  from '../../utils/reducer/reducer.utils';
import USER_ACTION_TYPES from './UserTypes';


//Creates and returns the action object
//of type USER_ACTION string and value of user payload
export const setCurrentUser = (user) => {
	return createAction(
		USER_ACTION_TYPES.SET_CURRENT_USER,
		user
	)
};