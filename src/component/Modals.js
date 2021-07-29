import React, {useState} from "react";
import "./Modal.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Modals = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
      <>
      <Button variant="primary" onClick={handleShow}>
      Log In
    </Button>

    <Modal className="p-3" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>LOGIN</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input className="form-control input-lg" id="inputlg" type="text" placeholder="Enter your Email-id"/><br/>
        <input className="form-control input-lg" id="inputlg" type="text" placeholder="Enter Password"/>
      </Modal.Body>
      <Modal.Footer className="p-2">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Login
        </Button>
       
      </Modal.Footer>
      
    </Modal>
    <Button className="m-2" variant="primary">
      Log Out
    </Button>
  </>
   

    )

}



export default Modals;