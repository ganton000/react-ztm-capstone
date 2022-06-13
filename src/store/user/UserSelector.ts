import { createSelector } from 'reselect';

import { RootState } from '../store';

import { UserState } from './UserReducer';

export const selectUserReducer = (state: RootState): UserState => state.user;

//selector to get currentUser
export const selectCurrentUser = createSelector(
	selectUserReducer,
	(user) => user.currentUser
);