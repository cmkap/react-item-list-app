import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Form from "./components/Form";
import cities from "./data/cities";

function App() {
  const [items, setItems] = useState(cities);

  return (
    <>
      <ListGroup
        items={items}
        heading="Item List"
        onDelete={(item) => setItems(items.filter((i) => i !== item))}
      />
      <div className="mt-5">
        <Form onSubmit={(data) => setItems([data.item, ...items])} />
      </div>
    </>
  );
}

export default App;
