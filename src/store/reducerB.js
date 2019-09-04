const initialState = { b: 1 };

const reducerB = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "UPDATE_B") {
    //   b: newState.a + newState.b
    newState.b = newState.b + action.a;
  }

  return newState;
};

export default reducerB;
