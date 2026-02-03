import { useState, useRef } from "react";

function App() {
  const [_, setLogGeneration] = useState(0);
  const logs = useRef([]);

  const onClickFirst = () => {
    logs.current.push("click first");
    setLogGeneration((a) => a + 1);
  };
  const onClickSecond = () => {
    logs.current.push("click second");
    setLogGeneration((a) => a + 1);
  };
  return (
    <>
      <button onClick={onClickFirst}>Click me 1</button>
      <button onClick={onClickSecond}>Click me 2</button>
      <pre>
        {logs.current.map((log) => (
          <>
            {log}
            <br />
          </>
        ))}
      </pre>
    </>
  );
}

export default App;
