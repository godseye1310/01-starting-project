import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
	//select or get a state by useSelector()
	const counter = useSelector((state) => state.counter);
	const showCounter = useSelector((state) => state.showCounter);
	const toggleCounterHandler = () => {
		dispatch({ type: "toggle" });
	};

	//React Redux will automaticlly set-up a subscription to the Redus store for this component when use useSelector.
	//component will automatically receive the lastest data whenever the data changes in the Redux store. Its Reactive.
	//when the component gets unmounted the Redux will also automatically clear the subscription for this component.
	//Redux manages all this behind the scenes.

	//dispatch functions using useDispatch to manipulate state.
	//this is a function which will dispatch an action against our Redux store
	const dispatch = useDispatch();

	const incrementHandler = () => {
		dispatch({ type: "increment" });
	};

	const decrementHandler = () => {
		dispatch({ type: "decrement" });
	};

	const increaseHandler = () => {
		dispatch({ type: "INCREMENTBY", payload: 5 });
	};

	const decreseHandler = () => {
		dispatch({ type: "DECREMENTBY", payload: 5 });
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<div>
				<button onClick={increaseHandler}>Increment by 5</button>
				<button onClick={decreseHandler}>Decrement by 5</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
