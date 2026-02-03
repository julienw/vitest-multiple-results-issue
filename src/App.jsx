import { useRef } from "react";

function App() {
  const dialog1Ref = useRef(null);
  const dialog2Ref = useRef(null);

  const openDialog1 = () => {
    dialog1Ref.current?.showModal();
  };

  const openDialog2 = () => {
    dialog2Ref.current?.showModal();
  };

  return (
    <>
      <button onClick={openDialog1}>Open Dialog 1</button>
      <button onClick={openDialog2}>Open Dialog 2</button>

      <dialog ref={dialog1Ref}>
        <form method="dialog">
          <label htmlFor="input-1">Enter text:</label>
          <input type="text" name="text-input" />
          <button type="submit">OK</button>
        </form>
      </dialog>

      <dialog ref={dialog2Ref}>
        <form method="dialog">
          <label htmlFor="input-2">Enter text:</label>
          <input type="text" name="text-input" />
          <button type="submit">OK</button>
        </form>
      </dialog>
    </>
  );
}

export default App;
