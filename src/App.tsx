import { useRef } from "react";
import Input from "./components/Input";

function App() {
  const input = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input label="Teste" id="test" ref={input}></Input>
    </main>
  );
}

export default App;
