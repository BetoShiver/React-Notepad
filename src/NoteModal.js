import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import React from "react";
import ModalBodyForm from "./ModalBodyForm";

//taken from bootstrap documentation

export default function NoteModal(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const EditNote = (obj) => {
    setShow(false);
    props.EditNote(obj);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View Note
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        className="modal"
        centered
      >
        <Modal.Header closeButton>
          <div>
            <b>{props.title} </b>
            <p className="modDate">created on {props.date}</p>
            {props.editDate && (
              <p className="created-date">Last Edit: {props.editDate} </p>
            )}
          </div>
        </Modal.Header>
        <Modal.Body>
          <ModalBodyForm
            title={props.title}
            content={props.content}
            onEditNote={(obj) => EditNote(obj)}
            handleClose={handleClose}
          ></ModalBodyForm>
        </Modal.Body>
      </Modal>
    </>
  );
}
