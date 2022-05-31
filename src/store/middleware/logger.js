//makeshift logger Middleware example
export const loggerMiddleware = (store) => (next) => (action) => {
	if (!action.tye) { return next(action); }

	console.log('type: ', action.type);
	console.log('payload: ', action.payload);
	console.log('currentState: ', store.getState());

	//hits reducers and updates store
	next(action);

	console.log('next state: ', store.getState());
  };