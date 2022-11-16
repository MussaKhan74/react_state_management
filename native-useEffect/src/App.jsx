import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => {
        console.log(t);
        return t + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Time: {time}</div>;
};

function App() {
  const [names, setNames] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("/names.json")
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, []);

  const [selectedNameDetails, setSelectedNameDetails] = useState(null);

  // Given below comment example is the wrong way to fetch

  // useEffect(() => {
  //   if (selectedName) {
  //     fetch(`/${selectedName}.json`)
  //       .then((response) => response.json())
  //       .then((data) => setSelectedNameDetails(data));
  //   }
  // }, [selectedName]);

  const onSelectedNameChange = (name) => {
    fetch(`/${name}.json`)
      .then((response) => response.json())
      .then((data) => setSelectedNameDetails(data));
  };

  return (
    <div>
      <button onClick={() => setShow(!show)}>Show/Hide</button>
      {show && <Stopwatch />}
      <div>
        {names.map((name) => (
          <button key={name} onClick={() => onSelectedNameChange(name)}>
            {name}
          </button>
        ))}
      </div>
      {JSON.stringify(selectedNameDetails)}
    </div>
  );
}

export default App;
