import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
	//select or get a state by useSelector()
	const counter = useSelector((state) => state.counter);
	const toggleCounterHandler = () => {};

	//dispatch functions using useDispatch to manipulate state.
	//this is a function which will dispatch an action against our Redux store
	const dispatch = useDispatch();

	const incrementHandler = () => {
		dispatch({ type: "increment" });
	};

	const decrementHandler = () => {
		dispatch({ type: "decrement" });
	};

	const increment5Handler = () => {
		dispatch({ type: "INCREMENTBY5" });
	};

	const decrement5Handler = () => {
		dispatch({ type: "DECREMENTBY5" });
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<div>
				<button onClick={increment5Handler}>Increment by 5</button>
				<button onClick={decrement5Handler}>Decrement by 5</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
