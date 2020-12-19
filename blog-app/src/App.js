import { useState } from "react";

function Alaskdj(props) {
  return (
    <>
      <div>{props.asd}</div>
    </>
  );
}

function App() {
  const [counter, setCounter] = useState(0);

  function aumentarContador() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={aumentarContador}>CONTAR</button>
      <Alaskdj asd={counter}></Alaskdj>
    </div>
  );
}

export default App;
