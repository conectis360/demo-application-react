import Input from "./components/Input";
import Form from "./components/Form";
import Button from "./components/Button";
import { useRef } from "react";

function App() {
  const customForm = useRef(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input label="Name" id="name" type="text"></Input>
        <Input label="Age" id="age" type="number"></Input>
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
