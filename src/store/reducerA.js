const initialState = { a: 1 };

const reducerA = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "UPDATE_A") {
    newState.a = newState.a + action.b;
  }

  return newState;
};

export default reducerA;
