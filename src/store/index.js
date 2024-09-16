import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
	if (action.type === "increment") {
		return { counter: state.counter + 1, showCounter: state.showCounter };
	}

	if (action.type === "decrement") {
		return { counter: state.counter - 1, showCounter: state.showCounter };
	}
	if (action.type === "INCREMENTBY") {
		return {
			counter: state.counter + action.payload,
			showCounter: state.showCounter,
		};
	}
	if (action.type === "DECREMENTBY") {
		return {
			counter: state.counter - action.payload,
			showCounter: state.showCounter,
		};
	}

	return state;
};

const store = createStore(counterReducer);

export default store;
//Exporting so that the React components can use Redux store

// const counterSuscriber = () => {
// 	const latestState = store.getState();
// };

// store.subscribe(counterSuscriber);
