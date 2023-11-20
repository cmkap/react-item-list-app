import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Form from "./components/Form";

function App() {
  const cities = ["New York", "San Francisco", "Tokyo", "London", "Milan"];
  const [items, setItems] = useState(cities);

  return (
    <>
      <ListGroup
        items={items}
        heading="Item List"
        onDelete={(item) => setItems(items.filter((i) => i !== item))}
      />
      <Form onSubmit={(data) => setItems([data.item, ...items])} />
    </>
  );
}

export default App;
