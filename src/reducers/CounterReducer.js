const CounterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      //state = { ...state, name: action.payload };
      return state + 1;
    case "DECREMENT":
      //state = { ...state, age: action.payload };
      return state - 1;
    default:
      return state;
  }
};

export default CounterReducer;
