import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import "./App.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Button from "./components/Button";
import { Children, useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let countries = ["Spain", "Portugal", "England", "Thailand"];

  //passing functions via props
  //through a separate event handler
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  //appearing and disappearing an Alert - Mosh's version
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div className="custom-bg">
      {" "}
      {/* Have two ListGroup components that have their own state independent to the other */}
      {/*<ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />{" "}*/}
      {/*Mosh's version - logical and between alert visible and this expression -*/}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Hello
      </Button>
    </div>
  );
}

export default App;
