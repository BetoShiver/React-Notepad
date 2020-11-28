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
      <Button variant="info" onClick={handleShow}>
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
            <b>{props.noteTitle} </b>
            <p className="modDate">created on {props.createdDate}</p>
            {props.editDate && (
              <p className="created-date">Last Edit: {props.editDate} </p>
            )}
          </div>
        </Modal.Header>
        <Modal.Body>
          <ModalBodyForm
            noteTitle={props.noteTitle}
            noteContent={props.noteContent}
            onEditNote={(obj) => EditNote(obj)}
            handleClose={handleClose}
          ></ModalBodyForm>
        </Modal.Body>
      </Modal>
    </>
  );
}
