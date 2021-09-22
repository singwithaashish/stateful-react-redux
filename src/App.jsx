import { useSelector, useDispatch } from "react-redux";





function App() {
  // ! useSelector gets state
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.logged);
  // ! dispatch is used to call any modify function that returns a {type: "INCREMENT"}
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>counter = {counter}</h1>
      <button onClick={() => dispatch({type: "add"})}>Increment</button>
      <button>Decrement</button>

      {isLogged ? <h1>welcome user</h1> : <h1>please login</h1>}
    </div>
  );
}

export default App;
