import Input from "./components/Input";
import Form from "./components/Form";
import Button from "./components/Button";

function App() {
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  }

  return (
    <main>
      <Form>
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
