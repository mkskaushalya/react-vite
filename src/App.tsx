import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { useState } from 'react';


function App() {
  const [showAlert, setShowAlert] = useState(false);
  let items = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
    'San Jose',
    'Austin',
    'Jacksonville',
    'San Francisco'
];
  return (
      <div>
          {showAlert && <Alert color="success" onClose={() => setShowAlert(false)}>This is a success alert</Alert>}
          <ListGroup items={items} header="Cites">Cites</ListGroup>
          <Button color="success" onClick={() => setShowAlert(true)}>Submit</Button>
      </div>
  );
}

export default App
