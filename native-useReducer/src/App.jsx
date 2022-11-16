import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      first: "",
      last: "",
    }
  );

  return (
    <div className='App'>
      <input
        type='text'
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })}
      />
      <input
        type='text'
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })}
      />
      <div>First: {state.first}</div>
      <div>Last: {state.last}</div>
    </div>
  );
}

export default App;
