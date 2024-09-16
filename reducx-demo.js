const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action = {}) => {
	if (action.type === "increment") {
		return {
			counter: state.counter + 1,
		};
	}
	if (action.type === "decrement") {
		return {
			counter: state.counter - 1,
		};
	}
	if (action.type === "INCREMENTBY") {
		return {
			counter: state.counter + action.payload,
		};
	}
	if (action.type === "DECREMENTBY") {
		return {
			counter: state.counter - action.payload,
		};
	}
	return state;
};

const store = redux.createStore(counterReducer);

const counterSuscriber = () => {
	const latestState = store.getState();
	console.log(latestState);
};

store.subscribe(counterSuscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "INCREMENTBY", payload: 2 });
store.dispatch({ type: "DECREMENTBY", payload: 2 });
store.dispatch({ type: "INCREMENTBY", payload: 6 });
