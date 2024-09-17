// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

//createSlice makes us prepare a slice of our global state.
//When we have different pieces of state that are not directly related.

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: "counter",
	initialState: initialCounterState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		incrementBy(state, action) {
			state.counter += action.payload;
		},
		decrementBy(state, action) {
			state.counter -= action.payload;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

const initialAuthState = {
	isAuthenticated: false,
};
const authSlice = createSlice({
	name: "authentication",
	initialState: initialAuthState,
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false;
		},
	},
});

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		auth: authSlice.reducer,
	},
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

// How to Basic Redux. //
// const counterReducer = (state = initialState, action) => {
// 	if (action.type === "increment") {
// 		return { counter: state.counter + 1, showCounter: state.showCounter };
// 	}

// 	if (action.type === "decrement") {
// 		return { counter: state.counter - 1, showCounter: state.showCounter };
// 	}
// 	if (action.type === "INCREMENTBY") {
// 		return {
// 			counter: state.counter + action.payload,
// 			showCounter: state.showCounter,
// 		};
// 	}
// 	if (action.type === "DECREMENTBY") {
// 		return {
// 			counter: state.counter - action.payload,
// 			showCounter: state.showCounter,
// 		};
// 	}

// 	if (action.type === "toggle") {
// 		return {
// 			showCounter: !state.showCounter,
// 			counter: state.counter,
// 		};
// 	}

// 	return state;
// };
// const store = createStore(counterReducer);

// export default store;
//Exporting so that the React components can use Redux store
