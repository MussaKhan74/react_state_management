import { useState } from "react";

function NameList() {
  const [list, setList] = useState(["jack", "jill", "john"]);
  const [name, setName] = useState("");

  const addName = () => {
    setList([...list, name]);
    setName("");
  };

  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addName}>Add Name</button>
    </div>
  );
}

function Couter() {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };

  return (
    <div className='App'>
      <button onClick={addOne}>Count = {count}</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Couter />
      <NameList />
    </div>
  );
}

export default App;
