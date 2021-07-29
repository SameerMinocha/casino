import './App.css';
import {useState, useEffect} from 'react'
import Header from './component/Header'
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function App() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  

  return (
    <div className="App">
      <Header/>
      <div class="vertical-center">
        <h3> Welcome to Online Casino</h3>
      <Button variant="primary" className="start-btn" onClick={handleShow}>
      Let's Start Game
    </Button>
    <Modal className="p-3" show={show} onHide={handleClose}>
      
    </Modal>
       </div>
     
    </div>
  );
}

export default App;
