import { AnyAction } from 'redux';

//vid 202
type Matchable<AC extends () => AnyAction> = AC & {
	type: ReturnType<AC>['type'];
	match(action: AnyAction): action is ReturnType<AC>;
}

export function withMatcher<AC extends () => AnyAction & { type: string }>(actionCreator: AC): Matchable<AC>;

export function withMatcher<AC extends (...args: any[]) => AnyAction & { type: string}>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
	const type = actionCreator().type;
	return Object.assign(actionCreator, {
		type,
		match(action: AnyAction) {
			return action.type === type;
		}
	})
}

export type ActionWithPayload<T, P> = {
	type: T;
	payload: P;
};

export type Action<T> = {
	type: T;
};

//Overloading
function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

function createAction<T extends string>(type: T, payload: void): Action<T>;

function createAction<T extends string, P>(
	type: T, payload: P) {
		return { type, payload }
}


//const createAction = (type, payload) => ({ type, payload });

export default createAction;